import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ContainerFooter = styled.div`
    
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gray-700);

`;


export const Span = styled.span`

    color: var(--white);
    margin-bottom: 3rem;
    margin-top: 3%;

`;

export const HyperLink = styled.a`

    text-decoration: none;
    color: var(--green-500);

`;