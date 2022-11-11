import styled from "styled-components";
import { ReactComponent as logoImg } from "./../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const Main = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--colorPrimaryLight);
  padding: var(--padding);
  height: 6.4rem;
  width: 100%;
  max-width: 1440px;
  /* font-size: 16px; */
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: var(--backgroundPrimary);
  }
`;

const Logo = styled(logoImg)`
  width: 3.1rem;
  height: 3.6rem;
  & path {
    fill: var(--colorPrimaryLight);
  }
  margin-right: 1.2rem;
`;

const LogoText = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 3.2rem;
  color: var(--colorPrimaryLight);
`;

export { Container, Wrapper, Content, Logo, LogoText, Link, Main };
