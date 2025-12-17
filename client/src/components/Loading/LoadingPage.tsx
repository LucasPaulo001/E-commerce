"use client"

import { LoadingSpinner } from "./SpinnerLoading"

export function LoadingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <LoadingSpinner />
        Aguarde...
    </div>
  )
}