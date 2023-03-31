import Button from "./Button";
export default function Prefooter() {
  return (
    <section className='px-6 my-20 max-w-screen-xl mx-auto bg-no-repeat bg-contain bg-[url("/ship.png")]'>
      <h2 className="font-gin text-7xl leading-none text-white mb-5 md:mb-0">
        Ready to get started?
      </h2>
      <p className="font-libre_franklin text-xl leading-normal">
        Ready to get wet? Reach out and let&#39;s set the course for wave-making
        digital marketing.
      </p>
      <div className="mt-7">
        <Button
          button_class="primary"
          title="Climb aboard"
          type="link"
          src="mailto:info@vsslagency.com"
          target=""
        />
      </div>
    </section>
  );
}
