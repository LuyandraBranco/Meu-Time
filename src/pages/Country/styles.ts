import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerCountry = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const ContainerElements = styled(ContainerCountry)`
    
    height: 35rem;

    @media screen and (max-width: 680px) {
       height: 45rem;
    }
    
`;

export const ContainerSelect = styled(ContainerCountry)`
    
    width: 50%;
    height: 25rem;
    margin: 0 auto;
    margin-top: 4%;
    border-radius: 0.2rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px var(--green-500);

    @media screen and (max-width: 680px) {
        width: 95%;
        box-shadow: none;
    }

    @media (min-width: 681px) and (max-width: 992px) {      
        width: 80%;
    }

    
`;

export const TextArea = styled(ContainerCountry)`
    
    width: 95%;
    height: 9rem;
    justify-content: center;
    align-items: center;

`;

export const Title = styled.h1`

    color: var(--green-500);
    margin-bottom: 2rem;
    
`;

export const Description = styled.p`

    color: var(--gray-700);
    text-align: center;
    
`;

export const ItemSelect = styled(ContainerCountry)`
    
    width: 95%;
    height: 9rem;
    margin-top: 2%;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 680px) {
       flex-direction: column;
    }

`;

export const Select = styled.select`

    width: 48%;
    padding: 1rem;
    color: var(--gray-700);
    margin-right: 0.5rem;

    @media screen and (max-width: 680px) {
        width: 90%;
        margin-bottom: 1rem;
    }
    
`;
export const Option = styled.option`

`;

export const Button = styled.button`

    width: 48%;
    padding: 0.97rem;
    font-size: 1.1rem;
    color: var(--white);
    background: var(--green-500);
    border: none;
    cursor: pointer;

    @media screen and (max-width: 680px) {
        width: 90%;
    }
   
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--white);

`;

export const Image = styled.img`

    width: 3rem;
    height: 3rem;

`;

