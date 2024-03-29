import {
    HomeContainer, HomeContent, 
    HomeHeader, LogoCircle, HeaderHomeSummary,
    HeaderHomeSummaryList,
    Summary,
    SummaryContent,
    SummaryCard,
    SummaryCardHeader,
    CardBox,
    CardContainer,
    CardHeader,
    CardContent
} from "./styles";
import homeLogo from '../../assets/home-logo.png'
import { Book, FileText, Info, MagnifyingGlass, MapPin, Medal, Star } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { AboutBox } from "../../components/AboutBox/styles";
import { useEffect, useState } from "react";
import { client } from "../../client/client";

type DashboardSummary = {
    totalCampuses: number
    totalProjects: number
    totalCourses: number
}

export function Home() {
    const [
        dashboardSummary,
        setDashboardSummary
    ] = useState<DashboardSummary>({} as DashboardSummary)

    async function fetchDashboardSummary() {
        await client
            .get("/dashboard/resumo")
            .then(res => {
                setDashboardSummary(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchDashboardSummary()
    }, [])

    return (
        <HomeContainer>
            <HomeContent>
                <HomeHeader>
                    <LogoCircle>
                        <img src={homeLogo} alt="" />
                    </LogoCircle>
                    <HeaderHomeSummary>
                        <HeaderHomeSummaryList>
                            <p>Extensão</p>
                            <p>Pesquisa</p>
                            <p>Inovação</p>
                        </HeaderHomeSummaryList>

                        <h1>Observatório de Projetos UPE</h1>

                        <span>OP-UPE: Conhecimento e transparência ao alcance de todos!</span>
                    </HeaderHomeSummary>
                </HomeHeader>

                <Summary>
                    <NavLink to={'/dashboard'}>
                        <button>
                            <p>Saiba mais</p>

                            <Info size={24} color="white" />
                        </button>
                    </NavLink>

                    <SummaryContent>
                        <SummaryCard>
                            <SummaryCardHeader>
                                <MapPin color="#22385E" size={36} weight="bold" />
                                <span>Campus</span>
                            </SummaryCardHeader>
                            <span>{dashboardSummary.totalCampuses}</span>
                        </SummaryCard>

                        <SummaryCard>
                            <SummaryCardHeader>
                                <Medal color="#22385E" size={36} weight="bold" />
                                <span>Cursos</span>
                            </SummaryCardHeader>
                            <span>{dashboardSummary.totalCourses}</span>
                        </SummaryCard>

                        <SummaryCard>
                            <SummaryCardHeader>
                                <FileText color="#22385E" size={36} weight="bold" />
                                <span>Projetos</span>
                            </SummaryCardHeader>
                            <span>{dashboardSummary.totalProjects}</span>
                        </SummaryCard>
                    </SummaryContent>
                </Summary>

                <AboutBox>
                    <h1>OP-UPE</h1>
                    <p>Extensão, Pesquisa e Inovação.</p>
                    <span>
                        Observatório de Projetos Pesquisa, 
                        Extensão e Inovação da Universidade de Pernambuco - Campus Garanhuns” 
                        (OP-UPE) é uma ferramenta web, desenvolvida para permitir transparência, 
                        integração e colaboração entre os projetos de pesquisa, 
                        extensão e inovação da Universidade de Pernambuco.
                    </span>
                </AboutBox>

                <CardBox>
                    <CardContainer>
                        <CardContent>
                            <CardHeader>
                                <Book size={36} color="#1A2D57" />
                                <p>Projetos de Extensão</p>
                            </CardHeader>
                            <span>
                                Articular a Universidade com a sociedade e incentivar ações de 
                                cultura e manifestações artísticas que procurem resgatar 
                                as raízes culturais de grupos organizados em âmbito regional, 
                                nacional e internacional.
                            </span>
                        </CardContent>
                    </CardContainer>

                    <CardContainer>
                        <CardContent>
                            <CardHeader>
                                <MagnifyingGlass size={36} color="#1A2D57" />
                                <p>Projetos de Pesquisa</p>
                            </CardHeader>
                            <span>
                                A pesquisa tem por finalidade a adoção de métodos e 
                                processos criteriosos: planejamento da pesquisa, 
                                procedimentos, análises de dados, interpretação para 
                                posterior publicação em revistas científicas.
                            </span>
                        </CardContent>
                    </CardContainer>
                    
                    <CardContainer>
                        <CardContent>
                            <CardHeader>
                                <Star size={36} color="#1A2D57" />
                                <p>Projetos de Inovação</p>
                            </CardHeader>
                            <span>
                                Tem como objetivo em consonância com a missão e a visão da UPE, 
                                a criação de estratégias de atuação institucional no ambiente 
                                produtivo local, regional, nacional e internacional, bem como, 
                                a execução de pesquisa científica, aplicada e tecnológica.
                            </span>
                        </CardContent>
                    </CardContainer>
                </CardBox>
            </HomeContent>
        </HomeContainer>
    )
}
