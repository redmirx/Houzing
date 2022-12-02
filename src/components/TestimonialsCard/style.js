import styled, { css } from "styled-components";

const Container = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
  border-radius: 6px;
  overflow: hidden;
  :hover {
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  }
`;

const common = css`
  font-style: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
`;

const Description = styled.div`
  ${common}
  background: #ffffff;
  font-weight: 400;
  color: #696969;
  height: 19.7rem;
  padding: 4rem 4.8rem 6.1rem 4.8rem;

  position: relative;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

Author.Name = styled.div`
  ${common}
  font-weight: 600;
  color: #0d263b;
`;

Author.Job = styled.div`
  ${common}
  font-weight: 400;
  color: #696969;
`;
export { Container, Description, Image, Author };
