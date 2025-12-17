import axiosInstance from "./axiosInstance";

type TComment = {
  comment: string;
  avaliation: number;
};

export const CreateComment = async (
  productId: string,
  data: TComment,
  token: string | null
) => {
  const res = await axiosInstance.post(
    `/api/comment/${productId}/product`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const ListCommentsAPI = async (productId: string) => {
    const res = await axiosInstance.get(`/api/comment/${productId}/product`);

    return res.data;
}