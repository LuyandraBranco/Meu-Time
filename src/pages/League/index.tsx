import React from 'react';
import {
    ContainerLeague,
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
import Header from '../../components/Header';
import {
    AiOutlineArrowRight,
    AiOutlineArrowLeft
} from 'react-icons/ai';

export default function League() {

    return (
        <ContainerLeague>
            <Header />
            <ContainerSelect>
                <TextArea>
                    <Title>Selecione a liga</Title>
                    <Description>
                        Nossa plataforma oferece cobertura completa da Liga
                        [Nome da Liga], permitindo que os fãs acompanhem
                        de perto cada rodada, resultados,
                        classificação, estatísticas
                        e informações detalhadas sobre os times e jogadores.
                    </Description>
                </TextArea>
                <ItemSelect>
                    <Select>
                        <Option>--Selecione a liga</Option>
                        <Option>--Selecione a liga</Option>
                    </Select>
                    <Button>
                        <HyperLink to="/Team">Seguinte </HyperLink>
                        <AiOutlineArrowRight />
                    </Button>
                </ItemSelect>
                <Back>
                    <HyperLink1 to="/Country"><AiOutlineArrowLeft /> Voltar </HyperLink1>
                </Back>

            </ContainerSelect>
        </ContainerLeague>
    )
}