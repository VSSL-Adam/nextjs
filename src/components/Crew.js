// Components
import Image from "next/image";
import Button from "./Button";
import Salt from "./Salt";
import CrewPortrait from "./CrewPortrait";

// Images
import Beach from "/public/beach.jpg";
import Coin from "/public/coin.jpg";
import Ocean from "/public/ocean.jpg";

export default function Crew() {
  return (
    <section className="flex flex-col items-center relative">
      <div className="p-10 lg:p-0 lg:w-3/6 flex items-center flex-col text-center mt-16">
        <h2 className="font-gin text-6xl md:text-7xl leading-none text-white mb-5">
          Who the hell is VSSL?
        </h2>
        <p className="font-libre_franklin text-xl leading-normal">
          We&#39;re a crew of brand builders and marketing pros that know how to
          build brands that stand out. We have our sea legs and we know what it
          takes to propel your brand to success. Ready to meet the crew? Happy
          hour is at five.
        </p>
        <div className="mt-7" id="scroll-starting-point">
          <Button
            button_class="primary"
            title="Who is VSSL?"
            type="link"
            src="#"
            target="_blank"
          />
        </div>
      </div>
      <div className='grid grid-cols-4 bg-[url("/mates.jpg")] bg-cover bg-right-bottom ml-8 pt-4 md:ml-40 lg:ml-80 lg:my-20'>
        <Image
          src={Coin}
          alt="VSSL challenge coin"
          className="-translate-y-2/4 -translate-x-1/3 z-10 md:-translate-x-2/4 md:-translate-y-20"
        />
        <div className="col-span-3"></div>
        <Image
          src={Beach}
          alt="Salty beach"
          className="col-span-3 -translate-y-2/4 -translate-x-1/4 md:col-span-2 md:-translate-x-8"
        />
        <div></div>
        <Image
          src={Ocean}
          alt="Sink or swim"
          className="col-span-2 pl-10 -translate-y-1/4 -translate-x-1/4 md:-translate-x-72 md:pl-32 lg:-translate-x-52"
        />
        <div className="col-span-2 ml-8 -translate-y-full -translate-x-1/4 md:w-[200px] md:-translate-x-2/4 md:-translate-y-30 lg:-translate-y-24 lg:w-[350px] lg:h-96">
          <div className="md:sticky md:top-2/4">
            <CrewPortrait />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/4 md:-translate-x-72 lg:-translate-x-[200%] lg:-translate-y-28">
        <Salt title="The right crew can sink a fleet" />
      </div>
    </section>
  );
}
