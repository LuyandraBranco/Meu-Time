import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerDetails = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const ContainerElements = styled.section`
    
    width: 89%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    background: #ddd;
`;

export const TitlePlayers= styled.h1`

    color: var(--green-500);
    
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--white);
    
`;

export const ContainerPlayers = styled.aside`
    
    width: 30%;
    margin-right: 2%;
    background: red;
`;

export const HeaderPlayers = styled.div`
    
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    

`;

export const Title = styled.h3`
    
    color: var(--gray-700);
    margin-left: 2rem;
    

`;