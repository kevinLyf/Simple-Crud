import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: #555452;
    }
`;