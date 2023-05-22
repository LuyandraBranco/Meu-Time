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
                <Description>Desvende o mundo do futebol em um clique</Description>
            </ContainerLogo>
            <Form>
                <Title>SIGN IN</Title>
                <Input type="number" placeholder='Digite a sua key' />
                <Button>Entrar</Button>
                <Span>Não tem uma conta? <HyperLink to="/Country">Registre-se</HyperLink></Span>
            </Form>
        </ContainerLogin>
    )
}