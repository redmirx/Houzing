import React, { useContext } from "react";
import {
  Container,
  Content,
  Details,
  Image,
  Icons,
  Address,
  Footer,
} from "./style";
import noimg from "./../../assets/images/no-img.jpg";
import noUser from "./../../assets/images/noUser.jpeg";
import { info, warning } from "./../../hooks/useMessage.jsx";
import { PropertiesContext } from "./../../context/properties/index";
const HouseCard = ({ data, onClick }) => {
  // console.log(data);

  const {
    attachments,
    description,
    region,
    city,
    country,
    houseDetails: { beds: bed, bath, garage, area, room },
    price,
    salePrice,
    category,
    favorite,
    id,
  } = data;
  const url = attachments[0]?.imgPath;
  const [{ refetch }] = useContext(PropertiesContext);
  const save = (event) => {
    event.stopPropagation();
    // console.log(id);
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!favorite) res?.success && info("Added to favourites");
        else {
          res?.success && warning("Removed from favourites");
        }
        refetch && refetch();
        // console.log(res, "res");
      });
  };

  return (
    <Container onClick={onClick}>
      <button className="btn btn--light">featured</button>
      <button className="btn btn--dark">for sale</button>
      <Image src={url !== "string" ? url : noimg} />
      <Image.Wrapper>
        <Image.User src={noUser} alt="" />
      </Image.Wrapper>
      <Content>
        <Address>
          <div className="subTitle inline">
            {`${description} ${category?.name || "Category"}` ||
              "New Apartment Nice Wiew"}
          </div>
          <div className="info inline">
            {`${region}, ${city}, ${country} - Room(s) ${room}` ||
              "Quincy St, Brooklyn, NY, USA"}
          </div>
        </Address>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details footer>
          <Details.Item footer>
            <div
              className="info"
              style={{ textDecoration: "line-through" }}
            >{`$${price || "2,800"}/mo`}</div>
            <div className="subTitle">{`$${salePrice || "7,500"}/mo`}</div>
          </Details.Item>
          <Details.Item row>
            <Icons.Resize />
            <Icons.WrapperHeart
              onClick={save}
              favourite={favorite && String(favorite)}
            >
              <Icons.Heart favourite={favorite && String(favorite)} />
            </Icons.WrapperHeart>
          </Details.Item>
        </Details>
      </Footer>
    </Container>
  );
};

export default HouseCard;
