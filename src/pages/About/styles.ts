import styled from "styled-components";

export const AboutContainer = styled.div`
    margin: 4rem 8rem 0rem 8rem;
    max-width: 70vw;
`

export const AboutContent = styled.div`
    font-size: 1.2rem;
    width: 70vw;
    margin-bottom: 4rem;
`

export const AboutContainerCards = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
	gap: 2rem;
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

export const AboutContentCitation = styled.div`
    font-size: 1.5rem;
    margin: 0 10rem;
`