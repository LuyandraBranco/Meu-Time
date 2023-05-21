import React from 'react';
import {
    ContainerDetails,
    ContainerElements,
    ContainerPlayers,
    HeaderPlayers,
    Title
}
    from './styles';
import Header from '../../components/Header';
import MenuDetails from '../../components/MenuDetails';

export default function Details() {

    return (
        <ContainerDetails>
            <Header/>
            <ContainerElements>
                <ContainerPlayers>
                    <HeaderPlayers>
                        <Title>Lista de Jogadores</Title>
                    </HeaderPlayers>
                </ContainerPlayers>

            </ContainerElements>
        </ContainerDetails>
    )
}