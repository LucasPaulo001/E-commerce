"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TUser } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const editSchema = z.object({
  name: z.string().nonempty({ message: "Nome obrigatório" }),
  userName: z.string().nonempty({ message: "Nome de usuário obrigatório." }),
  phone: z.string().nonempty("Telefone é obrigatório"),
  rua: z.string().nonempty("Rua é obrigatória"),
  numero: z.string().nonempty("Número é obrigatório"),

  bairro: z.string().nonempty("Bairro é obrigatório"),
  cidade: z.string().nonempty("Cidade é obrigatória"),
});

type editFormValues = z.infer<typeof editSchema>;

interface IProfileProps {
  user: TUser | null;
}

export const FormData = ({ user }: IProfileProps) => {
  const form = useForm<editFormValues>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      name: "",
      userName: "",
      phone: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        userName: user.userName,
        phone: user.phone,
        rua: user.adress.rua,
        numero: user.adress.numero,
        bairro: user.adress.bairro,
        cidade: user.adress.cidade
      });
    }
  }, [user, form]);

  const onSubmit = async (values: editFormValues) => {
    
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-9 gap-2.5">
          <FormField
            control={form.control}
            name="name"
            defaultValue={user?.name}
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
            defaultValue={user?.userName}
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input placeholder="seu nome de usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            defaultValue={user?.phone}
            render={({ field }) => (
              <FormItem className="w-full lg:w-100">
                <FormLabel>Número de telefone</FormLabel>
                <FormControl>
                  <Input placeholder="seu nome de usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <h1 className="text-2xl mt-5">Endereço</h1>
          <hr />
          <div className="flex w-full md:w-auto gap-3.5 flex-col">
            <FormField
              control={form.control}
              name="rua"
              defaultValue={user?.adress.rua}
              render={({ field }) => (
                <FormItem className="w-full lg:w-100">
                  <FormLabel>Rua</FormLabel>
                  <FormControl>
                    <Input placeholder="Sua Rua" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bairro"
              defaultValue={user?.adress.bairro}
              render={({ field }) => (
                <FormItem className="w-full lg:w-100">
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input placeholder="seu Bairro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numero"
              defaultValue={user?.adress.numero}
              render={({ field }) => (
                <FormItem className="w-full lg:w-100">
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input placeholder="xxxx..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cidade"
              defaultValue={user?.adress.cidade}
              render={({ field }) => (
                <FormItem className="w-full lg:w-100">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Sua Cidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-6 lg:w-100 cursor-pointer bg-[#3B82F6] hover:bg-[#1f64d4]"
          >
            Alterar dados
          </Button>
        </form>
      </Form>
    </div>
  );
};
