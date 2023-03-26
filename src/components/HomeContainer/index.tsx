import { Box, BoxContainer, HomeContainer } from "./styles";
import { CheckCircle, BookBookmark, MagnifyingGlass, Lightbulb} from "@phosphor-icons/react";

export function HomeInfoBox() {
    return (
        <div>
            <HomeContainer>
                <h1>Visão Geral</h1>
                <Box>
                    <BoxContainer>
                        <BookBookmark size={45} color={"#1c3c78"}/>
                       <h1> Projetos de extensão </h1>
                       <p>A Extensão, entendida como processo educativo, cultural e científico,
                        articula-se com ensino e pesquisa e se destina a viabilizar as relações
                        mútuas e de complementaridade entre a Universidade e a sociedade.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <CheckCircle size={40} color={"#028E38"} className="check-icon"/>
                        <h1> Objetivos da extensão </h1>
                        <p>Articular a Universidade com a sociedade e incentivar ações de cultura e 
                        manifestações artísticas que procurem resgatar as raízes culturais de grupos organizados 
                        em âmbito regional, nacional e internacional.</p>
                    </BoxContainer>
                </Box>
                <Box>
                    <BoxContainer>
                        <MagnifyingGlass size={45} color={"#1c3c78"}/>
                       <h1> Projetos de pesquisa </h1>
                       <p>A Pesquisa é uma atividade básica da ciência que envolve a busca de respostas às indagações,
                        além de desenvolver a atividade de ensino. A pesquisa deve ser em sua essência, ética, de tal
                        forma que reflita credibilidade para a sociedade.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <CheckCircle size={40} color={"#028E38"} className="check-icon"/>
                        <h1> Objetivos da pesquisa </h1>
                        <p>A pesquisa tem por finalidade a adoção de métodos e processos criteriosos: planejamento da
                        pesquisa, procedimentos, análises de dados, interpretação para posterior publicação em
                        revistas científicas.</p>
                    </BoxContainer>
                </Box>
                <Box>
                    <BoxContainer>
                        <Lightbulb size={45} color={"#1c3c78"}/>
                       <h1> Projetos de inovação </h1>
                       <p>A inovação contribui para a criação de um ambiente favorável à geração de conhecimento e a sua
                        transferência para a sociedade, em consonância com a missão da Universidade e promove a cultura
                        empreendedora e de inovação entre os docentes.</p>
                    </BoxContainer>
                    <BoxContainer>
                        <CheckCircle size={40} color={"#028E38"} className="check-icon"/>
                        <h1> Objetivos da inovação </h1>
                        <p>Tem como objetivo em consonância com a missão e a visão da UPE, a criação de estratégias de atuação
                        institucional no ambiente produtivo local, regional, nacional e internacional, bem como, a execução
                        de pesquisa científica, aplicada e tecnológica.</p>
                    </BoxContainer>
                </Box>
            </HomeContainer>
            
        </div>
    );
}