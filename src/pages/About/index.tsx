import { AboutCard } from "../../components/AboutCard";
import { AboutContainer, AboutContainerCards, AboutContent, AboutContentCitation, AboutContentH2, AboutContentH3 } from "./styles";
import { BookOpen } from "@phosphor-icons/react";

export function About() {
  return (
    <AboutContainer>
        <AboutContent>
      <h1>O que é observatório de projetos?</h1>
      <AboutContentCitation>
        <i>
        Um instrumento, mecanismo, processo ou unidade organizacional que
        possibilite observar algo, proporcionando transparência a partir da
        coleta, consolidação, armazenamento, estudo, pesquisa, análise,
        compartilhamento, monitoramento e divulgação de dados, informação e
        conhecimento a partir de (e para) uma determinada comunidade.
        </i>
      <em>
        (VIEIRA et al., 2020, apud VIEIRA; FARIAS; MOURA, op. cit.)
      </em>
      </AboutContentCitation>
      </AboutContent>
      <AboutContent>
        <BookOpen size={32} color="#dd6b20"/>
      <h1>OP-UPE</h1>
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
        <AboutCard profile={"https://avatars.githubusercontent.com/u/66654381?v=4"} name={"Rafira Developer"} office={"Desenvolvedor Full-Stack | JavaScript | TypeScript | Python | NodeJS | ReactJS | Django"} />
        <AboutCard profile={"https://avatars.githubusercontent.com/u/62623689?v=4"} name={"José Ferreira"} office={"Engenharia de software 6/8 - UPE"} />
        <AboutCard profile={"https://avatars.githubusercontent.com/u/70954101?v=4"} name={"Gabriel Rodrigues"} office={"A software engineer student in UPE, that loves about solving problems"} />
        <AboutCard profile={"https://github.com/amadeusantos.png"} name={"Amadeu Santos"} office={"Estudante de Engenharia de Software-UPE"} />
        </AboutContainerCards>
        </AboutContent>
    </AboutContainer>
  );
}
