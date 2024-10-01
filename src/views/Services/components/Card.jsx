import React, { useState } from "react";

const Card = React.memo(({ service }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center bg-white p-6 shadow-md rounded-md hover:shadow-lg transition duration-300"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="mr-2 text-primary">{service.icon}</div>
      <p className="font-semibold cursor-pointer text-gray-800 text-2xl">
        {service.name}
      </p>

      {/* Tooltip */}
      {isHover && (
        <div className="absolute left-1/2 top-5 w-full bg-[black] transform -translate-x-1/2 -translate-y-12 bg-gray-900 text-white text-sm rounded px-2 py-1">
          {service.hoverText}
        </div>
      )}
    </div>
  );
});

Card.displayName = "ServiceCard";

export default Card;
