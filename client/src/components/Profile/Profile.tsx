"use client";

import { TUser } from "@/types/user.type";
import { FormData } from "./FormEdit/FormEdit";
import { Button } from "../ui/button";
import { ArrowRightFromLineIcon } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";

interface IProfileProps {
  user: TUser | null;
}

export const ProfileData = ({ user }: IProfileProps) => {
  const extractInitials = (name: string | undefined) => {
    const first = name?.split(" ")[0][0];
    const last = name?.split(" ")[1][0];

    if (!first || !last) return;

    return first + last;
  };

  const { logout } = useAuthContext();

  return (
    <div className="p-5 w-full mt-12">
      <div className="flex justify-center gap-4 items-center">
        <div className="flex justify-center items-center gap-3.5">
          <span className="text-3xl font-bold rounded-2xl border-2 p-3">
            {extractInitials(user?.name)}
          </span>
          <div className="flex flex-col">
            <span className="font-bold">{user?.name}</span>
            <span>{user?.email}</span>
          </div>
        </div>
        <div>
          <Button onClick={() => logout()} variant={"destructive"}>
            Sair <ArrowRightFromLineIcon />
          </Button>
        </div>
      </div>
      <div>
        <FormData user={user} />
      </div>
    </div>
  );
};
