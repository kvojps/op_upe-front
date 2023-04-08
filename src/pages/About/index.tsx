import { AboutCard } from "../../components/AboutCard";
import { AboutContainer, AboutContainerCards, AboutContent, AboutBookAndTittle, AboutContentH2, AboutContentH3 } from "./styles";
import { BookOpen } from "@phosphor-icons/react";

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <h1>O que é observatório de projetos?</h1>
        <p>
          Um instrumento, mecanismo, processo ou unidade organizacional que
          possibilite observar algo, proporcionando transparência a partir da
          coleta, consolidação, armazenamento, estudo, pesquisa, análise,
          compartilhamento, monitoramento e divulgação de dados, informação e
          conhecimento a partir de (e para) uma determinada comunidade.
        </p>
        <em>
          (VIEIRA et al., 2020, apud VIEIRA; FARIAS; MOURA, op. cit.)
        </em>
      </AboutContent>

      <AboutContent>
        <AboutBookAndTittle>
          <BookOpen size={32} color="#dd6b20" />
          <h1>OP-UPE</h1>
        </AboutBookAndTittle>
        <p>
          Observatório de Projetos Pesquisa, Extensão e Inovação da Universidade
          de Pernambuco – Campus Garanhuns” (OP-UPE) é uma ferramenta web,
          desenvolvida para permitir transparência, integração e colaboração entre
          os projetos de pesquisa, extensão e inovação da Universidade de
          Pernambuco.
        </p>
      </AboutContent>

      <AboutContent>
        <AboutContentH3>PESSOAS REAIS. SOLUÇÕES REAIS</AboutContentH3>
        <AboutContentH2>Conheça nosso time fantástico!</AboutContentH2>
        <AboutContainerCards>
          <AboutCard profile={"https://avatars.githubusercontent.com/u/66654381?v=4"} name={"Rafira Developer"} office={"Desenvolvedor de software"} />
          <AboutCard profile={"https://avatars.githubusercontent.com/u/62623689?v=4"} name={"José Ferreira"} office={"Desenvolvedor de software"} />
          <AboutCard profile={"https://avatars.githubusercontent.com/u/70954101?v=4"} name={"Gabriel Rodrigues"} office={"Desenvolvedor de software"} />
          <AboutCard profile={"https://github.com/amadeusantos.png"} name={"Amadeu Santos"} office={"Desenvolvedor de software"} />
        </AboutContainerCards>
      </AboutContent>
    </AboutContainer>
  );
}
