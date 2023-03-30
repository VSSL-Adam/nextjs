import Image from "next/image";
import { useMemo } from "react";

import Default from "/public/sample/adam.jpg";
import Yara from "/public/sample/yara.jpg";
import Sparks from "/public/sample/sparks.jpg";
import Tim from "/public/sample/tim.jpg";
import Lindsey from "/public/sample/lindsey.jpg";
import Dwayne from "/public/sample/dwayne.jpg";
import Keri from "/public/sample/keri.jpg";
import Deck from "/public/sample/deck.jpg";
import Beach from "/public/sample/beach.jpg";
import Coin from "/public/sample/coin.jpg";
import Dock from "/public/sample/dock.jpg";
import Phone from "/public/sample/phone.jpg";
import Bre from "/public/sample/bre.jpg";
import Lisa from "/public/sample/lisa.jpg";
import Michael from "/public/sample/michael.jpg";
import Dog from "/public/sample/dog.jpg";
import { useEffect } from "react";
import { productionBrowserSourceMaps } from "../../next.config";

const CrewPortrait = () => {
  // 🚨 Replace with your own data 🚨 //
  const imageArr = useMemo(
    () => [
      { id: "Yara Gosula", src: Yara },
      { id: "Sparks flying off metal", src: Sparks },
      { id: "Tim Peacock", src: Tim },
      { id: "Lindsey Sloan", src: Lindsey },
      { id: "Dwayne Jones", src: Dwayne },
      { id: "Keri Gerhear", src: Keri },
      { id: "Deck on water", src: Deck },
      { id: "Beach bonfire", src: Beach },
      { id: "VSSL Challenge Coins", src: Coin },
      { id: "Wooden dock", src: Dock },
      { id: "Woman holding smartphone", src: Phone },
      { id: "Bre Arnost", src: Bre },
      { id: "Lisa Sydes", src: Lisa },
      { id: "Michael Gauthier", src: Michael },
      { id: "Dog looking out of window", src: Dog },
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const scrollLocation = window.scrollY;
        let scrollValue =
          scrollLocation +
          document
            .getElementById("scroll-starting-point")
            .getBoundingClientRect().top;
        imageArr.forEach((image, index) => {
          const currentImage = document.getElementById(image.id);
          image.scrollLocation = scrollValue += 50;
          const nextImage =
            index < imageArr.length
              ? document.getElementById(imageArr[index].id)
              : null;
          if (scrollLocation > image.scrollLocation) {
            currentImage.classList.add("opacity-0");
            if (nextImage) {
              nextImage.classList.remove("opacity-0");
            }
          }
          if (scrollLocation < image.scrollLocation) {
            nextImage.classList.add("opacity-0");
          }
        });
      });
    }
  }, [imageArr]);
  return (
    <div>
      <Image
        src={Default}
        alt="VSSL t-shirt"
        className="absolute top-1/2 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {imageArr.map((image) => {
        return (
          <Image
            src={image.src}
            id={image.id}
            key={image.id}
            className="absolute top-1/2 right-auto bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
            alt={`${image.id}`}
          />
        );
      })}
    </div>
  );
};

export default CrewPortrait;
