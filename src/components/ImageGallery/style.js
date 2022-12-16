import styled from "styled-components";

const Container = styled.div`
  max-width: 144rem;
  width: 100%;
  min-height: 40rem;
  /* height: 100%; */
  padding: var(--padding);
  background-color: orange;
  display: flex;
  gap: 2rem;
`;

const ImgWrapperMain = styled.div`
  min-width: 58rem;
  max-width: 58rem;
  height: 40rem;
`;

const ImgWrapperSec = styled.div`
  width: 58rem;
  min-height: 40rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Img = styled.div`
  width: 28rem;
  height: 19rem;
`;

export { Container, ImgWrapperMain, ImgWrapperSec, MainImg, Img };
