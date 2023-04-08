import styled from "styled-components";

export const AboutContainer = styled.div`
    margin: 0 auto;
    max-width: 70vw;
`

export const AboutContent = styled.div`
    font-size: 1.2rem;
    width: 70vw;
    margin-bottom: 4rem;

    h1 {
        color: #000;
    }

    p {
        color: #000;
        text-align: justify;
    }
`

export const AboutBookAndTittle = styled.div`
    display: flex;

    h1 {
        margin-left: 1rem;
    }
`

export const AboutContainerCards = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
	gap: 3rem;
	padding-inline-start: 0;
    width: 70vw;
`

export const AboutContentH2 = styled.h2`
    text-align: center;
    text-justify: center;
` 
export const AboutContentH3 = styled.h3`
    text-align: center;
    text-justify: center;
    margin: 0 auto;
    font-weight: 700;
    color: #dd6b20;
`