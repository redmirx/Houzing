import styled from "styled-components";

const Container = styled.div`
  /* height: 57.1rem; */
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 2s;
  ${({ zoom }) => zoom && "transform:scale(1.3)"};
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
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
  gap: 4.8rem;
  color: #fff;
  .title {
    color: #fff;
    width: 56.6rem;
  }
`;

export { Container, Image, Blur, Content };
