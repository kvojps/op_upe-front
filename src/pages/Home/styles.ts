import styled from "styled-components";

export const HomeContainer = styled.div`
    position: relative;
    
    img {
        position: absolute;
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 13.75rem;
`

export const HomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background-color: ${props => props.theme["blue-500"]};
`

export const LogoCircle = styled.div`
    width: 16.25rem;
    height: 16.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(171.3deg, rgba(37, 52, 81, 0.85) 2.33%, rgba(71, 106, 173, 0.5525) 45.06%, rgba(54, 78, 124, 0.595) 67.95%, rgba(51, 73, 115, 0.68) 100%);

    border-radius: 50%;
`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const SummaryList = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    p {
        font-size: 1.875rem;
        text-align: center;
    }

    p:not(:first-child)::before {
        content: '•';
        font-size: 1.3em;
        height: 10px;
        width: 10px;
        margin-right: 0.5rem;
    }

    h1 {
        font-size: 2.5rem;
    }
`
