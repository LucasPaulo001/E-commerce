"use client";

import { ListCommentsAPI } from "@/api/comment";
import { Spinner } from "@/components/ui/spinner";
import { TComment } from "@/types/comment.types";
import { Product } from "@/types/products.type";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

interface ICommentProps {
  product: Product;
}

export const ListComments = ({ product }: ICommentProps) => {
  const [comments, setComments] = useState<TComment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await ListCommentsAPI(product.id);
        setComments(comments.commentsFormated);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [product.id]);

  if(comments.length === 0) return <span className="my-5 text-2xl">Nenhum comentário</span>

  return (
    <div className="mt-16 p-5 w-full">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner className="size-8 text-blue-600" />
        </div>
      ) : (
        <div className="rounded-2xl p-4 border-2 flex flex-col justify-center gap-7">
          {Array.isArray(comments) &&
            comments.map((comment) => (
              <div key={comment.id}>
                <div className="flex items-center gap-3">
                  <User className="rounded-full size-10 border-2" />
                  <div className="flex w-full gap-0.5 flex-col">
                    <strong>{comment.user.name}</strong>
                    {comment.comment}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
