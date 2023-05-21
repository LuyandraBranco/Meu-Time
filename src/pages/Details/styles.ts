import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerDetails = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const ContainerPlayers = styled.div`
    
    width: 75%;
    height: 35rem;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const TitlePlayers= styled.h1`

    color: var(--green-500);
    
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--white);
    
`;
