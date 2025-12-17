"use client";

import { Product } from "@/types/products.type";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ListComments } from "./ListComments/ListComments";
import { useAuthContext } from "@/contexts/AuthContext";
import { CreateComment } from "@/api/comment";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IProduct {
  product: Product;
}

export const Comment = ({ product }: IProduct) => {
  const { token } = useAuthContext();
  const [comment, setComment] = useState<string | "">("");
  const [avaliation, setAvaliation] = useState<number>(0);
  const router = useRouter();

  const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!token) {
      router.push("/login");
      return;
    }
    e.preventDefault();
    const data = {
      comment,
      avaliation,
    };
    await CreateComment(product.id, data, token);
    toast.success("Comentário adicionado com sucesso.");

    setComment("");
    setAvaliation(0);
    console.log(data);
  };

  return (
    <div className="mt-16 flex flex-col justify-center gap-7 w-full">
      <hr />
      <h1 className="text-3xl">Avaliações</h1>
      <form onSubmit={handleCreateComment} className="w-full">
        <div className="flex w-full items-center justify-center flex-col gap-3.5">
          <Textarea
            placeholder={`O que achou de ${product.name}`}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            value={comment}
          />

          <div className="flex w-full flex-col">
            <label htmlFor="avaliation">Avalie o produdo</label>
            <Input
              placeholder="0 - 10"
              type="number"
              min={0}
              id="avaliation"
              max={10}
              className="w-full md:w-80"
              value={avaliation}
              onChange={(e) => setAvaliation(Number(e.target.value))}
            />
          </div>
          <Button className="bg-blue-500 w-full md:w-[30%] hover:bg-blue-700 cursor-pointer">
            Enviar
          </Button>
        </div>
      </form>

      <div>
        <hr />
        <ListComments product={product} />
      </div>
    </div>
  );
};
