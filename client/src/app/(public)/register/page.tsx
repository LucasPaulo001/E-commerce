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
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const registerSchema = z
  .object({
    name: z.string().nonempty({ message: "Nome é obrigatório" }),
    userName: z.string().nonempty({ message: "Nome de usuário é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "A senha precisa ter ao menos 6 caracteres" }),
    repeatPassword: z
      .string()
      .nonempty({ message: "Confirmação de senha é obrigatória" }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "As senhas não conferem",
    path: ["repeatPassword"], // mostra o erro no campo repeatPassword
  });

type LoginFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleViewPass = () => {
    setViewPass((prev) => !prev);
  };

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      userName: "",
      repeatPassword: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login values:", values);
    // Aqui você chamaria sua API de login
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 items-center my-5">
      <div className="h-full w-full flex items-center justify-center">
        <Logo />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex w-full! flex-col justify-center sm:w-130 items-center h-full  mx-auto p-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="usado em interações na plataforma"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={`${viewPass ? "text" : "password"}`}
                      placeholder="********"
                      {...field}
                    />
                    <span onClick={() => handleViewPass()}>
                      {viewPass ? (
                        <Eye className="absolute cursor-pointer right-1.5 top-2" />
                      ) : (
                        <EyeClosed className="absolute cursor-pointer right-1.5 top-2" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Repita a senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={`${showRepeatPassword ? "text" : "password"}`}
                      placeholder="********"
                      {...field}
                    />
                    <span onClick={() => setShowRepeatPassword(prev => !prev)}>
                      {showRepeatPassword ? (
                        <Eye className="absolute cursor-pointer right-1.5 top-2" />
                      ) : (
                        <EyeClosed className="absolute cursor-pointer right-1.5 top-2" />
                      )}
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
              <Link className="text-[#3B82F6]" href={"/login"}>
                clique aqui
              </Link>
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
}
