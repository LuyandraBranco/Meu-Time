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
    HyperLink

}
    from './styles';
import Header from '../../components/Header';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function League() {

    return (
        <ContainerLeague>
            <Header />
            <ContainerSelect>
                <TextArea>
                    <Title>Selecione a liga</Title>
                    <Description>
                        Explore o emocionante mundo do futebol
                        com nosso aplicativo exclusivo! Selecione o país desejado
                        e mergulhe na paixão do futebol.
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
            </ContainerSelect>
        </ContainerLeague>
    )
}