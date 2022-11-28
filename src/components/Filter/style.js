import styled from "styled-components";
import { ReactComponent as houses } from "./../../assets/icons/houses.svg";
import { ReactComponent as search } from "./../../assets/icons/search.svg";
import { ReactComponent as filter } from "./../../assets/icons/filter.svg";
import { Select } from "antd";
const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 2rem;
  // Width fixed
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Icons = styled.div``;
Icons.Houses = styled(houses)`
  margin-left: 15px;
`;
Icons.Search = styled(search)`
  margin-right: 0.8rem;
`;
Icons.Filter = styled(filter)`
  margin-right: 0.8rem;
`;

const MenuWrapper = styled.div`
  padding: 3rem;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
  background-color: #fff;
`;
const Section = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SelectAnt = styled(Select)`
  /* min-width: 25rem; */
  width: 70%;
  .ant-select-selector {
    height: 4.4rem !important;
    line-height: 4.4rem;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
