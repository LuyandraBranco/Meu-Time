import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container= styled.div`
    
    width: 100%;
    height: 18rem;
    display: flex;
    border-bottom: 1px solid var(--green-500);
    margin-bottom: 0.8rem;
    cursor: pointer;

`;

export const ContainerText= styled.div`
    
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const ContainerImage= styled.div`
    
    width: 20%;
    height: 100%;
    background: #333;
    
`;

export const Image= styled.img`
    
    width: 100%;
    height: 100%;

`;

export const NamePlayer = styled.h3`

    margin-left: 0.5%;
    color: var(--gray-700);
    
`;

export const Age = styled.p`

    margin-left: 1%;
    color: var(--gray-700);
    
`;

export const Nacionality = styled(Age)`

    
`;




