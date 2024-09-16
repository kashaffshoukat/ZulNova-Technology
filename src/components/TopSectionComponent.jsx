import React from "react";

const TopSectionComponent = ({ head1, head2, head3, description, picture, buttonComponent }) => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Text and Button Section */}
        <div className="flex flex-col gap-6 md:gap-8 mt-4 lg:mt-0 items-start justify-start">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium cursor-pointer">
            {head1}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {head2} <span className="text-[#2e5090]">{head3}</span>
          </h2>
          <p className="text-base md:text-2xl lg:text-3xl">
            {description}
          </p>
          <div>
            {buttonComponent}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute -right-4 md:-right-6 lg:-right-8 top-4 md:top-6 lg:top-8 bg-red-500 w-8 md:w-12 lg:w-14 h-8 md:h-12 lg:h-14 rounded-full"></div>
          <img
            src={picture}
            alt="Team"
            className="w-full h-auto rounded-3xl object-cover"
          />
          <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 -left-4 md:-left-6 lg:-left-8 bg-blue-950 w-8 md:w-12 lg:w-14 h-8 md:h-12 lg:h-14 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TopSectionComponent;
