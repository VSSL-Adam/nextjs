import Link from "next/link";
import Image from "next/image";

export default function FeaturedWorkCard({
  img,
  alt,
  title,
  description,
  src,
}) {
  return (
    <Link href={src} className="relative group">
      <Image src={img} alt={alt} className="md:pr-10 md:pb-10" />
      <div className="bg-dark_gray md:absolute bottom-0 right-0 md:p-8 transition-all group-hover:bg-gold">
        <div className="md:border flex flex-col md:flex-row md:block border-light_gray relative transition-all group-hover:border-black py-8 px-4 md:py-0 md:px-0">
          <p className="font-gin text-3xl px-4 pb-2 md:py-6 md:border-r md:border-none border-light_gray transition-all group-hover:border-black">
            {title}
          </p>
          <p className="font-libre_franklin text-xl leading-normal text-gold md:border-t group-hover:border-black border-light_gray px-4 md:px-6 md:py-4 transition-all group-hover:text-black">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
