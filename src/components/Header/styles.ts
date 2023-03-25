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

        a {
            display: flex;
            text-decoration: none;
            color: ${(props) => props.theme['gray-300']};

            h1 {
                font-size: 1.8rem;
            }

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid ${props => props.theme["red-200"]};
            }

            &.active {
                color: ${props => props.theme["red-200"]};
                border-bottom: 3px solid ${props => props.theme["red-200"]};
            }
        }
    }

    button {
        width: 12rem;
        height: 3.75rem;
        border-radius: 8px;
        color: ${props => props.theme.blue};
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
    }
`
