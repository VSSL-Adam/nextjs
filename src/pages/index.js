import Bounce from "react-reveal/Bounce";
// import {motion, useScroll} from "framer-motion"

import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Salt from "@/components/Salt";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import CrewPortrait from "@/components/CrewPortrait";

import Shipwrecked from "/public/shipwrecked.jpg";
import Shaka from "/public/ocean-shaka.jpg";
import Captain from "/public/captain-at-the-wheel.jpg";
import Thumbnail from "/public/sample/reel-thumbnail.jpg";
import MAPP from "/public/sample/mapp.jpg";
import Asterra from "/public/sample/asterra.jpg";
import Beach from "/public/beach.jpg";
import Coin from "/public/coin.jpg";
import Ocean from "/public/ocean.jpg";

// Replace with real data source
import SolutionsData from "@/data/homepage/solutions.js";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mt-28 min-[400px]:mt-16 relative lg:mt-52 max-w-screen-xl mx-auto pt-20 px-20 min-[400px]:px-6 sm:px-10">
        <div className="absolute z-0 top-0 left-0 grid grid-cols-2 w-full">
          <Image
            src={Shaka}
            alt="Hang throwing a shaka in the ocean"
            className="opacity-40 sm:w-3/6"
          />
          <Image
            src={Shipwrecked}
            alt="Shipwrecked boat"
            className="opacity-40 sm:w-4/6"
          />
          <div></div>
          <Image
            src={Captain}
            alt="Illustration of a captain at the ship wheel"
            className="opacity-40 translate-y-5 sm:-translate-y-20 sm:w-4/6 sm:translate-x-32"
          />
        </div>
        <div className="relative px-6 pb-16 min-[400px]:px-2 lg:pr-96">
          <h1 className="font-gin text-8xl mb-6">
            We build brands that sink the competition.
          </h1>
          <p className="font-libre_franklin text-xl leading-normal">
            We are a crew of digital marketing creatives, builders, and
            strategists that know how to make brands stand out. We identify and
            amplify what makes your brand unique in order to make waves and sink
            the competition.
          </p>
          <div className="mt-7 ml-7">
            <Button
              button_class="primary"
              title="Dive in"
              type="link"
              src="/our-work"
              target=""
            />
          </div>
        </div>
      </section>
      {/* Video */}
      <section className="relative pt-6 pb-12 max-w-screen-xl mx-auto lg:px-12">
        <Image src={Thumbnail} alt="Placeholder for VSSL 2022 Reel" />
        <div className="w-60 ml-auto mr-12">
          <Salt title="Easy sailing makes a crappy sailor" />
        </div>
      </section>
      {/* Our Work */}
      <section className="pt-6 pb-16">
        <div className="px-6 max-w-screen-xl mx-auto sm:px-10">
          <h2 className="font-gin text-7xl mb-6">Work from the crew</h2>
          <div className="lg:grid lg:grid-cols-2 lg:pr-96">
            <p className="font-libre_franklin text-xl leading-normal">
              We have a fleet of experience and the work to prove it. Check out
              how we&quot;ve propelled our clients to success. Digital is our
              domain.
            </p>
            <div className="mt-7 ml-3">
              <Button
                button_class="primary"
                title="Explore more"
                type="link"
                src="/our-work"
                target=""
              />
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-screen-xl flex flex-col gap-14 mx-auto sm:px-10">
          <FeaturedWorkCard
            img={MAPP}
            alt="MAPP Website redesign"
            title="MAPP Cloud"
            description="The right way to upgrade a website"
            src="/mapp"
            priority={true}
          />
          <FeaturedWorkCard
            img={Asterra}
            alt="ASTERRA rebrand"
            title="ASTERRA"
            description='A client"s heroic idea and the brand we built to serve it'
            src="/asterra"
            priority={true}
          />
        </div>
      </section>
      {/* Solutions */}
      <section className="max-w-screen-xl mx-auto lg:h-[2500px] lg:my-40 lg:relative">
        <div className="px-6 max-w-screen-md sm:px-10 lg:sticky lg:top-48 lg:max-w-[550px] lg:z-10">
          <h2 className="font-gin text-7xl mb-6">Services to set the course</h2>
          <p className="font-libre_franklin text-xl leading-normal">
            Building a successful brand is a voyage—but you will never make it
            without a solid strategy. Our crew provides full-funnel marketing
            strategy that creates sustained brand growth.
          </p>
          <div className="mt-7">
            <Button
              button_class="primary"
              title="Go forth"
              type="link"
              src="/our-solutions"
              target=""
            />
          </div>
        </div>
        {/* Ocean */}
        <div className='bg-no-repeat bg-cover bg-[url("/ocean.png")] w-full h-[300px] opacity-40 md:h-[350] lg:h-[500px] lg:absolute lg:top-96 lg:left-0 lg:z-0'></div>
        {/* Solutions Stickers */}
        <div className='px-6 sm:px-10 bg-no-repeat bg-cover bg-center bg-[url("/deep-ocean.png")] w-full lg:bg-bottom lg:relative lg:mt-48 overflow-hidden'>
          {SolutionsData.map((solution) => {
            return (
              <div
                className="mb-20 lg:mb-96 flex lg:justify-end"
                key={solution.id}
              >
                <div className="lg:min-w-[275px]">
                  <p
                    className="text-4xl font-gin text-gold mb-4"
                    dangerouslySetInnerHTML={{
                      __html: solution.title.split(" ").join("<br/>"),
                    }}
                  />
                  <ul className="list-none">
                    {solution.bullets.map((bullet) => {
                      return (
                        <li className="text-xl mb-3" key={bullet.id}>
                          {bullet.description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Bounce duration={2000} onReveal={() => console.log("hello")}>
                  <Image
                    src={solution.sticker.src}
                    alt={solution.sticker.alt}
                    width={250}
                    height={250}
                    className="lg:mb-5 pr-6 lg:pr-0 w-auto"
                  />
                </Bounce>
              </div>
            );
          })}
        </div>
      </section>
      {/* Our Crew */}
      <section className="flex flex-col items-center relative">
        <div className="p-10 lg:p-0 lg:w-2/6 flex items-center flex-col text-center mt-16">
          <h2 className="font-gin text-4xl lg:text-5xl leading-none text-white mb-5">
            Who the hell is VSSL?
          </h2>
          <p className="font-libre_franklin">
            We&quot;re a crew of brand builders and marketing pros that know how
            to build brands that stand out. We have our sea legs and we know
            what it takes to propel your brand to success. Ready to meet the
            crew? Happy hour is at five.
          </p>
          <div className="mt-8">
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
    </Layout>
  );
}
