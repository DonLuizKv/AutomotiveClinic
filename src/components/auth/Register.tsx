import { AuthSections } from "@/types/app";

interface Props {
    setSection: (section: AuthSections) => void;
}

export default function Register({ setSection }: Props) {
    return (
        <section>
            <button type="button" onClick={() => setSection("login")}>Inicia Sesion</button>
        </section>
    );
}