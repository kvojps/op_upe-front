import { CardContainer, CardDescription, CardImage, CardTitle } from "./styles";

interface AboutCardProps {
    profile: string;
    name: string;
    office: string;
}

export function AboutCard({profile, name, office}: AboutCardProps) {
    return (
        <CardContainer>
            <CardImage src={profile} alt="perfil" />
            <CardTitle>{name}</CardTitle>
            <CardDescription>{office}</CardDescription>
        </CardContainer>
    )
}