import React from 'react';
import {
    ContainerDetails,
    ContainerElements,
    ContainerPlayers,
    HeaderPlayers,
    Title,
    Players
}
    from './styles';
import Header from '../../components/Header';
import ItemPlayer from '../../components/ItemPlayer';

export default function Details() {

    return (
        <ContainerDetails>
            <Header/>
            <ContainerElements>
                <ContainerPlayers>
                    <HeaderPlayers>
                        <Title>Lista de Jogadores</Title>
                    </HeaderPlayers>
                    <Players>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                    </Players>
                </ContainerPlayers>
            </ContainerElements>
        </ContainerDetails>
    )
}