import React from 'react';
import {
    ContainerCountry,
    ContainerSelect,
    ContainerElements,
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
import Footer from '../../components/Footer';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { setApiKey, setCountry, setLeague, setTeam, setSeason } from '../../redux/slice';
import { useEffect, useState } from 'react';

export default function Country() {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [country, setCountry]= useState(null);

    return (
        <ContainerCountry>
            <Header />
            <ContainerElements>
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
            </ContainerElements>
            <Footer />
        </ContainerCountry>
    )
}