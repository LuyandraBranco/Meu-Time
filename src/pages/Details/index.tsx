import React from 'react';
import {
    ContainerDetails,
    ContainerElements,
    ContainerPlayers,
    HeaderPlayers,
    Title,
    Players,
    ContainerTraining,
    Training,
    ContainerResults
}
    from './styles';
import Header from '../../components/Header';
import ItemPlayer from '../../components/ItemPlayer';

export default function Details() {

    return (
        <ContainerDetails>
            <Header />
            <ContainerElements>
                <ContainerPlayers>
                    <HeaderPlayers>
                        <Title>Lista de Jogadores</Title>
                    </HeaderPlayers>
                    <Players>
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"} />
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"} />
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"} />
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"} />
                        <ItemPlayer namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"} />
                    </Players>
                </ContainerPlayers>

                <ContainerTraining>
                    <HeaderPlayers>
                        <Title>Formação mais utilizada</Title>
                    </HeaderPlayers>
                    <Training>
                        <Title>4-4-3</Title>
                    </Training>
                </ContainerTraining>

                <ContainerResults>
                    <HeaderPlayers>
                        <Title>Resultados</Title>
                    </HeaderPlayers>
                    <Results>
                        
                    </Results>
                </ContainerResults>

            </ContainerElements>
        </ContainerDetails>
    )
}