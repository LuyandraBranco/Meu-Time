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
        margin: -1% 0 0 8rem;

        @media screen and (max-width: 680px) {
            width: 95%;
            margin: 0 0 0 3rem;
        }
    
        @media (min-width: 681px) and (max-width: 992px) {      
            margin: 0 0 0 6rem;
        }
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

