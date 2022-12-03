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
              <a href="/" className="address">
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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Facebook />
              </a>
              <a
                href="https://www.skype.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Skype />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Instagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.LinkedIn />
              </a>
            </Icons>
          </Content>
          <Content>
            <Content.Title>Discover</Content.Title>
            <Content.Link>
              <a href="/">Chicago</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Los Angeles</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Miami</a>
            </Content.Link>
            <Content.Link>
              <a href="/">New York</a>
            </Content.Link>
          </Content>
          <Content>
            <Content.Title>List by Category</Content.Title>
            <Content.Link>
              <a href="/">Apartments</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Condos</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Houses</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Offices</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Retail</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Villas</a>
            </Content.Link>
          </Content>
          <Content>
            <Content.Title>Lists by Category</Content.Title>
            <Content.Link>
              <a href="/">About Us</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Terms & Conditions</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Support Center</a>
            </Content.Link>
            <Content.Link>
              <a href="/">Contact Us</a>
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
