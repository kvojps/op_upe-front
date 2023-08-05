import { HomeContainer, HomeContent, HomeHeader, LogoCircle, Summary, SummaryList } from "./styles";
import homeLogo from '../../assets/home-logo.png'
import vectorRight from '../../assets/vector-right.png'

export function Home() {
    return (
        <HomeContainer>
            <img src={vectorRight} alt="" />
            <HomeContent>
                <HomeHeader>
                    <LogoCircle>
                        <img src={homeLogo} alt="" />
                    </LogoCircle>
                    <Summary>
                        <SummaryList>
                            <p>Extensão</p>
                            <p>Pesquisa</p>
                            <p>Inovação</p>
                        </SummaryList>

                        <h1>Observatório de Projetos UPE</h1>

                        <span>OP-UPE: Conhecimento e transparência ao alcance de todos!</span>
                    </Summary>
                </HomeHeader>

            </HomeContent>
        </HomeContainer>
    )
}
