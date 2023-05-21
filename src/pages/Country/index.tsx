import React from 'react';
import {
    ContainerCountry,
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

export default function Country() {

    return (
        <ContainerCountry>
            <Header />
            <ContainerSelect>
                <TextArea>
                    <Title>Selecione o país</Title>
                    <Description>
                        Explore o emocionante mundo do futebol
                        com nosso aplicativo exclusivo! Selecione o país desejado
                        e mergulhe na paixão do futebol.
                    </Description>
                </TextArea>
                <ItemSelect>
                    <Select>
                        <Option>--Selecione o país</Option>
                        <Option>--Selecione o país</Option>
                    </Select>
                    <Button>
                        <HyperLink to="/League">Seguinte </HyperLink>
                        <AiOutlineArrowRight />
                    </Button>
                </ItemSelect>
            </ContainerSelect>
        </ContainerCountry>
    )
}