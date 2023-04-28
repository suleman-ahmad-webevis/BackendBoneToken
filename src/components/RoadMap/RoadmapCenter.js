import React from 'react'
import styled from 'styled-components'
import LeftOne from '../../assets/images/RoadMap/LeftOne.png'
import LeftTwo from '../../assets/images/RoadMap/LeftTwo.png'
import LeftThree from '../../assets/images/RoadMap/LeftThree.png'
import LeftFour from '../../assets/images/RoadMap/LeftFour.png'
import LeftFive from '../../assets/images/RoadMap/LeftFive.png'
import { Img } from '../../GlobalStyles'
import RightOne from '../../assets/images/RoadMap/RightOne.png'
import RightTwo from '../../assets/images/RoadMap/RightTwo.png'
import RightThree from '../../assets/images/RoadMap/RightThree.png'
import RightFour from '../../assets/images/RoadMap/RightFour.png'
import RightFive from '../../assets/images/RoadMap/RightFive.png'
import CenterLine from '../../assets/images/RoadMap/CenterLine.png'

const RoadmapCenter = () => {
  return (
    <RoadmapCenterContainer>
        <LeftPart>
            <Img src={LeftOne} alt="line" />
            <Img src={LeftTwo} alt="line" />
            <Img src={LeftThree} alt="line" />
            <Img src={LeftFour} alt="line" />
            <Img src={LeftFive} alt="line" style={{marginTop: "70px"}}/>
        </LeftPart>
        <Img src={CenterLine} alt="line" />
        <RightPart>
            <Img src={RightOne} alt="line" />
            <Img src={RightTwo} alt="line" />
            <Img src={RightThree} alt="line" />
            <Img src={RightFour} alt="line" style={{marginTop: "150px"}}/>
            <Img src={RightFive} alt="line" style={{marginTop: "80px"}}/>
        </RightPart>
    </RoadmapCenterContainer>
  )
}

export const RoadmapCenterContainer = styled.div`
display: flex;
`;

export const LeftPart = styled.div`
display: flex;
flex-direction: column;
grid-gap: 270px;
margin-top: 50px;
`;

export const RightPart = styled.div`
display: flex;
flex-direction: column;
grid-gap: 270px;
margin-top: 170px;
`;

export default RoadmapCenter