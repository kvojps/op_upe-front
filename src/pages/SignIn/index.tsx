import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SignInContainer, SignInContent, SignInMain, SignInMainForm, SignInMainHeader } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormData } from '../../interfaces/form-interfaces'
import { SignInFormValidationSchema } from '../../validation/form-schemas'

export function SignIn() {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)

    const { register, handleSubmit, formState } = useForm<LoginFormData>({
        resolver: zodResolver(SignInFormValidationSchema),
        defaultValues: {
          email: '',
          password: '',
        }
    })

    function onSubmit() {
        // reset()
    }

    function handleUpdateVisiblePassword() {
        setIsVisiblePassword(state => !state)
    }

    const errorsPassword = formState.errors.password?.message
    const errorsEmail = formState.errors.email?.message

    return (
        <SignInContainer>
            <SignInContent>
                <SignInMain>
                    <SignInMainHeader>
                        <h1>Entrar</h1>
                        <span>Faça login para cadastrar seus projetos!</span>
                    </SignInMainHeader>
                    <SignInMainForm onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('email')}
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
                                {...register('password')}
                                type={isVisiblePassword ? "text" : "password"}
                                placeholder="Senha"
                            />
                        </div>
                        {
                            (errorsEmail || errorsPassword) &&
                            <div>
                                <p>{errorsEmail && '* ' + errorsEmail}</p>
                                <p>{errorsPassword && '* ' + errorsPassword}</p>
                            </div>
                        }
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
