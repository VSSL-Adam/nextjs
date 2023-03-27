import Link from "next/link";

export default function Button({
  button_class,
  type = "link",
  title,
  src,
  target = "",
  click_function,
}) {
  if (type === "link") {
    if (button_class === "primary") {
      return (
        <Link
          href={src}
          target={target}
          className="bg-none flex uppercase h-[120px] w-[120px] rounded-full cursor-pointer border-solid border border-gold hover:bg-gold group"
        >
          <span className="text-white font-rift rounded-full h-[120px] w-[120px] flex justify-center items-center font-bold text-3xl whitespace-nowrap leading-none -rotate-[4deg] transition-all group-hover:text-black group-hover:rotate-0 group-hover:text-lg">
            {title}
          </span>
        </Link>
      );
    } else if (button_class === "secondary") {
      return (
        <Link
          href={src}
          target={target}
          className="bg-none flex uppercase h-[120px] w-[120px] rounded-full cursor-pointer border-solid border border-white hover:bg-white group"
        >
          <span className="text-black font-rift rounded-full h-[120px] w-[120px] flex justify-center items-center font-bold text-3xl whitespace-nowrap leading-none -rotate-[4deg] transition-all group-hover:text-black group-hover:rotate-0 group-hover:text-lg">
            {title}
          </span>
        </Link>
      );
    }
  } else if (type === "button") {
    if (button_class === "primary") {
      return (
        <button className="bg-none flex uppercase h-[120px] w-[120px] rounded-full cursor-pointer border-solid border border-gold hover:bg-gold group">
          <span
            className="text-white font-rift rounded-full h-[120px] w-[120px] flex justify-center items-center font-bold text-3xl whitespace-nowrap leading-none -rotate-[4deg] transition-all group-hover:text-black group-hover:rotate-0 group-hover:text-lg"
            onClick={click_function}
          >
            {title}
          </span>
        </button>
      );
    } else if (button_class === "secondary") {
      return (
        <button className="bg-none flex uppercase h-[120px] w-[120px] rounded-full cursor-pointer border-solid border border-white hover:bg-white group">
          <span
            className="text-white font-rift rounded-full h-[120px] w-[120px] flex justify-center items-center font-bold text-3xl whitespace-nowrap leading-none -rotate-[4deg] transition-all group-hover:text-black group-hover:rotate-0 group-hover:text-lg"
            onClick={click_function}
          >
            {title}
          </span>
        </button>
      );
    }
  }
}
