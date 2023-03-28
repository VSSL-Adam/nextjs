import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Salt from "@/components/Salt";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import Shipwrecked from "/public/shipwrecked.jpg";
import Shaka from "/public/ocean-shaka.jpg";
import Captain from "/public/captain-at-the-wheel.jpg";
import Thumbnail from "/public/sample/reel-thumbnail.jpg";
import MAPP from "/public/sample/mapp.jpg";
import Asterra from "/public/sample/asterra.jpg";

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
            We're a crew of digital marketing creatives, builders, and
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
              how we've propelled our clients to success. Digital is our domain.
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
          />
          <FeaturedWorkCard
            img={Asterra}
            alt="ASTERRA rebrand"
            title="ASTERRA"
            description="A client's heroic idea and the brand we built to serve it"
            src="/asterra"
          />
        </div>
      </section>
      {/* Solutions */}
      <section className="px-6 max-w-screen-xl mx-auto sm:px-10">
        <h2 className="font-gin text-7xl mb-6">Services to set the course</h2>
        <p className="font-libre_franklin text-xl leading-normal">
          Building a successful brand is a voyage—but you'll never make it
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
      </section>
      {/* Ocean */}
      <div className="bg-no-repeat bg-cover bg-[url('/ocean.png')] w-full h-[200px] opacity-40 md:h-[500px]"></div>
      {/* Solutions Stickers */}
      <section className="px-6 max-w-screen-xl mx-auto sm:px-10 bg-no-repeat bg-cover bg-center bg-[url('/deep-ocean.png')] w-full h-[1000px] md:h-[2000px]">
        {SolutionsData.map((solution) => {
          return (
            <div className="mb-20 flex" key={solution.id}>
              <div>
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
              <Image
                src={solution.sticker.src}
                alt={solution.sticker.alt}
                width={300}
                height={300}
                className="mb-5"
              />
            </div>
          );
        })}
      </section>
    </Layout>
  );
}
