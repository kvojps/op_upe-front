import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {

        color: ${(props) => props.theme['gray-500']};
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }
`
