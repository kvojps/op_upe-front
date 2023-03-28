import styled from "styled-components";

export const SignInContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem;
`

export const SignInContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignInMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    /* border: 3px solid ${props => props.theme['gray-300']}; */
    border-radius: 8px;
    background-color: ${props => props.theme['gray-100']};
    box-shadow: 2px 2px 4px 4px ${props => props.theme['gray-300']};
`

export const SignInMainHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        color: ${props => props.theme.black};
    }

    span {
        color: ${props => props.theme["red-logo"]};
    }
`

export const SignInMainForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    input {
        min-width: 18.75rem;
        height: 2.8125rem;
        padding-right: 1.5rem;
        border-top: 1px solid transparent;
        border-bottom: 1px solid ${props => props.theme.blue};
        background-color: transparent;

        &:focus {
            border-bottom: 2px solid ${props => props.theme.blue};
        }
    }

    a p {
        font-size: 14px;
    }

    button {
        color: ${props => props.theme.white};
        font-weight: bold;
        height: 2.8125rem;
        width: 100%;
        border-radius: 10px;
        background-color: ${props => props.theme["red-500"]};
        cursor: pointer;

        &:hover {
            background-color: ${props => props.theme["red-200"]};
            transition: 0.7s background-color;
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    div {
        position: relative;
        /* background-color: black; */
    }

    div svg {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
`
