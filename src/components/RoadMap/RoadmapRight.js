import React from 'react'
import {Img} from '../../GlobalStyles'
import One from '../../assets/images/RoadMap/RoadmapRight/One.png'
import Two from '../../assets/images/RoadMap/RoadmapRight/Two.png'
import Three from '../../assets/images/RoadMap/RoadmapRight/Three.png'
import Four from '../../assets/images/RoadMap/RoadmapRight/Four.png'
import Five from '../../assets/images/RoadMap/RoadmapRight/Five.png'
import { Text, Title, Content, RoadmapContent, RoadmapContainer, DirectionLine } from './RoadmapLeft'
import RightOne from '../../assets/images/RoadMap/RightOne.png'
import RightTwo from '../../assets/images/RoadMap/RightTwo.png'
import RightThree from '../../assets/images/RoadMap/RightThree.png'
import RightFour from '../../assets/images/RoadMap/RightFour.png'
import RightFive from '../../assets/images/RoadMap/RightFive.png'

const RoadmapRight = () => {
  return (
    <RoadmapContainer Differ>
        <RoadmapContent>
            <DirectionLine><Img src={RightOne} alt="line" /></DirectionLine>
            <Content Wrap>
            <Text>CEO working at FCI CACIB Dog Shows</Text>
            <Img src={One} alt="img" />
            </Content>
        </RoadmapContent>
        <RoadmapContent>
            <DirectionLine><Img src={RightTwo} alt="line" /></DirectionLine>
            <Content Wrap>
            <Text>
                <Title>2018</Title> 
                DogPage Facebook page for dog <br />
                breeders superseded by the <br />
                emergence of blockchain and tokens <br />
                on chain
            </Text>
            <Img src={Two} alt="img" />
            </Content>
        </RoadmapContent>
        <RoadmapContent>
            <DirectionLine><Img src={RightThree} alt="line" /></DirectionLine>
            <Content Wrap>
            <Text>
                <Title>2021</Title> 
                With almost all Exhibitions <br />
                canceled the team collected <br />
                funds during the meme and dog <br />
                token bull run , learning by <br />
                mistakes and commitment for <br />
                another year the ins outs <br />
                intricacies benefits and pit falls <br />
                of the crypto space
            </Text>
            <Img src={Three} alt="img" />
            </Content>
        </RoadmapContent>
        <RoadmapContent>
            <DirectionLine><Img src={RightFour} alt="line" /></DirectionLine>
            <Content Wrap>
            <Text>
                <Title>2023</Title> 
                Leverage dog breeders to <br />
                manage the dog care part of <br />
                the industry on chain saving the <br />
                breeder and pet dog owner <br />
                money using an ecosystem <br />
                interface which manages dog <br />
                life data and uses AI and human <br />
                ( real dog breeder ) knowledge <br />
                , to serve the best value products <br />
                for a pet dog owner's dog.
            </Text>
            <Img src={Four} alt="img" />
            </Content>
        </RoadmapContent>
        <RoadmapContent>
            <DirectionLine><Img src={RightFive} alt="line" /></DirectionLine>
            <Content Wrap>
            <Text>
                <Title>2025</Title>
                Full launch and integration of a<br /> 
                unique groundbreaking <br />
                revolutionaryn type of dog <br />
                identifier
            </Text>
            <Img src={Five} alt="img" />
            </Content>
        </RoadmapContent>
    </RoadmapContainer>
  )
}



export default RoadmapRight