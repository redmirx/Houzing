import styled, { css } from "styled-components";
import { ReactComponent as share } from "./../../assets/icons/share.svg";
import { ReactComponent as favorite } from "./../../assets/icons/heart.svg";
import { ReactComponent as bed } from "./../../assets/icons/bed.svg";
import { ReactComponent as bath } from "./../../assets/icons/bath.svg";
import { ReactComponent as car } from "./../../assets/icons/car.svg";
import { ReactComponent as ruler } from "./../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "./../../assets/icons/calendar.svg";
import { ReactComponent as airConditioner } from "./../../assets/icons/air-conditioner.svg";
import { ReactComponent as barbecue } from "./../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "./../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "./../../assets/icons/dumbbell.svg";
import { ReactComponent as grass } from "./../../assets/icons/grass.svg";
import { ReactComponent as laundry } from "./../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "./../../assets/icons/microwave.svg";
import { ReactComponent as outdoorShower } from "./../../assets/icons/outdoor-shower.svg";
import { ReactComponent as refrigerator } from "./../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "./../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "./../../assets/icons/swimmer.svg";
import { ReactComponent as coaxial } from "./../../assets/icons/coaxial.svg";
import { ReactComponent as liquidSoap } from "./../../assets/icons/liquid-soap.svg";
import { ReactComponent as wifi } from "./../../assets/icons/wifi.svg";
import { ReactComponent as blinds } from "./../../assets/icons/blinds.svg";
import { ReactComponent as chair } from "./../../assets/icons/chair.svg";

const common = css`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  background-color: #f6f8f9;
  border-radius: 50%;
`;

const Container = styled.div`
  max-width: 144rem;
  width: 100%;
  /* padding: var(--padding); */
  margin: auto;
  padding-bottom: 13.6rem;
`;

const Wrapper = styled.div`
  max-width: 144rem;
  display: flex;
  gap: 2rem;
  padding: var(--padding);
  margin-top: 2.4rem;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}rem`};
`;

const Content = styled.div`
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

const Icons = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1.1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.15s;
  ${({ like }) =>
    like &&
    ":active{transform: scale(0.9)};:hover{background-color: #CC5040;& path{fill: #fff}};"}
`;
Icons.Share = styled(share)``;
Icons.Favorite = styled(favorite)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;

/////////////// Features ///////////////

const Features = styled.div`
  max-width: 89.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 2.4rem;
  margin-top: 2.4rem;
  padding-bottom: 1.2rem;
  margin-bottom: 1.8rem;
  border-bottom: 1px solid #e6e9ec; ;
`;

Features.Item = styled.div`
  width: 17.7rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

Icons.AirConditioner = styled(airConditioner)`
  ${common}
`;
Icons.Barbecue = styled(barbecue)`
  ${common}
`;
Icons.Dryer = styled(dryer)`
  ${common}
`;
Icons.Dumbbell = styled(dumbbell)`
  ${common}
`;
Icons.Grass = styled(grass)`
  ${common}
`;
Icons.Laundry = styled(laundry)`
  ${common}
`;
Icons.Microwave = styled(microwave)`
  ${common}
`;
Icons.OutdoorShower = styled(outdoorShower)`
  ${common}
`;
Icons.Refrigerator = styled(refrigerator)`
  ${common}
`;
Icons.Sauna = styled(sauna)`
  ${common}
`;
Icons.Swimmer = styled(swimmer)`
  ${common}
`;
Icons.Coaxial = styled(coaxial)`
  ${common}
`;
Icons.LiquidSoap = styled(liquidSoap)`
  ${common}
`;
Icons.Wifi = styled(wifi)`
  ${common}
`;
Icons.Blinds = styled(blinds)`
  ${common}
`;
Icons.Chair = styled(chair)`
  ${common}
`;

const Details = styled.div`
  display: flex;
  gap: ${({ gap }) => `${gap}rem`};
  flex-direction: ${({ flex }) => flex};
  margin-bottom: 4.8rem;
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
  max-width: 28rem;
  height: 47.6rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  /* gap: 1.9rem; */
  justify-content: space-between;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  background-color: #fff;
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
  Features,
  Map,
};
