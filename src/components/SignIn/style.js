import styled, { css } from "styled-components";

const common = css`
  font-style: normal;
  font-weight: 600;
`;

const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 58rem;
  height: 37.6rem;
  padding: 2.4rem 3rem;
  margin: 6.4rem 0;
  background-color: #fff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;
Content.Title = styled.div`
  ${common}
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #0d263b;
`;
Content.SubTitle = styled.div`
  ${common}
  font-size: 1.4rem;
  line-height: 2rem;
  color: #696969;
`;

export { Container, Content };
