import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/vssl-logo.svg";

export default function Frame() {
  const [logoClass, setLogoClass] = useState(
    "transition-all duration-500 w-[100px] md:w-[250px]  animate-fade_up"
  );
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos < prevScrollPos) {
          setLogoClass(
            "transition-all duration-500 w-[100px] md:w-[250px] animate-fade_up"
          );
        } else {
          setLogoClass(
            "transition-all duration-500 w-[100px] md:w-[150px] animate-fade_up p-2"
          );
        }
        setPrevScrollPos(currentScrollPos);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <div className="fixed top-0 bg-no-repeat z-50">
      <header className="flex justify-between items-center w-full fixed top-0">
        <Image
          id="header-logo"
          src={Logo}
          alt="VSSL Agency"
          className={logoClass}
        />
        <div className="p-6 lg:p-14 cursor-pointer flex items-end flex-col animate-fade_up group">
          <span className="bg-gold block h-0.5 my-[3px] w-8 transition-all group-hover:w-14 group-hover:bg-white"></span>
          <span className="bg-gold block h-0.5 my-[3px] w-14 transition-all group-hover:w-10 group-hover:bg-white"></span>
          <span className="bg-gold block h-0.5 my-[3px] w-10 transition-all group-hover:w-6 group-hover:bg-white"></span>
        </div>
      </header>
    </div>
  );
}
