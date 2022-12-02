import styled from "styled-components";
import { ReactComponent as arrow } from "./../../assets/icons/arrow.svg";

const Container = styled.div`
  /* height: 57.1rem; */
  position: relative;
  /* border: 2px solid red; */
`;

const Arrow = styled(arrow)`
  width: 4.5rem;
  height: 4.5rem;
  padding: 1.5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%)
    ${({ right }) => (right ? "rotate(180deg)" : null)};
  left: ${({ left }) => left && "3rem"};
  right: ${({ right }) => right && "3rem"};
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
`;
Content.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  color: inherit;
`;

Content.Address = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: inherit;
`;

Content.Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: -0.02em;
  color: inherit;
`;

export { Container, Arrow, Image, Blur, Content };
