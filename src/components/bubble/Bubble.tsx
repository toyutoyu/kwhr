import { ReactNode } from "react";
import styled from "styled-components";
import styles from "./Bubble.module.css";

const MessageWindow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MessageArea = styled.div`
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  background-color: black;
  position: absolute;
  width: 70px;
  height: 60px;
  bottom: -10px;
  left: 50%;
  z-index: -31;

  clip-path: polygon(
    62% 43%,
    100% 17%,
    100% 73%,
    50% 100%,
    44% 56%,
    0 71%,
    55% 8%
  );
  transform: rotate(-90deg) translateY(-80%);

  @media screen and (min-width: 480px) {
    transform: rotate(0deg) translateY(-50%);
    top: 40%;
    left: -36px;
  }
`;

type Props = {
  children: ReactNode;
};

export default function Bubble({ children }: Props) {
  return (
    <MessageWindow className={styles["message-window"]}>
      <MessageArea className={styles["message-area"]}>
        <Content className={styles["content"]}>
          <div className={styles["background-white"]}></div>
          <div className={styles["background-black"]}></div>
          <div className={styles["text-area"]}>{children}</div>
        </Content>
        <Arrow />
      </MessageArea>
    </MessageWindow>
  );
}
