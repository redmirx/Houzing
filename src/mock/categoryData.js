import React from "react";
import styled from "styled-components";
// Images

import office from "./../assets/images/office.png";
import apartment from "./../assets/images/apartment.png";
import house from "./../assets/images/house.png";
import villa from "./../assets/images/villa.png";

// Icons

import { ReactComponent as officeIcon } from "./../assets/icons/office.svg";
import { ReactComponent as apartmentIcon } from "./../assets/icons/apartment.svg";
import { ReactComponent as houseIcon } from "./../assets/icons/house.svg";
import { ReactComponent as villaIcon } from "./../assets/icons/villa.svg";

const OfficeIcon = styled(officeIcon)`
  width: 6rem;
  height: 6rem;
`;
const ApartmentIcon = styled(apartmentIcon)`
  width: 6rem;
  height: 6rem;
`;
const HouseIcon = styled(houseIcon)`
  width: 6rem;
  height: 6rem;
`;
const VillaIcon = styled(villaIcon)`
  width: 6rem;
  height: 6rem;
`;

export const CategoryIcons = [
  <OfficeIcon />,
  <ApartmentIcon />,
  <HouseIcon />,
  <VillaIcon />,
];

export const CategoryImages = [office, apartment, house, villa];
