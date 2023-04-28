import React from "react";
import { GlobalHeading, Img } from "../../../GlobalStyles";
import {
  DogCardDetail,
  DogCardInfo,
  DogCardWrapper,
  DogPic,
  DogPicSection,
  DogSaleCard,
} from "./DogForSaleCard.style";
import Line from "../../../assets/images/DogForSale/Line.png";
import DogVideoPoster from "../../../assets/images/DogForSale/DogVideoPoster.png";
import Dog from "../../../assets/images/DogForSale/Dog.png";
import Female from "../../../assets/images/DogForSale/Female.png";
import Male from "../../../assets/images/DogForSale/Male.png";
import { NavLink } from "react-router-dom";
import { saleCardData } from "./DogForSaleCardData";

const DogForSaleCard = () => {
  return (
    <DogSaleCard>
      <DogCardWrapper>
        <DogCardDetail>
          {saleCardData.map((value) => (
            <DogCardInfo>
              <GlobalHeading
                Color={"#8F98A8"}
                FontSize={"12px"}
                FontWeight={"400"}
                LineHeight={"18px"}
              >
                {value.title}
              </GlobalHeading>
              <GlobalHeading
                Color={"#282C34"}
                FontSize={"12px"}
                FontWeight={"400"}
                LineHeight={"18px"}
              >
                {value.data}
              </GlobalHeading>
            </DogCardInfo>
          ))}
        </DogCardDetail>
      </DogCardWrapper>
      <Img src={Line} />
      <DogPicSection>
        <DogPic>
          <Img src={Dog} />
          <div>
            <h5
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                background:
                  "-webkit-linear-gradient(90deg, #986099 -8.82%, #FF33F7 111.76%)",
                WebkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              Mother
            </h5>
            <Img src={Female} />
            <h5
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                background:
                  "-webkit-linear-gradient(90deg, #1624A1 -8.82%, #2DB5EF 111.76%)",
                WebkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              Father
            </h5>
            <Img src={Male} />
          </div>
        </DogPic>
        <DogPic>
          <video controls poster={DogVideoPoster}>
            <source type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </DogPic>
      </DogPicSection>
      <NavLink>
        <GlobalHeading
          Color={"#3980EA"}
          FontSize={"10px"}
          FontWeight={"900"}
          LineHeight={"14px"}
        >
          More Information
        </GlobalHeading>
      </NavLink>
    </DogSaleCard>
  );
};

export default DogForSaleCard;
