import styled from "styled-components";

export const ContactContainer = styled.div`
    margin: 0 auto;
    max-width: 70vw;
`

export const ContactContent = styled.div`
    display: flex;
    margin-top: 3rem;
    width: 70vw;
`

export const ContactContentForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin-right: 2rem;
`;

export const ContactContentH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  text-align:justify;
  color: #000;
`;

export const ContactContentH3 = styled.h3`
  color: #dd6b20;
  margin-bottom: 1rem;
`;

export const ContactContentInfo = styled.div`
    p {
        margin-bottom: 0.2rem;
        text-align:justify;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;      
    }
`

export const ContactContentInput = styled.input`
    margin: 0.5rem;
    border-bottom: solid 1px #000000;
    width: 100%;

`

export const ContactContentInputTextarea = styled.textarea`
    padding: 1rem;
    margin: 0.5rem;
    border: solid 1px #000000;
    width: 100%;
    height: 15vh;
`

export const ContactContentButton = styled.button`
    background-color: #dd6b20;
    color: #FFFFFF;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    border: none;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    :hover {
        background-color: #c7601d;
        transition: linear 0.4s;
    }

    :disabled {
        background-color: #e27935;
    }
`