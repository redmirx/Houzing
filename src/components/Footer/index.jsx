/* eslint-disable-next-line jsx-a11y/anchor-is-valid */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Links,
  Content,
  Icons,
  Row1,
  Row2,
  Logo,
  Copyright,
} from "./style";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row1>
        <Links>
          <Content>
            <Content.Title>Contact Us</Content.Title>
            <Content.Link>
              <Icons.Pin />
              <a className="address">
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </a>
            </Content.Link>
            <Content.Link>
              <Icons.Phone />
              <a href="tel: 123 456 7890">123 456 7890</a>
            </Content.Link>
            <Content.Link>
              <Icons.Email />
              <a href="mailto: support@houzing.com">support@houzing.com</a>
            </Content.Link>
            <Icons>
              <a href="https://www.facebook.com/" target="_blank">
                <Icons.Facebook />
              </a>
              <a href="https://www.skype.com/" target="_blank">
                <Icons.Skype />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Icons.Instagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <Icons.LinkedIn />
              </a>
            </Icons>
          </Content>
          <Content>
            <Content.Title>Discover</Content.Title>
            <Content.Link>
              <a>Chicago</a>
            </Content.Link>
            <Content.Link>
              <a>Los Angeles</a>
            </Content.Link>
            <Content.Link>
              <a>Miami</a>
            </Content.Link>
            <Content.Link>
              <a>New York</a>
            </Content.Link>
          </Content>
          <Content>
            <Content.Title>List by Category</Content.Title>
            <Content.Link>
              <a>Apartments</a>
            </Content.Link>
            <Content.Link>
              <a>Condos</a>
            </Content.Link>
            <Content.Link>
              <a>Houses</a>
            </Content.Link>
            <Content.Link>
              <a>Offices</a>
            </Content.Link>
            <Content.Link>
              <a>Retail</a>
            </Content.Link>
            <Content.Link>
              <a>Villas</a>
            </Content.Link>
          </Content>
          <Content>
            <Content.Title>Lists by Category</Content.Title>
            <Content.Link>
              <a>About Us</a>
            </Content.Link>
            <Content.Link>
              <a>Terms & Conditions</a>
            </Content.Link>
            <Content.Link>
              <a>Support Center</a>
            </Content.Link>
            <Content.Link>
              <a>Contact Us</a>
            </Content.Link>
          </Content>
        </Links>
      </Row1>
      <Row2>
        <Logo onClick={() => navigate("/home")}>
          <Logo.Icon />
          <Logo.Text>Houzing</Logo.Text>
        </Logo>
        <Copyright>Copyright &copy; {new Date().getFullYear()}</Copyright>
      </Row2>
    </Container>
  );
};

export default Footer;
