import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ContainerLogin = styled.div`
    
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const ContainerLogo = styled.div`

    width: 30%;
    height: 20rem;
    display: flex;
    margin-right: 6rem;
    flex-direction:column;
    margin-top: 5%;
    
    
`;

export const ItemLogo = styled.div`
    
    display: flex;

    >svg{
        color: var( --green-500);
        font-size: 4rem;
        margin-right: 1rem;
        margin-top: -0.5rem;
    }
`;


export const Form = styled.form`

    width: 27%;
    heigth: 50rem;
    display: flex;
    flex-direction:column;
    background: var(--gray-700);
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    
`;

export const Logo = styled.h1`

    margin-bottom: 13%;
    color: var(--gray-700);
    
`;

export const Description = styled.h2`

   color: var(--green-500);
   font-weight: var(--font-weight-700);
   
`;

export const Input = styled.input`

    width: 80%;
    padding: 1rem;
    font-size: 1.1rem;
    margin: 3rem 0;
    
`;

export const Button = styled.button`

    width: 80%;
    padding: 1rem;
    font-size: 1.1rem;
    color: var(--white);
    background: var(--green-500);
    border: none;
    border-radius: 0.2rem;
    margin-bottom: 3rem;
    cursor: pointer
    
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--green-500);
    font-weight: var(--font-weight-500);

`;
export const Title = styled.h1`

    margin-top: 2rem;
    color:  var(--green-500);

`;

export const Span = styled.span`

    color: #fff;
    margin-bottom: 3rem;

`;