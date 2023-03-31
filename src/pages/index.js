import Roll from "react-reveal/Bounce";

// Components
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Salt from "@/components/Salt";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import Crew from "@/components/Crew";
import Prefooter from "@/components/Prefooter";

// Images
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
          <h2 className="font-gin text-6xl md:text-7xl mb-6">
            Work from the crew
          </h2>
          <div className="lg:grid lg:grid-cols-2 lg:pr-96">
            <p className="font-libre_franklin text-xl leading-normal">
              We have a fleet of experience and the work to prove it. Check out
              how we&#39;ve propelled our clients to success. Digital is our
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
            description={
              "A client's heroic idea and the brand we built to serve it"
            }
            src="/asterra"
            priority={true}
          />
        </div>
      </section>
      {/* Solutions */}
      <section className="xl:h-[2500px] xl:my-40 xl:relative">
        <div className="px-6 max-w-screen-md mx-auto sm:text-center xl:text-left xl:mx-0 sm:px-10 xl:sticky xl:top-48 xl:z-10 xl:pl-32">
          <h2 className="font-gin text-6xl md:text-7xl mb-6">
            Services to set the course
          </h2>
          <p className="font-libre_franklin text-xl leading-normal">
            Building a successful brand is a voyage—but you will never make it
            without a solid strategy. Our crew provides full-funnel marketing
            strategy that creates sustained brand growth.
          </p>
          <div className="mt-7 sm:flex sm:justify-center xl:block">
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
        <div className='bg-no-repeat bg-cover bg-[url("/ocean.png")] w-full h-[300px] opacity-40 md:h-[350] lg:h-[450px] xl:h-[500px] xl:absolute xl:top-96 xl:left-0 xl:z-0'></div>
        {/* Solutions Stickers */}
        <div className='px-6 sm:px-10 bg-no-repeat bg-cover bg-center bg-[url("/deep-ocean.png")] xl:bg-bottom xl:relative xl:mt-48 overflow-hidden'>
          <div className="max-w-screen-sm mx-auto xl:mx-0 xl:max-w-none">
            {SolutionsData.map((solution) => {
              return (
                <div
                  className="mb-20 xl:mb-96 flex xl:justify-end"
                  key={solution.id}
                >
                  <div className="xl:min-w-[275px]">
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
                  <Roll right onReveal={() => console.log("")}>
                    <Image
                      src={solution.sticker.src}
                      alt={solution.sticker.alt}
                      width={250}
                      height={250}
                      className="xl:mb-5 pr-6 xl:pr-0 w-auto sm:pl-16 xl:pl-0"
                    />
                  </Roll>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Our Crew */}
      <Crew />
      {/* Resources */}
      <section className="px-6 my-20 max-w-screen-xl mx-auto">
        <div className="bg-dark_gray p-8 md:p-14">
          <h2 className="font-gin text-6xl md:text-7xl leading-none text-white mb-5 md:mb-0">
            Resources while at sea
          </h2>
          <div className="md:flex md:items-center">
            <p className="font-libre_franklin text-xl leading-normal">
              Digital marketing is complicated but don&#39;t get lost at sea.
              Check out some resources from the crew to help get you back on
              course.
            </p>
            <div className="mt-7">
              <Button
                button_class="primary"
                title="Dive Deeper"
                type="link"
                src="/resources"
                target=""
              />
            </div>
          </div>
        </div>
        <div className="w-60 ml-auto mr-12">
          <Salt title="Uncharted territory is where we thrive" />
        </div>
      </section>
      <Prefooter />
    </Layout>
  );
}
