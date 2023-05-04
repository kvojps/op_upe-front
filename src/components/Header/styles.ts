import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.blue};
    margin-bottom: 1rem;
`

export const HeaderContent = styled.div``

export const HeaderMain = styled.main`
    padding-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.8rem;

        div {
            display: none;
        }

        a {
            text-decoration: none;
            color: ${(props) => props.theme['white']};
            transition: 0.5s;

            h1 {
                font-size: 1.2rem;
                font-weight: 400;
            }

            &:hover {
                color: ${props => props.theme["red-200"]};
            }

            &.active {
                transform: scale(1.1);
                color: ${props => props.theme["red-200"]};
            }
        }
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border-color: transparent;
        background-color: ${props => props.theme["red-700"]};
        color: ${props => props.theme["white"]};
        font-weight: 500;
        font-size: 1.1rem;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
            transition: 1.2s;
            filter: brightness(1.3);
            /* background-color: ${props => props.theme["gray-50"]}; */
        }
    }

    @media screen and (max-width: 790px) {
        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.7rem;
        }

        nav div {
            display: block;
        }

        nav a {
            display: none;

            &.active {
                color: ${(props) => props.theme['white']};
                display: block;
            }
        }
    }
`
