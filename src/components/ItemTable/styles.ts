import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    
    width: 100%;
    height: 6rem;
    display: flex;
    border-top: 1px solid var(--gray-150);
    border: 1px solid var(--gray-150);
    margin-bottom: 0.8rem;
    cursor: pointer;

`;

export const ContainerText = styled.div`
    
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;

`;

export const ContainerImage = styled.div`
    
    width: 20%;
    height: 100%;
    background: #ddd;
    
`;

export const Image = styled.img`
    
    width: 100%;
    height: 100%;

`;

export const NameTeam = styled.h3`

    margin-left: 1%;
    color: var(--gray-700);
    
`;



