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
import { landingbg } from "../../assets";

const Landing = () => {
  const getInTouchRef = useRef(null);

  return (
    <>
      <div className="overflow-hidden">
        <section className="bg-white">
          <div className="relative flex flex-col gap-5 md:gap-7 h-[70vh] items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${landingbg})` }}
            >
              <div className="absolute inset-0 bg-blue-950 opacity-40" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white relative z-10">
              Be the{" "}
              <span className="underline underline-offset-8">Trendsetter</span>{" "}
              in <br className="hidden sm:block" /> Your Digital Space
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl w-[90%] md:w-[80%] text-center text-white relative z-10">
              Access elite software engineers with diverse expertise in 100+
              technologies, working in your timezone
            </p>

            {/* Button */}
            <div className="relative z-10">
              <Button
                icon={<FaArrowRightLong />}
                className={"border-white text-white"}
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>

          <div className="px-20 py-12">
            <Benefits />
            <Service getInTouchRef={getInTouchRef} />
            <PortolioSlider />
            <Testimonial />
            <TechnologyStack />
          </div>
          <FAQs />
          <div ref={getInTouchRef}>
            <GetInTouch />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
