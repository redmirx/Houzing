import styled from "styled-components";
import { ReactComponent as discord } from "./../../assets/icons/discord.svg";
import { ReactComponent as house } from "./../../assets/icons/house-wide-prop.svg";
import { ReactComponent as calculator } from "./../../assets/icons/calculator.svg";
import { ReactComponent as map } from "./../../assets/icons/map.svg";

const Container = styled.div`
  background-color: #f5f7fc;
  margin-top: 8.8rem;
  margin-bottom: 9.6rem;
  padding: 4.8rem 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: ${({ margin }) => margin && "4rem"};
`;

Content.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #0d263b;
  text-align: center;
`;

const Icons = styled.div``;
Icons.House = styled(house)``;
Icons.Discord = styled(discord)``;
Icons.Calculator = styled(calculator)``;
Icons.Map = styled(map)``;

const Properties = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 144rem;
  padding: var(--padding);
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
  .subTitleLight {
    max-width: 23.5rem;
    text-align: center;
  }
`;

export { Container, Content, Properties, Icons, Item };
