import React from 'react';
import {
    Container,
    HyperLink
}
    from './styles';

import { IoIosFootball } from 'react-icons/io';
export default function Header() {

    return (
        <Container>
            <HyperLink>Jogadores</HyperLink>
            <HyperLink>Formação</HyperLink>
            <HyperLink>Resultados</HyperLink>
            <HyperLink>Gráficos</HyperLink>
        </Container>
    )
}