"use client"

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { AuthSections } from "@/types/app";
import { useState } from "react";

export default function Home() {

    const [authSection, setAuthSection] = useState<AuthSections>("login");

    return (
        <main className="min-h-dvh w-full p-4 flex items-center justify-center max-xl:flex-col ">
            {
                authSection === "login" ? <Login setSection={setAuthSection} /> : <Register setSection={setAuthSection}/> 
            }
        </main>
    );
}