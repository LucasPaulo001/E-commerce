"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import PrivateGuard from "../privateRoutes"
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/profileSlices";
import { ProfileData } from "@/components/Profile/Profile";

export default function Perfil (){

    const { user, loading } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);

      

    return(
        <PrivateGuard>
            <ProfileData user={user} />
        </PrivateGuard>
    )
}