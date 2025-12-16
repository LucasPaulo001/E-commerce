"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import PrivateGuard from "../privateRoutes"
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/profileSlices";
import { ProfileData } from "@/components/Profile/Profile";
import Image from "next/image";

export default function Perfil (){

    const { user, loading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);

      

    return(
        <PrivateGuard>
          <div className="flex mt-20 md:mt-16 justify-center items-center flex-col md:flex-row">
             <Image 
              src={"/profile.svg"}
              width={500}
              height={500}
              alt="imagem para o perfil"
             />
             <ProfileData user={user} />
          </div>
        </PrivateGuard>
    )
}