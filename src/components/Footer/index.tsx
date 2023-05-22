import React from 'react';
import {
    ContainerFooter,
    Span,
    HyperLink
}
    from './styles';

export default function Footer() {

    return (
        <ContainerFooter>
            <Span>Desenvolvido por <HyperLink href='https://luyfolio.vercel.app/'>Luyandra Branco</HyperLink></Span>
        </ContainerFooter>
    )
}