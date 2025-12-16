"use client"
import { Spinner } from "@/components/ui/spinner"

export function LoadingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <Spinner className="size-8 text-blue-500" />
        Aguarde...
    </div>
  )
}