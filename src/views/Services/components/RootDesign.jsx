import React from "react";
import Card from "./Card";

const RootDesign = ({ services = [], title, sub, desc, btn }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-[#F7F7F7]">
        <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
          <h2 className=" text-4xl md:text-6xl text-center text-primary font-bold my-2 ">
            <span className="text-black">{title}</span> {sub}
          </h2>
          <p className="text-lg text-center text-gray-700 mb-8">{desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl">
            {services.map((service) => (
              <Card service={service} />
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-blue-800 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-900 transition duration-300"
            >
              {btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootDesign;
