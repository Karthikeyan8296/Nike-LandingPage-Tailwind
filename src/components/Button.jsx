import React from "react";
import { arrowRight } from "../assets/icons";

const Button = ({ lable, iconURL }) => {
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
      {lable}
      <img className="flex" src={iconURL} alt="icon" />
    </button>
  );
};

export default Button;
