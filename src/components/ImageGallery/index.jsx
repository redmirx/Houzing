import React from "react";
import {
  Container,
  ImgWrapperMain,
  ImgWrapperSec,
  MainImg,
  Img,
} from "./style";
const ImageGallery = ({ images }) => {
  return (
    <Container>
      <ImgWrapperMain>
        <MainImg src={images && images[0].imgPath} alt="" />
      </ImgWrapperMain>
      <ImgWrapperSec>
        {images &&
          images.slice(1).map(
            (img, index) =>
              !img[0] && (
                <Img key={index}>
                  <img src={img.imgPath} alt="" width="100%" height="100%" />
                </Img>
              )
          )}
      </ImgWrapperSec>
    </Container>
  );
};

export default ImageGallery;
