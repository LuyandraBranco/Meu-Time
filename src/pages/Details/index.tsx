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
    ContainerResults,
    Results
}
    from './styles';
import Header from '../../components/Header';
import ItemPlayer from '../../components/ItemPlayer';
import ItemResult from '../../components/ItemResult';

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
                        <ItemResult nameResult={"Total de jogos"} numberResult={30}/>
                        <ItemResult nameResult={"Total de vitórias"} numberResult={28}/>
                        <ItemResult nameResult={"Total de derrotas"} numberResult={4}/>
                        <ItemResult nameResult={"Total de empates"} numberResult={4}/>
                    </Results>
                </ContainerResults>

            </ContainerElements>
        </ContainerDetails>
    )
}