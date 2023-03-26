import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 1rem;
    
    > h1 {
        color: black;
        font-size: 3rem !important;
        width: 55vw;
    }
`

export const Box = styled.div`
    display: flex;
    width: 70vw;
    justify-content: space-evenly !important;
`

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25vw;
    height: 25vh;
    background-color: ${(props) => props.theme['gray-50']};
    padding: 1rem;
    border-radius: 20px;
    gap: 1rem !important;
    > h1 {
        color: black;
        font-size: 1.5rem !important;
    }
    > p {
        color: black;
        font-size: 0.8rem !important;
        font-weight: 400 !important;
        text-justify: initial;

    }
    &:hover {
        transition: 0.4s;
        transform: scale(1.05);
        filter: brightness(1.02);
    }

    .check-icon {
        border-radius: 100%;
    }
`