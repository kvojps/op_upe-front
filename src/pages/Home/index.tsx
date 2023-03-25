import { HomeContainer, HomeMain } from "./styles";
import { ArrowFatRight } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom";

export function Home() {
    return (
        <HomeContainer>
            <HomeContainer>
                <HomeMain>
                    <ul>
                        <li>Extensão</li>
                        <li>Pesquisa</li>
                        <li>Inovação</li>
                    </ul>

                    <h1>Observatório de Projetos UPE</h1>

                    <em>OP-UPE : Conhecimento e transparência ao alcance de todos!</em>

                    <div>
                        <NavLink to={"/projetos"}>
                            <button>
                                <span>Projetos</span>
                                <ArrowFatRight size={24} />
                            </button>
                        </NavLink>

                        <p>Conheça os projetos publicados</p>
                    </div>
                </HomeMain>
            </HomeContainer>
        </HomeContainer>
    )
}
