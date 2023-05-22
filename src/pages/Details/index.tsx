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
    Results,
    Container,
    ContainerItem,
    Grafic
}
    from './styles';
import Header from '../../components/Header';
import ItemPlayer from '../../components/ItemPlayer';
import ItemResult from '../../components/ItemResult';
import ItemGrafic from '../../components/ItemGrafic';
import Footer from '../../components/Footer';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { setApiKey, setCountry, setLeague, setTeam, setSeason } from '../../redux/slice';

export default function Details() {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    
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
                <Container>
                    <ContainerItem>
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
                                <ItemResult nameResult={"Jogos"} numberResult={30} />
                                <ItemResult nameResult={"Vitórias"} numberResult={28} />
                                <ItemResult nameResult={"Derrotas"} numberResult={4} />
                                <ItemResult nameResult={"Empates"} numberResult={4} />
                            </Results>
                        </ContainerResults>
                    </ContainerItem>

                    <Grafic>
                        <HeaderPlayers>
                            <Title>Gráfico de quantidade de gols marcados por tempo de jogo  </Title>
                        </HeaderPlayers>
                        <ItemGrafic namePlayer={"Lionel Messi"} age={35} nacionality={"Argentino"} pathImage={"error"}/>
                    </Grafic>
                </Container>
            </ContainerElements>
            <Footer/>
        </ContainerDetails>
    )
}