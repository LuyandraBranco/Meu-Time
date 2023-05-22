import styled from "styled-components";
import Link from 'react-router-dom';

export const ContainerHeader = styled.div`
    
    width: 100%;
    height: 4rem;
    display: flex;
    background: var(--green-500);
    align-items: center;
    
`;

export const ItemLogo = styled.div`
    
    display: flex;

    >svg{
        color: var( --white);
        font-size: 3rem;
        margin: 0 0 0 8rem;
    }

`;
export const Logo = styled.h1`

    color: var(--white);
    
`;

export const Logout = styled.div`


    width: 10%;
    height: 4rem;
    display: flex;
    margin-left: auto;
    align-items: center;

    >svg{
        color: var( --white);
        font-size: 2rem;
    }

`;

