"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { supabaseClient } from "@/utils/supabase/client";

export const Login = () => {
  const { resolvedTheme } = useTheme();
  const [url, setUrl] = useState<string | undefined>();
  useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = "";
    setUrl(url.toString());
  }, []);

  return (
    <div className="flex w-full max-w-lg shrink-0 flex-col gap-4 rounded-2xl bg-background p-10 shadow-xl">
      <div>
        <h1 className="text-left text-2xl font-bold">Regístrate.</h1>
        <p className="text-left text-sm text-muted-foreground">
          Mantente al tanto de las novedades de JavaScript Chile.
        </p>
      </div>

      <Auth
        providers={["github", "twitter"]}
        supabaseClient={supabaseClient}
        socialLayout="horizontal"
        showLinks={false}
        view="magic_link"
        redirectTo={url}
        localization={{
          variables: {
            magic_link: {
              email_input_label: "Correo electrónico",
              email_input_placeholder: "Ingresa tu correo electrónico",
              button_label: "Enviar enlace mágico ✨",
              confirmation_text: "Revisa tu correo electrónico",
              empty_email_address: "Debes ingresar un correo electrónico",
              loading_button_label: "Enviando...",
            },
          },
        }}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#000",
                brandAccent: "#2a2a2a",
              },
            },
          },
        }}
        theme={resolvedTheme}
      />
    </div>
  );
};
