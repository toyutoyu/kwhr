import styled from "styled-components";

const StyledSquareLoader = styled.div`
  width: 40px;
  height: 40px;
  aspect-ratio: 1;
  display: grid;
  .span1,
  .span2,
  .span3,
  .span4 {
    content: "";
    grid-area: 1/1;
    background: white;
    clip-path: polygon(0 0, 101% 0, 0 100%);
  }
  .span1 {
    animation: l1 2.5s infinite;
  }
  .span2 {
    animation: l2 2.5s infinite;
  }
  .span3 {
    animation: l3 2.5s infinite;
  }
  .span4 {
    animation: l4 2.5s infinite;
  }

  .loader::after {
    --s: -1, -1;
  }
  @keyframes l1 {
    0%,
    6% {
      transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
    }
    20% {
      transform: scale(var(--s, 1)) translate(20px, -20px) rotate(90deg);
    }
    40% {
      transform: scale(var(--s, 1)) translate(20px, -20px);
    }
    60% {
      transform: scale(var(--s, 1)) translate(20px, -20px);
    }
    90%,
    100% {
      transform: scale(var(--s, 1)) translate(0px, 0px);
    }
  }
  @keyframes l2 {
    0%,
    6% {
      transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
    }
    20% {
      transform: scale(var(--s, 1)) translate(-20px, 20px) rotate(90deg);
    }
    40% {
      transform: scale(var(--s, 1)) translate(-20px, 20px);
    }
    60% {
      transform: scale(var(--s, 1)) translate(-20px, 20px);
    }
    90%,
    100% {
      transform: scale(var(--s, 1)) translate(0px, 0px);
    }
  }
  @keyframes l3 {
    0%,
    6% {
      transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
    }
    20% {
      transform: scale(var(--s, 1)) translate(-20px, -20px) rotate(90deg);
    }
    40% {
      transform: scale(var(--s, 1)) translate(-20px, -20px) rotate(0deg);
    }
    60% {
      transform: scale(var(--s, 1)) translate(-20px, -20px) rotate(0deg);
    }
    90%,
    100% {
      transform: scale(var(--s, 1)) translate(0, 0) rotate(180deg);
    }
  }

  @keyframes l4 {
    0%,
    6% {
      transform: scale(var(--s, 1)) translate(0, 0) rotate(-180deg);
    }
    20% {
      transform: scale(var(--s, 1)) translate(20px, 20px) rotate(-180deg);
    }
    40% {
      transform: scale(var(--s, 1)) translate(20px, 20px) rotate(-90deg);
    }
    60% {
      transform: scale(var(--s, 1)) translate(20px, 20px) rotate(-90deg);
    }
    90%,
    100% {
      transform: scale(var(--s, 1)) translate(0px, 0px) rotate(-90deg);
    }
  }
`;

export default function SquareLoader() {
  return (
    <StyledSquareLoader className="loader">
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
    </StyledSquareLoader>
  );
}
