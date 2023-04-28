import React from 'react'
import styled from 'styled-components'
import {Img} from '../../GlobalStyles'
import One from '../../assets/images/RoadMap/RoadmapLeft/One.png'
import Two from '../../assets/images/RoadMap/RoadmapLeft/Two.png'
import Three from '../../assets/images/RoadMap/RoadmapLeft/Three.png'
import Four from '../../assets/images/RoadMap/RoadmapLeft/Four.png'
import Five from '../../assets/images/RoadMap/RoadmapLeft/Five.png'
import Six from '../../assets/images/RoadMap/RoadmapLeft/Six.png'
import LeftOne from '../../assets/images/RoadMap/LeftOne.png'
import LeftTwo from '../../assets/images/RoadMap/LeftTwo.png'
import LeftThree from '../../assets/images/RoadMap/LeftThree.png'
import LeftFour from '../../assets/images/RoadMap/LeftFour.png'
import LeftFive from '../../assets/images/RoadMap/LeftFive.png'

const RoadmapLeft = () => {
  return (
    <RoadmapContainer>
        <RoadmapContent>
            <Content>
            <Img src={One} alt="img" />
            <Text>2000-2020</Text>
            </Content>
            <DirectionLine><Img src={LeftOne} alt="line" /></DirectionLine>
        </RoadmapContent>
        <RoadmapContent>
            <Content>
            <Img src={Two} alt="img" />
            <Text>
                Concept of Decentralised <br />
                pedigree database on chain built <br />
                by the world's 20+m professional <br />
                dogs breeders
            </Text>
            </Content>
            <DirectionLine><Img src={LeftTwo} alt="line" /></DirectionLine>
        </RoadmapContent>
        <RoadmapContent>
            <Content>
            <Img src={Three} alt="img" />
            <Text>
                <Title>2019-2020</Title>
                ICO project fundraiser via BoNe token <br />
                on Ethereum Blockchain brought <br />
                development journey for the concept <br />
                of a pet dog asset token
            </Text>
            </Content>
            <DirectionLine><Img src={LeftThree} alt="line" /></DirectionLine>
        </RoadmapContent>
        <RoadmapContent>
            <Content>
            <Img src={Four} alt="img" />
            <Text>
                <Title>2022</Title>
                Has been a year of developing <br />
                smart contracts to facilitate <br />
                web3 on a pet dog breeder <br />
                website featuring Dog NFT <br />
                manager , a 2000 product <br />
                webshop + on chain integrated <br />
                social profile
            </Text>
            </Content>
            <DirectionLine><Img src={LeftFour} alt="line" /></DirectionLine>
        </RoadmapContent>
        <RoadmapContent>
            <Content>
            <Img src={Five} alt="img" />
            <Text>
                <Title>2024</Title>
                Provide a decentralized multi <br />
                dimensional pedigree <br />
                database solution service <br />
                partnership to the world's <br />
                thousands fragmented National <br />
                Kennel clubs
            </Text>
            </Content>
            <DirectionLine><Img src={LeftFive} alt="line" /></DirectionLine>
        </RoadmapContent>
        <RoadmapContent>
            <Img src={Six} alt="img" style={{width: "100%"}}/>
        </RoadmapContent>
    </RoadmapContainer>
  )
}

export const RoadmapContainer = styled.div`
display: flex;
flex-direction: column;
align-items: ${({Differ}) => Differ ? "flex-start" : "flex-end"};
margin-top: ${({Differ}) => Differ ? "150px" : "0"};
grid-gap: 150px;

@media screen and (max-width: 1020px) {
    img{width: 150px;}
}
@media screen and (max-width: 600px) {
    img{width: 100px;}
}

@media screen and (max-width: 760px){
 align-items: center;   
 width: 50%;
}

`;

export const RoadmapContent = styled.div`
display: flex;
align-items: center;
grid-gap: 20px;
`;

export const Text = styled.div`
font-family: 'Adamina-Regular';
font-size: 25px;
line-height: 34px;
color: #64BAFF;

@media screen and (max-width: 1500px) {
    font-size: 18px;
    line-height: 22px;
}
@media screen and (max-width: 1300px){
    text-align: center;
}
`;
export const Title = styled.div`
font-family: 'Adamina-Regular';
font-size: 25px;
line-height: 34px;
color: #2080CD
`;

export const Content = styled.div`
display: flex;
align-items: center;
grid-gap: 20px;

@media screen and (max-width: 1300px){
    flex-direction: ${({Wrap}) => Wrap ? "column-reverse" : "column"};
    justify-content: center;
}
`;

export const DirectionLine = styled.div`
@media screen and (max-width: 760px){display: none;}
`;

export default RoadmapLeft