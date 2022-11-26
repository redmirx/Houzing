import styled from "styled-components";

const Container = styled.div`
  max-width: 28rem;
  max-height: 35rem;
  width: 100%;
  min-height: 35rem;
  position: relative;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
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
  gap: 2.4rem;
  color: #fff;
`;

Content.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const Image = styled.img``;

export { Container, Blur, Content, Image };
