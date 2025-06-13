import React, { useRef } from "react";
import { FaPhp, FaLaravel, FaReact, FaWordpress, FaShopify, FaWix, FaLanguage } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { TbArrowBarBoth, TbBrandWebflow } from "react-icons/tb";
import { BsApple } from "react-icons/bs";
import { RiComputerLine, RiFlutterFill } from "react-icons/ri";
import { TiSocialAtCircular } from "react-icons/ti";
import { SiWebtrees, SiBotblecms, SiMicropython } from "react-icons/si";
import RootDesign from "./components/RootDesign";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import { FaShop } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { FcPhoneAndroid } from "react-icons/fc";
import { LiaIndustrySolid, LiaLanguageSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";

const ServiceItem = ({ text }) => (
  <div className="text-center">
    <p className="font-semibold text-gray-800 underline hover:text-primary cursor-pointer text-base md:text-lg lg:text-xl">
      {text}
    </p>
  </div>
);

const services = [
  { name: "PHP Dev", icon: <FaPhp size={50} />, hoverText: "PHP Development Services" },
  { name: "Laravel Dev", icon: <FaLaravel size={50} />, hoverText: "Laravel Development Services" },
  { name: "React JS", icon: <FaReact size={50} />, hoverText: "React Development Services" },
  { name: "E-Commerce Site", icon: <FaShop size={50} />, hoverText: "E-Commerce Solutions" },
  { name: "Web Portal", icon: <SiWebtrees size={50} />, hoverText: "Custom Web Portals" },
];

const app_dev = [
  { name: "Android App", icon: <FaAndroid size={50} />, hoverText: "Android App Development" },
  { name: "Hybrid App Dev", icon: <TbArrowBarBoth size={50} />, hoverText: "Hybrid App Solutions" },
  { name: "IOS", icon: <BsApple size={50} />, hoverText: "iOS App Development" },
  { name: "Flutter", icon: <RiFlutterFill size={50} />, hoverText: "Flutter App Development" },
  { name: "Social Apps", icon: <TiSocialAtCircular size={50} />, hoverText: "Social Application Development" },
];

const cms = [
  { name: "Wordpress", icon: <FaWordpress size={50} />, hoverText: "WordPress Development" },
  { name: "Web Flow", icon: <TbBrandWebflow size={50} />, hoverText: "Web Flow Solutions" },
  { name: "Shopify", icon: <FaShopify size={50} />, hoverText: "Shopify Development" },
  { name: "Custom Cms", icon: <SiBotblecms size={50} />, hoverText: "Custom CMS Solutions" },
  { name: "Wix", icon: <FaWix size={50} />, hoverText: "Wix Development" },
];

const crm = [
  { name: "CRM Integration with AI & Machine Learning", icon: <SiPython size={50} />, hoverText: " CRM Integration with AI & Machine Learning" },
  { name: "CRM Mobile Application Development", icon: <FcPhoneAndroid size={50} />, hoverText: " CRM Mobile Application Development" },
  { name: "Custom CRM Development", icon: <SiBotblecms size={50} />, hoverText: "Custom CRM Solutions" },
  { name: "Full-Stack Custom CRM Design from Scratch", icon: <CgWebsite size={50} />, hoverText: "Full-Stack Custom CRM Design from Scratch" },
  { name: "Industry-Tailored CRM Solutions", icon: <LiaIndustrySolid size={50} />, hoverText: "Industry-Tailored CRM Solutions" }
];

const mls = [
  { name: "CML Models", icon: <SiMicropython size={40} />, hoverText: "Custom Machine Learning Models" },
  { name: "NLP Solutions", icon: <LiaLanguageSolid size={50} />, hoverText: "Natural Language Processing (NLP) Solutions" },
  { name: "CV Solutions", icon: <RiComputerLine size={50} />, hoverText: "Computer Vision Solutions" },
];

const ServicesDeliver = () => {
  const getInTouchRef = useRef(null);

  const scrollToGetInTouch = () => {
    getInTouchRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 py-8 bg-[#F7F7F7]">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-800 mb-2">
          Services We Deliver
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-8">
          Our Featured Services
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <ServiceItem text="Web Development" />
          <ServiceItem text="Mobile App Development" />
          <ServiceItem text="CMS Solution" />
          <ServiceItem text="Digital Marketing" />
          <ServiceItem text="UI/UX Design" />
          <ServiceItem text="Custom Software Development" />
          <ServiceItem text="AI/ML Development" />
        </div>
        <RootDesign
          services={services}
          title="Web"
          sub="Development"
          desc="Craft your dream website. We turn website visions into reality. Let's build yours"
          btn={<button onClick={scrollToGetInTouch}>Book Our Web Development Services</button>}
        />
        <RootDesign
          services={app_dev}
          title="Mobile App"
          sub="Development"
          desc="Level up your brand. We build apps that captivate and convert."
          btn={<button onClick={scrollToGetInTouch}>Book Our App Development Services</button>}
        />
        <RootDesign
          services={cms}
          title="CMS"
          sub="Solution"
          desc="CMS Solution Ready to unlock the potential of your content? Contact us today for a free consultation and discover how our CMS solutions can transform your website."
          btn={<button onClick={scrollToGetInTouch}>Book Our CMS Solution Services</button>}
        />
        <div className="md:px-24 p-0">
          <RootDesign
            services={crm}
            title="CRM"
            sub="Services"
            btn={<button onClick={scrollToGetInTouch}>Book Our CRM Solution Services</button>}
          />
        </div>
        <RootDesign
          services={mls}
          title="Artificial Intelligence / Machine Learning"
          sub="Services"
          btn={<button onClick={scrollToGetInTouch}>Book Our MLS Solution Services</button>}
        />
      </div>
      <div ref={getInTouchRef}>
        <GetInTouch />
      </div>
    </div>
  );
};

export default ServicesDeliver;
