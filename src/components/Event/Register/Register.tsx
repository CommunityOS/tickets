"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { urls } from "@/lib/urls";

export const Register = (props: { eventId: string }) => {
  return (
    <section className="flex w-full flex-col gap-4 bg-slate-900 p-6 dark:bg-slate-50">
      <h2 className="text-xl text-slate-50 dark:text-slate-900 md:text-4xl">
        Registro
      </h2>
      <ol>
        <li className="flex content-center gap-2 text-slate-50 dark:text-slate-900">
          <InformationCircleIcon className="h-6 w-6 shrink-0" />
          <span className="text-sm italic">
            El evento requiere aprobación de los organizadores
          </span>
        </li>
        <li className="flex content-center gap-2 text-slate-50 dark:text-slate-900">
          <InformationCircleIcon className="h-6 w-6 shrink-0" />
          <span className="text-sm italic">Apúrate! Quedan pocas entradas</span>
        </li>
      </ol>
      <p className="text-slate-50 dark:text-slate-900">
        Para registrarte, por favor haz click en el botón.
      </p>
      <Button asChild variant={"secondary"} size={"lg"}>
        <Link href={urls.eventos.tickets(props.eventId)}>Registrarse</Link>
      </Button>
    </section>
  );
};
