import { AuthSections } from "@/types/app";

interface Props {
    setSection: (section: AuthSections) => void;
}

export default function Login({ setSection }: Props) {
    return (
        <section>

            <span className="flex gap-2">
                <p>¿Aun no tienes una cuenta?</p>
                <button 
                    className="text-[#b33a3a] hover:font-semibold transition-all" 
                    type="button" 
                    onClick={() => setSection("register")}
                >
                    Registrate
                </button>
            </span>
        </section>
    );
}