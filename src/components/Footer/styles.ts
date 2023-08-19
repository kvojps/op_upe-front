import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme["blue-700"]};
    padding: 0.6875rem 2.5rem 0.6875rem 0;
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 700px) {
        div {
            display: none;
        }

        img {
            width: 15rem;
        }
    }
`

export const CopyrightBox = styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;

    span {
        line-height: 24.38px;
        font-weight: 600;
        color: ${props => props.theme.white};
        font-size: 1.25rem;
    }
`

export const LocalityBox = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.1rem;

    h3 {
        text-align: right;
        font-weight: 700;
        color: ${props => props.theme.white};
        font-size: 0.8rem;
        line-height: 0.68750rem;
    }

    span {
        text-align: right;
        font-weight: 400;
        color: ${props => props.theme.white};
        font-size: 0.8rem;
        line-height: 0.68750rem;
    }

    div {
        display: none;
    }

    svg {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 700px) {
        div {
            display: block;
        }

        h3 {
            font-size: 0.6rem;
            text-align: justify;
        }

        span {
            font-size: 0.6rem;
            text-align: justify;
        }

        svg {
            font-size: 0.6rem;
        }

        br {
            display: none;
        }
    }
`
