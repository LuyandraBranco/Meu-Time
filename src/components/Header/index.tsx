import React from 'react';
import {
    ContainerHeader,
    ItemLogo,
    Logo,
    Logout
}
    from './styles';

import { IoIosFootball } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
export default function Header() {

    return (
        <ContainerHeader>
            <ItemLogo>
                <IoIosFootball />
                <Logo>MeuTime</Logo>
            </ItemLogo>
            <Logout>
               <CiLogout/>
            </Logout>
        </ContainerHeader>
    )
}