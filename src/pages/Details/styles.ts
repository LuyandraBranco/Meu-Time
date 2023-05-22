import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerDetails = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const Container = styled.div`
    
    width: 65%;
    display: flex;
    flex-direction: column;

`;

export const ContainerItem = styled.div`
    
    width: 100%;
    height: 12rem;
    display: flex;
`;

export const ContainerElements = styled.section`
    
    width: 89%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 3%;
    display: flex;
    margin-bottom: 4%;

`;

export const TitlePlayers = styled.h1`

    color: var(--green-500);
    
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--white);
    
`;

export const ContainerPlayers = styled.aside`
    
    width: 35%;
    margin-right: 2%;
    heigth: 50rem;
    border: 1px solid var(--gray-150);

`;

export const ContainerResults = styled(ContainerPlayers)`

    width: 50%;
    
`;



export const ContainerTraining = styled.aside`
    
    width: 40%;
    height: 12rem;
    margin-right: 4%;
    border: 1px solid var(--gray-150);

`;



export const HeaderPlayers = styled.div`
    
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid var(--gray-700);
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    

`;

export const Players = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const Title = styled.h3`
    
    color: var(--gray-700);
    margin-left: 2rem;
    

`;

export const Training = styled.div`
    
    width: 100%;
    height: 5rem;
    background: var(--green-500);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const Results = styled.div`
    
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const Grafic = styled.div`
    
    width: 100%;
    height: 30rem;
    margin-top: 2%;
    border: 1px solid var(--gray-150);
    
`;
