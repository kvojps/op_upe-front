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

    @media screen and (max-width: 949px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        aside:first-child {
            display: none;
        }
    }
`

export const ProjectsAside = styled.aside`
    border: 1px solid ${props => props.theme["gray-300"]};
    border-radius: 8px;
    padding: 1rem;
    grid-row: 1;
    grid-column: 1;
    height: auto;
    align-self: start;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
        display: none;
    }

    header svg:hover {
        cursor: pointer;
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

    ul li a {
        color: black;
    }

    @media screen and (max-width: 949px) {
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`

export const ProjectsMain = styled.main`
    *[aria-disabled="true"] {
        filter: blur(3px);
        cursor: not-allowed;
    }

    grid-column: 2;
    align-self: stretch;
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

    .title-filter-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        .open-filter-box-button {
            display: none;
            
            @media screen and (max-width: 949px) {
                display: block;
            }
        }
    }

    .title-filter-form div {
        display: flex;
        gap: 0.5rem;
    }

    .title-filter-form div input {
        width: 100%;
        height: 3rem;
        padding: 1rem;
        border: 1px solid ${props => props.theme.blue};
        border-radius: 8px;

        &:disabled {
            cursor: not-allowed;
        }
    }

    .title-filter-form div button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 3rem;
        border-radius: 8px;
        cursor: pointer;
        height: 3rem;
        background-color: ${props => props.theme.blue};
        color: ${props => props.theme.white};

        &:disabled {
            background-color: ${props => props.theme["gray-300"]};
            cursor: not-allowed;
        }
    }

    .title-filter-form button {
        width: 10rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem;
        border-radius: 8px;
        background-color: ${props => props.theme["gray-100"]};

        &:hover {
            cursor: pointer;
        }

        &:disabled {
            background-color: ${props => props.theme["gray-300"]};
            cursor: not-allowed;
        }
    }
    
    /* .projects-list[aria-disabled="true"] {
        filter: blur(3px);
    } */
`

export const ProjectsFilterBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    *:disabled {
        cursor: not-allowed;
    }

    select {
        padding: 0 0.5rem;
        font-size: 16px;
        border-radius: 8px;
        width: 100%;
        height: 2rem;
    }
`

export const ProjectsFilterDateForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem 0;
    border-radius: 4px;
    border-top: 1px solid ${props => props.theme["gray-600"]};
    border-bottom: 1px solid ${props => props.theme["gray-600"]};

    .filter-date-button {
        width: 100%;
        height: 2rem;
        background-color: ${props => props.theme.blue};
        color: ${props => props.theme.white};
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.2rem;

        &:disabled {
            background-color: ${props => props.theme["gray-300"]};
            cursor: not-allowed;
        }
    }
`

export const ProjectsFilterTags = styled.ul`
    &[aria-disabled="true"] {
        * {
            cursor: not-allowed;
        }
    }

    width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;

    li {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        color: black;
        background-color: ${props => props.theme["gray-100"]};
        border-radius: 8px;
        padding: 0.4rem;
        cursor: pointer;
    }
`
