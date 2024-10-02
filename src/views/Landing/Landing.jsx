import { useRef } from "react";
import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Benefits from "./Benefits";
import Service from "./Service";
import Testimonial from "./Testimonial";
import TechnologyStack from "./TechnologyStack";
import FAQs from "./FAQS";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import PortolioSlider from "./PortolioSlider";
import "react-lazy-load-image-component/src/effects/blur.css";
import { landingbg, landingbg2, Landingbg3 } from "../../assets";

const Landing = () => {
  const getInTouchRef = useRef(null);

  const scrollToGetInTouch = () => {
    if (getInTouchRef.current) {
      getInTouchRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-white">
        {/* Hero Section */}
        <div className="relative flex flex-col gap-7 h-[70vh] items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${landingbg2})` }}
          >
            <div className="absolute inset-0 bg-blue-950 opacity-70" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white relative z-10">
            Be the{" "}
            <span className="underline underline-offset-8">Trendsetter</span>{" "}
            in <br className="hidden sm:block" /> Your Digital Space
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl w-[80%] text-center text-white relative z-10">
            Access elite software engineers with diverse expertise in 100+ technologies, working in your timezone.
          </p>

          {/* Button */}
          <div className="relative z-10">
            <Button
              onClick={scrollToGetInTouch}
              icon={<FaArrowRightLong />}
              className="border-white text-white"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-4 md:px-20 py-12">
          <Benefits />
          <Service getInTouchRef={getInTouchRef} />
          <PortolioSlider />
          <Testimonial />
          <TechnologyStack />
        </div>

        {/* FAQs and Get In Touch */}
        <FAQs />
        <div ref={getInTouchRef}>
          <GetInTouch />
        </div>
      </section>
    </div>
  );
};

export default Landing;
