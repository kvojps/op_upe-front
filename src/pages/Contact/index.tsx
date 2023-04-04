import { useState } from "react";
import { ContactContainer, ContactContent, ContactContentButton, ContactContentForm, ContactContentH2, ContactContentH3, ContactContentInput, ContactContentInputTextarea } from "./styles";

export function Contact() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");



    return (
        <ContactContainer>
            <h1>Contato</h1>
            <ContactContent>
                <ContactContentForm action="https://formsubmit.co/joseferreira.santosjunior@upe.br" method="POST">
                    <span>Primeiro Nome *</span>
                    <ContactContentInput type="text" name="nome" placeholder="E.x. John" onChange={(event) => setNome(event.target.value)} required />
                    <span>Endereço de E-mail *</span>
                    <ContactContentInput type="email" name="email" placeholder="E.x. John@doe.com" onChange={(event) => setEmail(event.target.value)} required />
                    <span>Telefone</span>
                    <ContactContentInput type="tel" name="telefone" placeholder="E.x. 11 11111-1111" onChange={(event) => setTelefone(event.target.value)} />
                    <ContactContentInputTextarea name="email" placeholder="Mensagem"  onChange={(event) => setMensagem(event.target.value)} />
                    <ContactContentButton type="submit" disabled={nome.length < 4 || email.length < 10} onClick={()=>{}}>Enviar Mensagem</ContactContentButton>
                </ContactContentForm>
                <div>
                    <ContactContentH3>ENTRE EM CONTATO COM O SUPORTE</ContactContentH3>
                    <ContactContentH2>Estamos felizes em falar com você, apenas complete o formulário.</ContactContentH2>
                    <p>Faremos de tudo para atender você o mais rápido possível, fique no aguardo!</p>
                    <h1>Segunda - Sexta</h1>
                    <h1>8:00AM - 5:00PM</h1>
                </div>
            </ContactContent>


            
        </ContactContainer>
    )
}