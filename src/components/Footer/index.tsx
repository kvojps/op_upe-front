import { CopyrightBox, FooterContainer, FooterContent, LocalityBox } from "./styles";
import govPE from "../../assets/gov-pe.svg"
import { Copyright } from "@phosphor-icons/react";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <img src={govPE} alt="Imagem do governo de Pernambuco" />

                <CopyrightBox>
                    <Copyright color="#fff" size={20} />
                    <span>2023 OP-UPE</span>
                </CopyrightBox>

                <LocalityBox>
                    <h3>Universidade de Pernambuco <br /> Campus Garanhuns</h3>
                    <span>
                        R. Cap. Pedro Rodrigues - São José, Garanhuns - PE <br />
                        CEP:  55294-902   |   Fone: (87) 3761-8227
                    </span>
                    <CopyrightBox>
                        <Copyright color="#fff" />
                        <span>2023 OP-UPE</span>
                    </CopyrightBox>
                </LocalityBox>
            </FooterContent>
        </FooterContainer>
    )
}