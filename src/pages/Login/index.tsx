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
                <Description>Na nossa plataforma você acompanhará todas informações sobre o mundo de futebol</Description>
            </ContainerLogo>
            <Form>
                <Title>SIGN IN</Title>
                <Input type="number" placeholder='Digite a sua key' />
                <Button>Entrar</Button>
                <Span>Não tem uma conta? <HyperLink to="/League">Registre-se</HyperLink></Span>
            </Form>
        </ContainerLogin>
    )
}