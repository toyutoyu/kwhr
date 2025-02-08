import styled from "styled-components";

const StyledCheck = styled.span`
  @keyframes check__border--entrance {
    100% {
      transform: rotateZ(315deg);
    }
  }

  @keyframes check__check--entrance {
    0% {
      opacity: 0;
    }
  }

  @keyframes check__check-top--entrance {
    0% {
      height: 0px;
    }
  }

  @keyframes check__check-bottom--entrance {
    0% {
      width: 0px;
    }
  }

  $check-color: #005ba9;

  .check {
    position: relative;
    height: 256px;
    width: 256px;
    border-radius: 50%;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.02);

    &__border,
    &__check {
      position: absolute;
    }

    &__border {
      border: 24px solid $check-color;
      border-right-color: transparent;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      transform: rotateZ(-45deg);
      animation: check__border--entrance 0.5s ease;

      &::before,
      &::after {
        content: "";
        width: 24px;
        height: 24px;
        background: $check-color;
        position: absolute;
      }

      &::before {
        top: 9px;
        right: 11px;
        border-radius: 0 50% 50% 50%;
      }

      &::after {
        bottom: 9px;
        right: 11px;
        border-radius: 50% 50% 50% 0%;
      }
    }

    &__check {
      transform: rotateZ(45deg);
      top: -15%;
      right: 20%;
      bottom: 30%;
      left: 45%;
      animation: check__check--entrance 0.4s ease;

      &-top,
      &-bottom {
        position: absolute;
        background: $check-color;
        border-radius: 12px;
      }

      &-top {
        width: 24px;
        right: 0;
        height: 100%;
        bottom: 0;
        animation: check__check-top--entrance 0.3s ease 0.3s backwards;
      }

      &-bottom {
        height: 24px;
        left: 0;
        width: 100%;
        bottom: 0;
        animation: check__check-bottom--entrance 0.3s ease backwards;
      }
    }
  }
`;

export default function CheckAnime() {
  return (
    <StyledCheck className="check">
      <span className="check__border"></span>
      <span className="check__check">
        <span className="check__check-bottom"></span>
        <span className="check__check-top"></span>
      </span>
    </StyledCheck>
  );
}
