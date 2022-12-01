import styled from "styled-components";

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
  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: black;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;

export { Container, Content };
