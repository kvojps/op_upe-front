import styled from "styled-components";

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 44rem;
    margin: 0 auto;
    margin-bottom: 12.5rem;

    h1 {
        color: ${props => props.theme["blue-600"]};
        font-weight: bold;
        font-size: 2.5rem;
    }

    p {
        font-size: 1.875rem;
        text-align: center;
    }

    span {
        font-size: 1.25rem;
        text-align: center;
        
        margin-top: 1rem;
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 1.8rem;
            white-space: nowrap;
        }

        p {
            font-size: 1.3rem;
        }

        span {
            font-size: 1rem;
        }   
    }
`
