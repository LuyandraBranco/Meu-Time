import React from 'react';
import {
    ContainerDetails,
    ContainerPlayers,
    TitlePlayers

    
}
    from './styles';
import Header from '../../components/Header';

export default function Details(){

    return(
        <ContainerDetails>
             <Header/>
             <ContainerPlayers>
                <TitlePlayers>Lista de Jogadores</TitlePlayers>
             </ContainerPlayers>
        </ContainerDetails>
    )
}