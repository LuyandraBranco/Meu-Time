import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerTeam = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const ContainerSelect = styled(ContainerTeam )`
    
    width: 70%;
    height: 82vh;
    margin: 0 auto;
    margin-top: 2%;
    border-radius: 0.2rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px var(--green-500);

`;

export const TextArea = styled(ContainerTeam )`
    
    width: 95%;
    height: 9rem;
    justify-content: center;
    align-items: center;
    margin-top: 3%;

`;

export const Title = styled.h1`

    color: var(--green-500);
    margin-bottom: 2rem;
    
`;

export const Description = styled.p`

    color: var(--gray-700);
    text-align: center;
    
`;

export const HyperLink1 = styled(Link)`

    text-decoration: none;    
    color:  var(--green-500);

    >svg{
        margin-left: 2rem;
        font-size: 0.9rem;
   }
    
`;

export const Back = styled.div`

   width: 100%;
   height: 3rem;
   margin-bottom: 2rem;
    
`;

export const Table = styled.div`

   width: 80%;
   height: 40rem;
   margin: 0 auto;
   margin: 2rem 0;
   overflow-y: scroll;
`;

