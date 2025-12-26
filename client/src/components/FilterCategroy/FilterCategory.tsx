import Image from "next/image";
import Link from "next/link";


function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export const FilterCategory = () => {


  const categories = [
    {
      title: "Camisetas",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_765715-MLB98278770313_112025-F-camisa-polo-masculina-ralph-lauren-algodo-piquet-verde.webp",
    },
    {
      title: "Calças",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_670304-MLB94411729246_102025-F-calca-tatica-rip-stop-coyote-resgate-6-bolsos-airsoft-top.webp",
    },
    {
      title: "Vestidos",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_626715-MLB96659591940_112025-F-vestido-feminino-midi-elegante-floral-moda-evangelica.webp",
    },
    {
      title: "Shorts",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_608571-MLB78151177916_082024-F-kit-3-shorts-masculino-esporte-treino-futebol-academia-liso.webp",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((item) => (
        <Link key={item.title} href={`/category/${slugify(item.title)}`}>
          <div

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
        </Link>
      ))}
    </div>
  );
};
