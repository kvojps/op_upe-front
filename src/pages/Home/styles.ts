import styled from "styled-components";

export const HomeContainer = styled.div`
    /* max-width: 1120px;
    margin: 0 auto; */
    margin-top: 4rem;
`

export const HomeContent = styled.div`
    width: 100vh;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
`

export const HomeMain = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-direction: column;

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;

        font-size: 2rem;
        font-weight: 400;

        li {
            &:not(:first-child)::before {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: ${(props) => props.theme['gray-300']};
                margin-right: 10px;
                position: relative;
                bottom: 10%;
            }
        }
    }

    h1 {
        font-size: 3rem;
    }

    em {
        font-size: 1.2rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem
    }

    div p {
        font-size: 1.5rem;
        font-weight: bold;
    }

    div button {
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        min-width: 8rem;
        min-height: 3.5rem;

        border-radius: 25px;
        border-color: transparent;
        background-color: ${props => props.theme["white"]};
        cursor: pointer;

        transition: 1s;
    }

    div button span {
        font-size: 1.2rem;
        color: ${props => props.theme["red-500"]};
    }

    div button svg {
        color: ${props => props.theme["red-500"]};
    }

    div button:hover {
        transition: 1s;
        background-color: ${props => props.theme["gray-50"]};
        transform: scale(1.1);
        filter: brightness(1.2);
    }

`
