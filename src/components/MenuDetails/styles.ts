import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.nav`
    
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--green-100);
    
`;

export const HyperLink = styled(Link)`

    text-decoration: none;    
    color:  var(--green-500);
    margin-right: 0.5rem;

    >svg{
        margin-left: 2rem;
        font-size: 0.9rem;
   }
    
`;