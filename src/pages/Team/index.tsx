import React from 'react';
import Header from '../../components/Header';
import {
    ContainerTeam,
    ContainerSelect,
    TextArea,
    Title,
    Description,
    HyperLink1,
    Back,
    Table

}
    from './styles';
import {
    AiOutlineArrowLeft
} from 'react-icons/ai';
import ItemTable from '../../components/ItemTable';

export default function Team() {

    return (
        <ContainerTeam>
            <Header />
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
                    <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"}/>
                    <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"}/>
                    <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"}/>
                    <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"}/>
                    <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"}/>
                    <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"}/>
                </Table>
              
                <Back>
                    <HyperLink1 to="/League"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                </Back>
            </ContainerSelect>
        </ContainerTeam>
    )
}