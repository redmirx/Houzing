import styled from "styled-components";
import { ReactComponent as logoImg } from "./../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
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

const Menu = styled.div`
  width: 17.7rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem;
  background: #fff;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;
Menu.Text = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #000;
  cursor: pointer;
  :hover {
    color: #0061df;
  }
`;

export { Container, Wrapper, Content, Logo, LogoText, Link, Main, Menu };
