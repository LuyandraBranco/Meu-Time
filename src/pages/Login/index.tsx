import React from 'react';
import {
    ContainerLogin,
    ContainerLogo,
    Form,
    Logo,
    Description,
    Input,
    Button,
    HyperLink,
    HyperLink1,
    Span,
    Title,
    ItemLogo
}
    from './styles';

import { IoIosFootball } from 'react-icons/io';
import { useEffect, useState } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setApiKey, setCountry, setLeague, setTeam, setSeason } from '../../redux/slice';

export default function Login() {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [key, setKey] = useState('');
    const [match, setMatch] = useState('');
    const [apiKey, setApiKey1] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();

    const fetchData = () => {
        fetch("https://v3.football.api-sports.io/fixtures?live=all", {
            method: "GET",
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "v3.footbal.api-sports.io",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setMatch(data.response);
                if(data.response.length == 0){
                    alert("Chave da Api Key inválida");
                }
                else{
                    history.push("/Country")
                }
            })
            .catch((error) => alert("Chave da Api Key inválida"));
    };

    useEffect(() => {
        
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData(); // Executa a função fetchData novamente ao clicar no botão do formulário
    };

    // if (loggedIn) {
    //     return <Redirect to="/Country"/>;
    // }

    return (
        <ContainerLogin>
            <ContainerLogo>
                <ItemLogo>
                    <IoIosFootball />
                    <Logo>MeuTime</Logo>
                </ItemLogo>
                <Description>Desvende o mundo do futebol em um clique</Description>
            </ContainerLogo>
            <Form onSubmit={handleFormSubmit}>
                <Title>SIGN IN</Title>
                <Input
                    value={apiKey}
                    onChange={(e) => setApiKey1(e.target.value)}
                    type="text"
                    placeholder='Digite a sua key'
                    required />
                <Button type="submit">Entrar</Button>

                <Span>Não tem uma conta? <HyperLink1 href="https://dashboard.api-football.com/login">Registre-se</HyperLink1></Span>
            </Form>
        </ContainerLogin>
    )
}