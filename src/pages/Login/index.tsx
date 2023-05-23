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
import { useSelector, useDispatch } from 'react-redux'
import { setApiKey, setCountry, setLeague, setTeam, setSeason } from '../../redux/slice';

export default function Login() {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [key, setKey] = useState('');
    const [match, setMatch] = useState('');
    const [apiKey, setApiKey] = useState("");

    // useEffect(() => {
    //     const myHeaders: Headers = new Headers();
    //     myHeaders.append("x-rapidapi-key", "93ed10621cmshf220f4ab717894ap12cdd6jsn592ea1dbd87f");
    //     myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

    //     const requestOptions: RequestInit = {
    //       method: 'GET',
    //       headers: myHeaders,
    //       redirect: 'follow'
    //     };

    //     fetch("https://api-football-v1.p.rapidapi.com/GET/v3/leagues", requestOptions)
    //       .then(response => response.text())
    //       .then(result => console.log(result))
    //       .catch(error => console.log('error', error));
    //   }, []);

    useEffect(() => {

    })

    return (
        <ContainerLogin>
            <ContainerLogo>
                <ItemLogo>
                    <IoIosFootball />
                    <Logo>MeuTime</Logo>
                </ItemLogo>
                <Description>Desvende o mundo do futebol em um clique</Description>
            </ContainerLogo>
            <Form>
                <Title>SIGN IN</Title>
                <Input
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    type="text"
                    placeholder='Digite a sua key'
                    required />
                <HyperLink to="/Country"><Button>Entrar</Button></HyperLink>

                <Span>Não tem uma conta? <HyperLink1 href="https://dashboard.api-football.com/login">Registre-se</HyperLink1></Span>
            </Form>
        </ContainerLogin>
    )
}