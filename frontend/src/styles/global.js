import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: 0;
        list-style: none;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        background-color: #555452;
    }

`