import React from 'react';
import {
    ContainerTeam,
    ContainerElements,
    ContainerSelect,
    TextArea,
    Title,
    Description,
    HyperLink1,
    Back,
    Table
}
    from './styles';
import ItemTable from '../../components/ItemTable';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
    AiOutlineArrowLeft
} from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setTeam } from '../../redux/slice';

interface Team {
    id: number;
    name: string;
}

export default function Team() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const [teams, setTeams] = useState<Team []>([]);
    const fetchData = () => {
        fetch("https://v3.football.api-sports.io/teams?id=33",  {
            method: "GET",
            headers: {
                "x-rapidapi-key": user?.api_key,
                "x-rapidapi-host": "v3.footbal.api-sports.io",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setTeams(data.response);
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleTeamClick(teamId) {
        dispatch(setTeam(teamId));
    }

    return (
        <ContainerTeam>
            <Header />
            <ContainerElements>
                <ContainerSelect>
                    <TextArea>
                        <Title>Selecione o time</Title>
                        <Description>
                            Descubra a magia dos times de futebol!
                            De clubes lendários a novas promessas,
                            mergulhe na paixão e rivalidades de equipes icônicas.
                            Acompanhe jogos emocionantes,
                            conheça os jogadores e
                            torça pelo seu time favorito.
                        </Description>
                    </TextArea>
                    <Table>
                        {teams.map(team => (
                            <ItemTable
                                key={team.id}
                                pathImage={""}
                                functionn={() => handleTeamClick(team.id)}
                                nameTeam={team.name}
                            />
                        ))}
                    </Table>
                    <Back>
                        <HyperLink1 to="/Details"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                    </Back>
                </ContainerSelect>
            </ContainerElements>
            <Footer />
        </ContainerTeam>
    )
}