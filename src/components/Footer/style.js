import styled from "styled-components";
import { ReactComponent as pin } from "./../../assets/icons/pin.svg";
import { ReactComponent as phone } from "./../../assets/icons/phone.svg";
import { ReactComponent as email } from "./../../assets/icons/email.svg";
import { ReactComponent as facebook } from "./../../assets/icons/facebook.svg";
import { ReactComponent as skype } from "./../../assets/icons/skype.svg";
import { ReactComponent as instagram } from "./../../assets/icons/instagram.svg";
import { ReactComponent as linkedIn } from "./../../assets/icons/linkedIn.svg";
import { ReactComponent as logo } from "./../../assets/icons/logo.svg";

const Container = styled.div`
  background-color: #0d263b;
`;

const Row1 = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Row2 = styled.div`
  max-width: 144rem;
  padding: 1.6rem 13rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 144rem;
  padding: var(--padding);
  padding-top: 4.8rem;
  margin: 0 auto;
`;

const Content = styled.div``;
Content.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #ffffff;
  margin-bottom: 3.2rem;
`;
Content.Link = styled.div`
  display: flex;
  align-items: center;
  gap: 2.1rem;
  margin-bottom: 2rem;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #ffffff;
  }
  a:hover {
    color: #0061df;
  }

  .address {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    max-width: 25.6rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.7rem;
  margin-top: 4rem;
`;
Icons.Pin = styled(pin)`
  width: 1.8rem;
  height: 1.8rem;
`;
Icons.Phone = styled(phone)``;
Icons.Email = styled(email)``;
Icons.Facebook = styled(facebook)`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 10%;

  :hover {
    & path {
      fill: #166fe5;
    }
    box-shadow: 0px 0px 0px 4px #fff;
    transform: scale(1.5);
    background-color: #fff;
  }
`;
Icons.Skype = styled(skype)`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 10%;
  :hover {
    & path {
      fill: #0c65a4;
    }
    box-shadow: 0 0 0px 4px #fff;
    background-color: #fff;
    transform: scale(1.5);
  }
`;
Icons.Instagram = styled(instagram)`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 10%;
  :hover {
    & path {
      fill: #be06e1;
    }
    box-shadow: 0px 0px 0px 4px #fff;
    transform: scale(1.5);
    background-color: #fff;
  }
`;
Icons.LinkedIn = styled(linkedIn)`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 10%;
  :hover {
    & path {
      fill: #0a66c2;
    }
    box-shadow: 0px 0px 0px 4px #fff;
    background-color: #fff;
    transform: scale(1.5);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`;

Logo.Icon = styled(logo)`
  width: 3.1rem;
  height: 3.6rem;
  & path {
    fill: var(--colorPrimaryLight);
  }
`;
Logo.Text = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
  color: #fff;
`;

const Copyright = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #ffffff;
`;

export { Container, Links, Content, Icons, Copyright, Logo, Row1, Row2 };
