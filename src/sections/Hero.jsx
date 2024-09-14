import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex font-montserrat flex-col xl:flex-row justify-center min-h-screen border-2 max-container border-red-500 p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col gap-2 justify-center items-start  max-xl:padding-x pt-28">
        <p className="text-red-500">Our Summer collections</p>
        <h1 className="text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl: bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-500 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray leading-8 mb-10 sm:max-w-sm">
          Discover stylish Nike, quality confort, and innovation for your active
          life.
        </p>
        <Button iconURL={arrowRight} lable={"Shop now"} />

        <div className="flex justify-start items-start flex-wrap w-full mt-5 gap-16">
          {statistics.map((value, index) => (
            <div key={value.label}>
              <p className="text-4xl font-palanquin font-semibold">
                {value.value}
              </p>
              <p className="text-slate-gray font-palanquin leading-6">
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen 
      max-sl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoe1}
          alt="shoe1"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div>
          {shoes.map((value, index) => (
            <div key={shoes}>ShowCard</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
