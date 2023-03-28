import { NavLink } from "react-router-dom";
import { SignInContainer, SignInContent, SignInMain, SignInMainForm, SignInMainHeader } from "./styles";

export function SignIn() {
    return (
        <SignInContainer>
            <SignInContent>
                <SignInMain>
                    <SignInMainHeader>
                        <h1>Entrar</h1>
                        <span>Faça login para cadastrar seus projetos!</span>
                    </SignInMainHeader>
                    <SignInMainForm>
                        <input
                            name="email"
                            type="text"
                            placeholder="E-mail"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Senha"
                        />
                        <nav>
                            <NavLink to={'/cadastrar'}>
                                <p>Esqueceu sua senha? Clique aqui</p>
                            </NavLink>
                            <NavLink to={'/cadastrar'}>
                                <p>Clique aqui para criar sua conta</p>
                            </NavLink>
                        </nav>
                        <button>Entrar</button>
                    </SignInMainForm>
                </SignInMain>
            </SignInContent>
        </SignInContainer>
    )
}
