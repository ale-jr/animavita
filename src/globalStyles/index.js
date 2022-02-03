import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0%;
    }

    body{
        font-family: ${({ theme }) => theme.typography.families.body};
        background-color: ${({ theme }) => theme.colors.neutral.lightest};
    }

`;
