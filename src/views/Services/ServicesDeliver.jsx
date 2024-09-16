import React from "react";
import { FaPhp, FaLaravel, FaReact, FaWordpress, FaShopify, FaWix } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { TbArrowBarBoth, TbBrandWebflow } from "react-icons/tb";
import { BsApple } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import { TiSocialAtCircular } from "react-icons/ti";
import { SiWebtrees, SiBotblecms } from "react-icons/si";
import RootDesign from "./components/RootDesign";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import { FaShop } from "react-icons/fa6";

const ServiceItem = ({ text }) => (
  <div className="text-center">
    <p className="font-semibold text-gray-800 underline hover:text-primary cursor-pointer text-base md:text-lg lg:text-xl">
      {text}
    </p>
  </div>
);

const services = [
  { name: "PHP Dev", icon: <FaPhp size={50} /> },
  { name: "Laravel Dev", icon: <FaLaravel size={50} /> },
  { name: "React JS", icon: <FaReact size={50} /> },
  { name: "E-Commerce Site", icon: <FaShop size={50} /> },
  { name: "Web Portal", icon: <SiWebtrees size={50} /> },
];

const app_dev = [
  { name: "Android App", icon: <FaAndroid size={50} /> },
  { name: "Hybrid App Dev", icon: <TbArrowBarBoth size={50} /> },
  { name: "IOS", icon: <BsApple size={50} /> },
  { name: "Flutter", icon: <RiFlutterFill size={50} /> },
  { name: "Social Apps", icon: <TiSocialAtCircular size={50} /> },
];

const cms = [
  { name: "Wordpress", icon: <FaWordpress size={50} /> },
  { name: "Web Flow", icon: <TbBrandWebflow size={50} /> },
  { name: "Shopify", icon: <FaShopify size={50} /> },
  { name: "Custom Cms", icon: <SiBotblecms size={50} /> },
  { name: "Wix", icon: <FaWix size={50} /> },
];

const ServicesDeliver = () => {
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
          <ServiceItem text="Custom Software Dev" />
        </div>
        <RootDesign
          services={services}
          title="Web"
          sub="Development"
          desc="Craft your dream website. We turn website visions into reality. Let's build yours"
          btn="Visit Our Web Development Services"
        />
        <RootDesign
          services={app_dev}
          title="Mobile App"
          sub="Development"
          desc="Level up your brand. We build apps that captivate and convert."
          btn="Visit Our App Development Services"
        />
        <RootDesign
          services={cms}
          title="CMS"
          sub="Solution"
          desc="CMS Solution Ready to unlock the potential of your content? Contact us today for a free consultation and discover how our CMS solutions can transform your website."
          btn="Visit Our CMS Solution Services"
        />
      </div>
      <GetInTouch />
    </div>
  );
};

export default ServicesDeliver;
