"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Logo } from "../../../components/Logo/Logo";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useAuthContext } from "@//contexts/AuthContext";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ter ao menos 6 caracteres" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [viewPass, setViewPass] = useState<boolean>(false);

  const { login } = useAuthContext();

  const handleViewPass = () => {
    setViewPass(prev => !prev);
  }

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    await login(values.email, values.password);
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 items-center my-5">
      <div className="w-full flex items-center justify-center">
        <Logo />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex w-full! flex-col justify-center sm:w-130 items-center h-full  mx-auto p-4"
        >

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full relative lg:w-100">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                  <Input type={`${viewPass ? "text" : "password"}`} placeholder="********" {...field} />
                  <span 
                    onClick={() => handleViewPass()}
                  >
                    {
                      viewPass ? (
                        <Eye className="absolute cursor-pointer right-1.5 top-2" />
                      ) : (
                        <EyeClosed className="absolute cursor-pointer right-1.5 top-2" />
                      )
                    }
                    
                  </span>
                  
                  </div>
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full lg:w-100 cursor-pointer bg-[#3B82F6] hover:bg-[#1f64d4]"
          >
            Entrar
          </Button>

          <div>
            <span>
              Ainda não tem uma conta <strong>E-Shop</strong>?{" "}
              <Link className="text-[#3B82F6]" href={"/register"}>
                clique aqui
              </Link>
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
}
