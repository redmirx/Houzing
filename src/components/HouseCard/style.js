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
  cursor: pointer;
  :hover {
    filter: drop-shadow(0px 2rem 3.8rem rgba(0, 0, 0, 0.06))
      drop-shadow(0px 0.7rem 4.6rem rgba(0, 0, 0, 0.06))
      drop-shadow(0px 0.8rem 1.5rem rgba(0, 0, 0, 0.06));
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
Icons.Heart = styled(heart)`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  cursor: pointer;
  :active {
    stroke: salmon;
    transform: scale(0.9);
  }
`;

const Footer = styled.div`
  border-top: 0.2rem solid #e6e9ec;
  background-color: #fff;
  padding: 0.8rem 2rem;
`;

export { Container, Image, Content, Address, Details, Icons, Footer };
