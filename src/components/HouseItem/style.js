import styled from "styled-components";
import { ReactComponent as share } from "./../../assets/icons/share.svg";
import { ReactComponent as favorite } from "./../../assets/icons/heart.svg";
import { ReactComponent as bed } from "./../../assets/icons/bed.svg";
import { ReactComponent as bath } from "./../../assets/icons/bath.svg";
import { ReactComponent as car } from "./../../assets/icons/car.svg";
import { ReactComponent as ruler } from "./../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "./../../assets/icons/calendar.svg";
const Container = styled.div`
  background-color: limegreen;
  max-width: 144rem;
  width: 100%;
  /* padding: var(--padding); */
  margin: auto;
  padding-bottom: 13.6rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: var(--padding);
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
`;

const Content = styled.div`
  background-color: purple;
  display: flex;
  align-items: ${({ align }) => align};
  flex-direction: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}rem`};
`;
Content.Title = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
// Content.Address = styled.div``;

const Icons = styled.div`
  background-color: skyblue;
  width: 3.5rem;
  height: 3.5rem;
  padding: 1.1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
Icons.Share = styled(share)``;
Icons.Favorite = styled(favorite)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;
const Details = styled.div`
  display: flex;
  gap: ${({ gap }) => `${gap}rem`};
  flex-direction: ${({ flex }) => flex};
  margin-bottom: 4.8rem;
  background-color: salmon;
`;

Details.Item = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : "flex-end")};
  gap: 0.8rem;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  text-decoration-line: line-through;
  color: #696969;
`;
Price.Sale = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Content.SubTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #0d263b;
`;

const Seller = styled.div`
  flex: 3;
`;
const Client = styled.div`
  flex: 1;
  max-width: 28.6rem;
  height: 47.6rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  /* gap: 1.9rem; */
  justify-content: space-between;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  /* background: #ffffff; */
  background-color: orange;
`;
const UserImg = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
`;

const Map = styled.div`
  padding: var(--padding);
`;

export {
  Container,
  Wrapper,
  Section,
  Content,
  Icons,
  Details,
  Price,
  Seller,
  Client,
  UserImg,
  Map,
};
