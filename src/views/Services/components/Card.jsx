import React from "react";

const Card = ({ service }) => {
  return (
    <div
      key={service.name}
      className="flex items-center justify-center bg-white p-6 shadow-md rounded-md hover:shadow-lg transition duration-300"
    >
      <div className="mr-2 text-primary">{service.icon}</div>
      <p className="font-semibold text-gray-800 text-2xl">{service.name}</p>
    </div>
  );
};

export default Card;
