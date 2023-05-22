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


export default function Team() {

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
                        <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"} />
                        <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"} />
                        <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"} />
                        <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"} />
                        <ItemTable nameTeam={"Barcelona"} pathImage={"luyandra"} />
                        <ItemTable nameTeam={"Real Madrid"} pathImage={"luyandra"} />
                    </Table>
                    <Back>
                        <HyperLink1 to="/Details"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                    </Back>
                </ContainerSelect>
            </ContainerElements>
            <Footer/>
        </ContainerTeam>
    )
}