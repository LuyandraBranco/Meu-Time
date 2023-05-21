import React from 'react';
import Header from '../../components/Header';
import {
    Container,
    ContainerText,
    NameResult,
    NumberResult
}
    from './styles';


export default function ItemResult({nameResult,numberResult}) {
    {
        let nameResult: String;
        let numberResult: Number;
    }

    return (
        <Container>
            <ContainerText>
                <NameResult>{nameResult}</NameResult>
                <NumberResult>{numberResult}</NumberResult>
            </ContainerText>
        </Container>
    )
}