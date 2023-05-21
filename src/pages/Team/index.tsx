import React from 'react';
import Header from '../../components/Header';
import {
    ContainerTeam,
    ContainerSelect,
    TextArea,
    Title,
    Description,
    ItemSelect,
    Select,
    Option,
    Button,
    HyperLink,
    HyperLink1,
    Back

}
    from './styles';
import {
    AiOutlineArrowRight,
    AiOutlineArrowLeft
} from 'react-icons/ai';

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
                <ItemSelect>
                    <Select>
                        <Option>--Selecione a liga</Option>
                        <Option>--Selecione a liga</Option>
                    </Select>
                    <Button>
                        <HyperLink to="/Country">Seguinte </HyperLink>
                        <AiOutlineArrowRight />
                    </Button>
                </ItemSelect>
                <Back>
                    <HyperLink1 to="/League"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                </Back>
            </ContainerSelect>
        </ContainerTeam>
    )
}