import React from 'react';
import Header from '../../components/Header';
import {
    Container,
    ContainerImage,
    ContainerText,
    Image,
    NameTeam
}
    from './styles';


export default function ItemTable({nameTeam,pathImage, functionn}) {
    {
        let nameTeam: string;
        let pathImage: string;
        let functionn: any;
    }

    return (
        <Container onClick={functionn}>
            <ContainerImage>
                {/* <Image src={pathImage} alt='Image Team'/> */}
            </ContainerImage>
            <ContainerText>
                <NameTeam>{nameTeam}</NameTeam>
            </ContainerText>
        </Container>
    )
}