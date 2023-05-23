import React from 'react';
import {
    ContainerLeague,
    ContainerElements,
    ContainerSelect,
    TextArea,
    Title,
    Description,
    ItemSelect,
    Select,
    Option,
    Button,
    HyperLink,
    HyperLink1,
    Back

}
    from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
    AiOutlineArrowRight,
    AiOutlineArrowLeft
} from 'react-icons/ai';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setApiKey, setCountry, setLeague, setTeam, setSeason } from '../../redux/slice';
import { useEffect, useState } from 'react';

export default function League() {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        axios.get("https://v3.football.api-sports.io/leagues", {
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": user?.api_key,
            }
        })
            .then(response => {
                const filteredLeagues = response.data.response.filter(league => league.country.id === user?.country);
                setLeagues(filteredLeagues);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function handleLeagueClick(leagueId) {
        dispatch(setLeague(leagueId));
    }

    return (
        <ContainerLeague>
            <Header />
            <ContainerElements>
                <ContainerSelect>
                    <TextArea>
                        <Title>Selecione a liga</Title>
                        <Description>
                            Nossa plataforma oferece cobertura completa da Liga
                            [Nome da Liga], permitindo que os fãs acompanhem
                            de perto cada rodada, resultados,
                            classificação, estatísticas
                            e informações detalhadas sobre os times e jogadores.
                        </Description>
                    </TextArea>
                    <ItemSelect>
                        <Select>
                            <Option>--Selecione a liga</Option>
                            {leagues.map(league => (
                                <Option key={league.id} onClick={() => handleLeagueClick(league.id)}>{league.name}</Option>
                            ))}
                        </Select>
                        <Button>
                            <HyperLink to="/Team">Seguinte </HyperLink>
                            <AiOutlineArrowRight />
                        </Button>
                    </ItemSelect>
                    <Back>
                        <HyperLink1 to="/Country"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                    </Back>
                </ContainerSelect>
            </ContainerElements>
            <Footer />
        </ContainerLeague>
    )
}