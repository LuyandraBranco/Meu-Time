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

export default function Login() {

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
                <Input type="text" placeholder='Digite a sua key' required/>
                <Button><HyperLink to="/Country">Entrar</HyperLink></Button>
                <Span>Não tem uma conta? <HyperLink1 href="https://dashboard.api-football.com/register">Registre-se</HyperLink1></Span>
            </Form>
        </ContainerLogin>
    )
}