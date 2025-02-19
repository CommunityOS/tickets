import { UserCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

import { OrganizersTypes } from "./types";

export const Organizers: FC<OrganizersTypes> = ({ title, organizers }) => {
  if (!organizers?.length) {
    return;
  }

  return (
    <section className="flex w-full flex-col gap-4 bg-slate-900 p-6 dark:bg-slate-50">
      <h2 className="text-xl text-slate-50 dark:text-slate-900 md:text-4xl">
        {title}
      </h2>
      <ol className="flex flex-col gap-4">
        {organizers?.map(({ id, name, lastname }) => (
          <li key={id}>
            <span className="flex gap-2 text-slate-50 dark:text-slate-900">
              <UserCircleIcon className="h-7 w-7 shrink-0" />
              {`${name} ${lastname}`}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};
