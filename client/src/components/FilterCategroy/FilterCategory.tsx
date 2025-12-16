import Image from "next/image";

export const FilterCategory = () => {
  const categories = [
    {
      title: "Calçados",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_893906-MLB89078219548_082025-F-tnis-run-masculino-feminino-charged-quicker-2-under-armour.webp",
    },
    {
      title: "Acessórios",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_878275-MLB79336215022_092024-F-bolsa-feminina-baguete-transversal-tiracolo-pequena-festa.webp",
    },
    {
      title: "Eletrônicos",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_859238-MLA99397842700_112025-F.webp",
    },
    {
      title: "Eletrodomésticos",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_974912-MLA99627614860_122025-F.webp",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center justify-center gap-3 border rounded-md p-5 hover:border-blue-500 hover:shadow-sm transition cursor-pointer"
        >
          <div className="relative h-24 w-full">
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>

          <h2 className="text-sm font-medium">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
