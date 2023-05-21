import React from 'react';
import {
    ContainerHeader,
    ItemLogo,
    Logo
}
    from './styles';

import { IoIosFootball } from 'react-icons/io';
export default function Header() {

    return (
        <ContainerHeader>
            <ItemLogo>
                    <IoIosFootball />
                    <Logo>MeuTime</Logo>
                </ItemLogo>
        </ContainerHeader>
    )
}