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


export default function ItemTable({nameTeam,pathImage}) {
    {
        let nameTeam: String;
        let pathImage: String;
    }

    return (
        <Container>
            <ContainerImage>
                {/* <Image src={pathImage} alt='Image Team'/> */}
            </ContainerImage>
            <ContainerText>
                <NameTeam>{nameTeam}</NameTeam>
            </ContainerText>
        </Container>
    )
}