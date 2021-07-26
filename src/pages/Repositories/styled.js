import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-seize: 2rem;
    font-family: sans-serif;
    color: #333;
` 

export const List = styled.ul`
    list-styled: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    color: white;
    margin: .5rem 0; 
    margin: .5rem ; 
    padding: 1px;
    background-color: #333;
`

export const LinkHome = styled(Link)`
    width: 4rem;
    display: block;
    text-align: center;
    text-decoration: none; 
    margin: 2rem auto;
    background-color: #333;
    padding: .5rem 0;
    color: white;
    border-radius: 0.5rem;
`