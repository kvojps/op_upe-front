import styled from "styled-components";

export const ProjectContainer = styled.div``

export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid black;
    border-radius: 8px;
`

export const ProjectHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
        text-align: justify;
        color: ${props => props.theme.black};
    }

    span {
        color: ${props => props.theme["red-200"]};
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
    }

    div p:not(:first-child)::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.theme['gray-300']};
        margin-right: 10px;
        margin-left: 10px;
        position: relative;
        bottom: 10%;
    }
`

export const ProjectMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    img {
        display: none;
    }

    p {
        text-align: justify;
    }
`

export const ProjectFooter = styled.footer`
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        gap: 1rem;
        width: 12rem;
        border-radius: 8px;

        background-color: ${props => props.theme["gray-300"]};

        cursor: pointer;
    }
`
