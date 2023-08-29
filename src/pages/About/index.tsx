import { MagnifyingGlass, Users } from "@phosphor-icons/react";
import { AboutContainer, AboutContent, AboutHeader, AboutMainBox, AboutMainBoxHeader, CircleIconBox, KnowBox, Stackholder, StackholdersContainer } from "./styles";
import ivaldir from "../../assets/ivaldir.jpeg"
import hermano from "../../assets/hermano2.png"
import jeferson from "../../assets/jeferson2.jpeg"

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
                <MagnifyingGlass color="#fff" weight="bold" />
              </CircleIconBox>
              <h1>O que é um Observatório de Projetos?</h1>
            </AboutMainBoxHeader>
            <span>
              É um instrumento de transparência com objetivo de
              proporcionar o compartilhamento de conhecimento e de apoiar a tomada de decisão diante do caos
              informacional vivenciado pelas organizações. Ou seja, possui o intuito de analisar um fenômeno e a partir dessa análise extrair resultados que
              auxiliem na construção de um corpo de conhecimento. Com isso, ao termos um conjunto de informações é
              necessário realizar o compartilhamento do estudo para todos e assim conseguir mostrar de maneira
              transparente os resultados obtidos.
            </span>
        </AboutMainBox>

        <KnowBox>
          <CircleIconBox>
            <Users color="#fff" size={44} weight="bold" />
          </CircleIconBox>
          <h1>Conheça a nossa equipe!</h1>
        </KnowBox>

        <StackholdersContainer>
          <Stackholder>
            <img src={ivaldir} alt="" />
            <h3>Ivaldir Honório</h3>
            <span>Orientador</span>
          </Stackholder>
          <Stackholder>
            <img src={hermano} alt="" />
            <h3>Hermano Perrelli</h3>
            <span>Orientador</span>
          </Stackholder>
          <Stackholder>
            <img src={jeferson} alt="" />
            <h3>Jeferson Kennedy</h3>
            <span>Orientador</span>
          </Stackholder>
          <Stackholder>
            <img src="https://github.com/kvojps.png" alt="" />
            <div>
              <h3>José Ferreira</h3>
              <span>Desenvolvedor de Software</span>
            </div>
          </Stackholder>
          <Stackholder>
            <img src="https://github.com/rafa-souza-dev.png" alt="" />
            <div>
              <h3>Rafael Souza</h3>
              <span>Desenvolvedor de Software</span>
            </div>
          </Stackholder>
        </StackholdersContainer>
      </AboutContent>
    </AboutContainer>
  );
}
