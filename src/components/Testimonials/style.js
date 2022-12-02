import styled from "styled-components";
import { ReactComponent as arrow } from "./../../assets/icons/arrow.svg";

const Container = styled.div`
  background-color: #f5f7fc;
  margin-top: 8.8rem;
  padding: 4.8rem 0;

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: black;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  }
  margin-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: ${({ margin }) => margin && "4rem"};
`;

Content.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #0d263b;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: var(--padding);
  position: relative;
  /* background-color: springgreen; */
`;

const Arrow = styled(arrow)`
  width: 4.5rem;
  height: 4.5rem;
  padding: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%)
    ${({ right }) => (right ? "rotate(180deg)" : null)};
  left: ${({ left }) => left && "3.2rem"};
  right: ${({ right }) => right && "3.2rem"};

  background: #ffffff;
  & path {
    fill: #0d263b;
  }
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  :hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export { Container, Content, Wrapper, Arrow };
