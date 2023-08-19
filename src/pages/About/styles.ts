import styled from "styled-components";
import vectorLeft from "../../assets/vector-left.png"

export const AboutContainer = styled.div`
    position: relative;
    
    img {
        position: absolute;
    }

    padding: 1rem;

    margin-top: -0.4rem;
    margin-left: -0.4rem;

    background-image: url(${vectorLeft});
    background-repeat: no-repeat;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6875rem;

    right: 15rem;

    background-color: ${props => props.theme["blue-700"]};

    margin-bottom: 34rem;

    h1 {
        font-size: 3.75rem;
        font-weight: 700;
        color: ${props => props.theme.white};
    }

    span {
        font-size: 1.25rem;
        color: ${props => props.theme.white};
    }
`

export const AboutMainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 12.5rem;
`

export const AboutMainBoxHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
        color: ${props => props.theme["blue-500"]};
        font-size: 2.5rem;
    }
`

export const CircleIconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.8125rem;
    height: 4.8125rem;
    border-radius: 50%;

    background-color: ${props => props.theme["blue-500"]};
`

export const KnowBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 7.5rem;

    h1 {
        font-size: 2.5rem;
        color: ${props => props.theme["blue-500"]};
    }
`
