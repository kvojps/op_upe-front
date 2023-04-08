import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem;
`

export const ProjectDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    border: 1px solid ${props => props.theme["gray-300"]};
    border-radius: 8px;
`

export const ProjectDetailHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ProjectDetailHeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        max-width: 8rem;
        height: 2.5rem;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        &:hover {
            cursor: pointer;
        }

        p {
            font-size: 18px;
        }
    }

    h1 {
        text-align: justify;
        color: black;
    }

    span {
        font-weight: bold;
        color: ${props => props.theme["red-200"]};
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

export const ProjectDetailHeaderSummary = styled.ul`
    list-style: none;
    
    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`

export const ProjectDetailMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
        width: 80%;
        margin: 0 auto;
    }
`

export const ProjectDetailDataList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        h2 {
            color: black;
        }

        p {
            text-align: justify;
        }
    }
`
