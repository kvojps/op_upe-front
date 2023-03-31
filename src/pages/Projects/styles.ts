import styled from "styled-components";

export const ProjectsContainer = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
`

export const ProjectsContent = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 20rem 1fr;
`

export const ProjectsAside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    form {
        display: flex;
        gap: 1rem;
    }

    form input {
        width: 13rem;
        height: 3rem;
        padding: 1rem;
        border: 1px solid ${props => props.theme.blue};
        border-radius: 8px;
    }

    form button {
        width: 100%;
        border-radius: 8px;
        cursor: pointer;
        height: 3rem;
        background-color: ${props => props.theme.blue};
        color: ${props => props.theme.white};
    }

    span {
        color: ${props => props.theme["red-200"]};
        font-weight: bold;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    ul li {
        text-align: justify;
    }
`

export const ProjectsMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
 
    .projects-list {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`
