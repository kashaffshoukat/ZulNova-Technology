import React from "react";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { SiWebtrees } from "react-icons/si";
import RootDesign from "./components/RootDesign";
import { FaAndroid } from "react-icons/fa";
import { TbArrowBarBoth } from "react-icons/tb";
import { BsApple } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaWordpress } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { SiBotblecms } from "react-icons/si";
import { FaWix } from "react-icons/fa";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const ServiceItem = ({ text }) => (
  <div className="text-center">
    <p className="font-semibold text-gray-800 underline hover:text-primary cursor-pointer">
      {text}
    </p>
  </div>
);
const services = [
  { name: "PHP Dev", icon: <FaPhp size={65} /> },
  { name: "Laravel Dev", icon: <FaLaravel size={65} /> },
  { name: "React JS", icon: <FaReact size={65} /> },
  { name: "E-Commerce Site", icon: <FaShop size={65} /> },
  { name: "Web Portal", icon: <SiWebtrees size={65} /> },
];
const app_dev = [
  { name: "Android App", icon: <FaAndroid size={65} /> },
  { name: "Hybrid App Dev", icon: <TbArrowBarBoth size={65} /> },
  { name: "IOS", icon: <BsApple size={65} /> },
  { name: "Flutter", icon: <RiFlutterFill size={65} /> },
  { name: "Social Apps", icon: <TiSocialAtCircular size={65} /> },
];
const cms = [
  { name: "Wordpress", icon: <FaWordpress size={65} /> },
  { name: "Web Flow", icon: <TbBrandWebflow size={65} /> },
  { name: "Shopify", icon: <FaShopify size={65} /> },
  { name: "Custom Css", icon: <SiBotblecms size={65} /> },
  { name: "Wix", icon: <FaWix size={65} /> },
];

const ServicesDeliver = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-8 bg-[#F7F7F7]">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">
          Services We Deliver
        </h2>
        <p className="text-sm text-gray-700 mb-8">Our Featured Services</p>
        <div className="flex justify-center space-x-8">
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
