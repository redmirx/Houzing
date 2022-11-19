import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 144rem;
  margin: 0 auto;
  padding: var(--padding);
  padding-top: 4.2rem; // default 6.4rem
  /* background-color: skyblue; */
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.1rem;
  row-gap: 2rem;
  margin-top: 9rem;
`;

export { Container, Title, Cards };
