import styled from "styled-components";
import { ReactComponent as arrow } from "./../../assets/icons/arrow.svg";

const Container = styled.div`
  max-width: 144rem;
  width: 100%;
  padding: var(--padding);
  margin: 0 auto;
  margin-top: 9.6rem;
  .slick-dots li button:before {
    color: #0061df;
    line-height: 0;
    padding-top: 3.2rem;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.9;
  }
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;

const Arrow = styled(arrow)`
  width: 4.5rem;
  height: 4.5rem;
  padding: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, 80%)
    ${({ right }) => (right ? "rotate(180deg)" : null)};
  left: ${({ left }) => left && "3.2rem"};
  right: ${({ right }) => right && "3.2rem"};

  background: #ffffff;
  & path {
    fill: #0d263b;
  }
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.25);
  :hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export { Container, Content, Arrow };
