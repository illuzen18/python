import React from "react";

const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 round-lg shadoq-md`}>{children}</div>;
};

export default Card;
