import styled from "styled-components";

export const HomeContainer = styled.div`
    position: relative;
    
    img {
        position: absolute;
    }

    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem;
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 6rem;
`

export const HomeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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

export const HeaderHomeSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const HeaderHomeSummaryList = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 1.875rem;
        text-align: center;
    }

    p:not(:first-child)::before {
        content: '•';
        font-size: 1.3em;
        height: 10px;
        width: 10px;
        margin-right: 1rem;
    }

    h1 {
        font-size: 2.5rem;
    }
`

export const Summary = styled.div`
    background-color: ${props => props.theme.white};

    box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px 0;
    
    height: 18.875rem;
    
    position: relative;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        position: absolute;
        bottom: -1.875rem;
        right: -1.3125rem;

        background-color: ${props => props.theme["blue-600"]};
        box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px 0;
        border: 1px solid ${props => props.theme.black};

        width: 10.875rem;
        height: 3.75rem;

        border-radius: 50px;
    }

    button p {
        color: ${props => props.theme.white};
        font-size: 1.25rem;
    }

    button:hover {
        cursor: pointer;
        background-color: ${props => props.theme["blue-300"]};
        border: 0;
        transition: background-color 0.6s;
    }
`

export const SummaryContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 8.125rem;

    height: 100%;
`

export const SummaryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${props => props.theme["blue-600"]};
    }
`

export const SummaryCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

export const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 44rem;
    margin: 0 auto;

    h1 {
        color: ${props => props.theme["blue-600"]};
        font-weight: bold;
        font-size: 2.5rem;
    }

    p {
        font-size: 1.875rem;
    }

    span {
        font-size: 1.25rem;
        text-align: center;
        
        margin-top: 0.5rem;
    }
`

export const CardBox = styled.div`
    display: flex;
    min-width: 22rem;
    flex-wrap: wrap;
    gap: 1rem;
`

export const CardContainer = styled.div`
    background-color: ${props => props.theme.white};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px 0;
    border-radius: 1.25rem;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

    padding: 2rem 4rem 2rem 4rem;

    span {
        text-align: center;

        font-size: 1.25rem;
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    p {
        font-size: 1.25rem;
        font-weight: 600;

        color: ${props => props.theme["blue-600"]};
    }
`
