import { MagnifyingGlass, Users } from "@phosphor-icons/react";
import { AboutContainer, AboutContent, AboutHeader, AboutMainBox, AboutMainBoxHeader, CircleIconBox, KnowBox } from "./styles";
import { AboutBox } from "../../components/AboutBox/styles";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutHeader>
          <h1>SOBRE NÓS</h1>
          <span>Pessoas reais. Projetos reais.</span>
        </AboutHeader>
        <AboutMainBox>
            <AboutMainBoxHeader>
              <CircleIconBox>
                <MagnifyingGlass color="#fff" size={44} weight="bold" />
              </CircleIconBox>
              <h1>O que é um Observatório acadêmico?</h1>
            </AboutMainBoxHeader>
            <span>Explicar o que é um observatório acadêmico e falar um pouco sobre</span>
        </AboutMainBox>
        <AboutBox>
          <h1># História do OP-UPE</h1>
          <p>Explicar sobre o surgimento/motivo da criação deste observatório</p>
          <span>
            Observatório de Projetos Pesquisa, Extensão e 
            Inovação da Universidade de Pernambuco – Campus Garanhuns” 
            (OP-UPE) é uma ferramenta web, desenvolvida para permitir 
            transparência, integração e colaboração entre os projetos 
            de pesquisa, extensão e inovação da Universidade de Pernambuco.
          </span>
        </AboutBox>
        <KnowBox>
          <CircleIconBox>
            <Users color="#fff" size={44} weight="bold" />
          </CircleIconBox>
          <h1>Conheça a nossa equipe!</h1>
        </KnowBox>
      </AboutContent>
    </AboutContainer>
  );
}
