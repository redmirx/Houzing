import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding: 9.6rem 13rem;
  overflow: hidden;
  /* background-color: springgreen; */
  .slick-dots li button:before {
    opacity: 0.25;
    color: #0061df;
    line-height: 0;
    padding-top: 3.2rem;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.9;
  }
  .slick-slider {
  }

  .slick-list {
    /* overflow: visible; */
  }
  background-color: salmon;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;

export { Container, Content };
