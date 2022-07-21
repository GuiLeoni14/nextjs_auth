import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    section{
        width: 100%;
    }
    button {
        cursor: pointer;
    }
`;
