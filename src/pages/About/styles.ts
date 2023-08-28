import styled from "styled-components";
import vectorLeft from "../../assets/vector-left.png"

export const AboutContainer = styled.div`
    position: relative;
    
    img {
        position: absolute;
    }


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

    padding: 8.5rem 0 0 32rem;

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

    @media screen and (max-width: 700px) {
        padding: 0;
        padding-top: 6rem;

        h1 {
            font-size: 2.8rem;
        }
    }
`

export const AboutMainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 12.5rem;
    width: 60rem;
    padding: 0 0.5rem;

    span {
        font-size: 1.25rem;
        text-align: center;
    }

    @media screen and (max-width: 700px) {
        width: 100%;

        span {
            font-size: 1rem;
        }
    }
`

export const AboutMainBoxHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
        color: ${props => props.theme["blue-500"]};
        font-size: 2.5rem;
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 0.9rem;
        }
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

    svg {
        font-size: 44px;
    }

    @media screen and (max-width: 700px) {
        width: 2rem;
        height: 2rem;

        h1 {
            font-size: 1.2rem;
        }

        svg {
            font-size: 18px;
        }
    }
`

export const KnowBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 3rem;

    h1 {
        font-size: 2.5rem;
        color: ${props => props.theme["blue-500"]};
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 1.2rem;
        }

        margin-bottom: 1rem;
    }
`

export const StackholdersContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 1025px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 725px) {
        grid-template-columns: 1fr;
        margin-bottom: 1rem;
        gap: 1rem;
    }
`

export const Stackholder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    height: 24rem;
    
    color: ${props => props.theme.black};

    img {
        border: 4px solid ${props => props.theme["blue-600"]};
        border-radius: 50%;
        width: 20rem;
        height: 20rem;
        position: initial;
    }
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        font-size: 1.875rem;
        line-height: 36.57px;
        text-align: center;
    }

    @media screen and (max-width: 725px) {
        height: 20rem;

        img {
            width: 15rem;
            height: 15rem;
        }
    }
`
