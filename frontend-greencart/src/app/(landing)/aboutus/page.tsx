import Link from "next/link";
import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="h-auto">
      <h2 className="text-[48px] font-bold mb-4 text-black dark:text-white font-Outfit pl-[3rem] pt-[2rem]">
          Why should you choose GreenCartPH?
        </h2>
    <div className="flex flex-col md:flex-row items-center p-5 bg-white dark:bg-zinc-800 px-[18rem] py-[3rem] font-Outfit">
      <div className="md:w-1/2 md:pr-6 px-[2rem] py-[3rem]">
        <p className="text-black dark:text-zinc-300 mb-6  text-[25px] mx-8 text-justify">
          Experience unparalleled convenience and transparency in grocery
          shopping with GreenCartPH. Benefit from real-time pricing information
          sourced directly from the city's largest marketplace (Carbon Market),
          enabling you to make well-informed purchasing decisions. Our seamless
          in-house delivery service ensures that you receive farm-fresh produce
          straight to your doorstep. By opting for GreenCartPH, not only do you
          simplify your shopping experience, but you also actively support local
          farmers.
          </p>
          <Link href="/aboutus/roles">
        <button className="flex items-center bg-white dark:bg-zinc-700 text-black dark:text-green-400 border rounded-[20rem] dark:border-green-400 p-2 shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-600 ml-[2rem]">
            Read more &ensp;
          <Image
          src="/Forward.png"
          width={40}
          height={40}
          alt="Farmer holding fresh produce"
          className="bg-[#009963] rounded-3xl p-[1px] shadow-md"
        />
            </button>
            </Link>
      </div>
      <div className="md:w-1/2 my-6 md:mt-0">
        <Image
          src="/aboutus-image.png"
          width={650}
          height={6500}
          alt="Farmer holding fresh produce"
          className="shadow-md"
        />
      </div>
      </div>
      </div>
  );
};

export default Aboutus;
