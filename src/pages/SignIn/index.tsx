import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { SignInContainer, SignInContent, SignInMain, SignInMainForm, SignInMainHeader } from "./styles";

export function SignIn() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    function handleUpdateVisiblePassword() {
        setIsVisiblePassword(state => !state)

        if (inputPasswordRef.current) {
            inputPasswordRef.current.focus();
            setTimeout(() => {
                if (inputPasswordRef.current) {
                    inputPasswordRef.current.selectionStart = inputPasswordRef.current.value.length;
                    inputPasswordRef.current.selectionEnd = inputPasswordRef.current.value.length;
                }
            }, 0)
        }
    }

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
                        <div>
                            {
                                isVisiblePassword ?
                                <EyeSlash 
                                    size={24}
                                    onClick={handleUpdateVisiblePassword}
                                />
                                :
                                <Eye
                                    size={24}
                                    onClick={handleUpdateVisiblePassword}
                                />
                            }
                            <input
                                ref={inputPasswordRef}
                                name="password"
                                type={isVisiblePassword ? "text" : "password"}
                                placeholder="Senha"
                            />
                        </div>
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
