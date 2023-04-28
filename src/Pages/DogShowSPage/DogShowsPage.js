import React, { useEffect } from "react";
import { DogShowsScheduler } from "./DogShowsData";
import { Img } from "../../GlobalStyles";
import {
  DogShowContainer,
  DogShowPage,
  WorldMapImage,
  DogShowDataWrapper,
  DogShowCard,
  Events,
  Event,
  RLEventSection,
  LocationImg,
} from "./DogShowPage.style";
import WorldMap from "../../assets/images/DogShowsImages/WorldMap.png";

const DogShows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DogShowPage>
      <DogShowContainer>
        <WorldMapImage>
          <Img src={WorldMap} />
        </WorldMapImage>
        <DogShowDataWrapper>
          {DogShowsScheduler.map((value) => (
            <DogShowCard>
              <h1>{value.month}</h1>
              <RLEventSection>
                <Events>
                  {value.leftData.map((value) => (
                    <Event>
                      <LocationImg>
                        <Img src={value.imageUrl} />
                      </LocationImg>
                      <h2>{value.date}</h2>
                      <h2>{value.city}</h2>
                      <LocationImg>
                        <Img src={value.youtube} />
                      </LocationImg>
                    </Event>
                  ))}
                </Events>
                <Events>
                  {value.rightData.map((value) => (
                    <Event>
                      <LocationImg>
                        <Img src={value.imageUrl} />
                      </LocationImg>
                      <h2>{value.date}</h2>
                      <h2>{value.city}</h2>
                      <LocationImg>
                        <Img src={value.youtube} />
                      </LocationImg>
                    </Event>
                  ))}
                </Events>
              </RLEventSection>
              <hr />
            </DogShowCard>
          ))}
        </DogShowDataWrapper>
      </DogShowContainer>
    </DogShowPage>
  );
};

export default DogShows;
