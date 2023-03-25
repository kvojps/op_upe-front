import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent, HeaderMain } from "./styles";
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderMain>
                    <NavLink to={"/"} >
                        <img src={logo} alt="" />
                    </NavLink>
                    <nav>
                        <NavLink to={"/"} >
                            <h1>Início</h1>
                        </NavLink>

                        <NavLink to={"/dashboard"} >
                            <h1>Dashboard</h1>
                        </NavLink>

                        <NavLink to={"/projetos"} >
                            <h1>Projetos</h1>
                        </NavLink>

                        <NavLink to={"/forum"} >
                            <h1>Fórum</h1>
                        </NavLink>

                        <NavLink to={"/contato"} >
                            <h1>Contato</h1>
                        </NavLink>

                        <NavLink to={"/sobre"} >
                            <h1>Sobre</h1>
                        </NavLink>
                    </nav>

                    <NavLink to={"/"} >
                            <button>
                                Login/Registrar
                            </button>
                    </NavLink>
                </HeaderMain>
            </HeaderContent>
        </HeaderContainer>
    )
}
