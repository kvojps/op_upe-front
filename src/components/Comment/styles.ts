import styled from "styled-components";

export const CommentContainer = styled.div``

export const CommentContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.3rem;

    img {
        border-radius: 50%;
        width: 2rem;
        border: 1px solid ${props => props.theme.blue};
    }
`

export const CommentMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const CommentHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    strong {
        text-align: justify;
        color: ${props => props.theme.black}
    }

    strong span {
        color: ${props => props.theme['gray-500']}
    }
    
    p {
        font-size: 10px;
        font-weight: bold;
        color: ${props => props.theme['gray-500']};
    }

    div {
        display: flex;
        flex-wrap: wrap;
    }
`
