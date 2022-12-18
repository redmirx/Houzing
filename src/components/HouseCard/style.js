import styled from "styled-components";
import { ReactComponent as bed } from "./../../assets/icons/bed.svg";
import { ReactComponent as bath } from "./../../assets/icons/bath.svg";
import { ReactComponent as car } from "./../../assets/icons/car.svg";
import { ReactComponent as ruler } from "./../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "./../../assets/icons/resize.svg";
import { ReactComponent as heart } from "./../../assets/icons/heart.svg";

const Container = styled.div`
  width: 38rem;
  height: 42.9rem;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  /* transition: 0.6s; */
  position: relative;
  cursor: pointer;
  :hover {
    filter: drop-shadow(0px 2rem 3.8rem rgba(0, 0, 0, 0.06))
      drop-shadow(0px 0.7rem 4.6rem rgba(0, 0, 0, 0.06))
      drop-shadow(0px 0.8rem 1.5rem rgba(0, 0, 0, 0.06));
  }
  .btn {
    background-color: red;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    padding: 0.5rem 1.2rem;
    border: none;
    border-radius: 3px;
    position: absolute;
    cursor: pointer;
    color: #fff;
    :active {
      opacity: 0.9;
    }
  }
  .btn--light {
    background-color: #0061df;
    top: 2rem;
    left: 2rem;
  }
  .btn--dark {
    background-color: #0d263b;
    top: 2rem;
    right: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  min-height: 22rem;
  max-height: 22rem;
`;

const Content = styled.div`
  padding: 0 2rem;
  padding-top: 2.4rem;
  background-color: #fff;
  position: relative;
`;
Image.Wrapper = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  position: absolute;
  top: 50%;
  right: 2.3rem;
  transform: translateY(-35%);
  border-radius: 50%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

Image.User = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ footer }) => (footer ? "0" : "1.6rem 0")};
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
  gap: ${({ footer }) => !footer && "0.3rem"};
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
`;
Icons.WrapperHeart = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ favourite }) => (favourite ? "#CC5040" : "#f6f8f9")};
  :active {
    transform: scale(0.9);
  }
`;

Icons.Heart = styled(heart)`
  & path {
    fill: ${({ favourite }) => (favourite ? "#fff" : "#696969")};
  }
`;

const Footer = styled.div`
  border-top: 0.2rem solid #e6e9ec;
  background-color: #fff;
  padding: 0.8rem 2rem;
`;

export { Container, Image, Content, Address, Details, Icons, Footer };
