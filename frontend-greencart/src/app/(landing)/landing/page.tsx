/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LandingPicture } from "../../../../public";
import { Finger_Paint } from "next/font/google";

const Landing = () => {
  return (
    <div className="relative">
      <Image
        src={LandingPicture}
        width={1440}
        alt="appgallery"
        className="object-cover w-full h-[60rem]"
      />
      <div className="absolute top-0 left-0 w-full h-[85vh] flex ">
        <div className="px-[10rem] flex items-center">
          <h1
            className="text-white !text-[84px] md:text-2xl font-bold p-4 font-Finger_Paint"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            Delve into <br /> our Garden's <br /> Fresh Picks!
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12 h-[85vh]">
        <div>
          <Image
            src="https://placehold.co/64x64"
            alt="Convenient"
            width={20}
            height={20}
            className="mx-auto mb-2"
          />
          <p className="text-zinc-800 dark:text-zinc-200">Convenient</p>
        </div>
        <div>
        <Image
            src="https://placehold.co/64x64"
            alt="Convenient"
            width={20}
            height={20}
            className="mx-auto mb-2"
          />
          <p className="text-zinc-800 dark:text-zinc-200">On-time Delivery</p>
        </div>
        <div>
        <Image
            src="https://placehold.co/64x64"
            alt="Convenient"
            width={20}
            height={20}
            className="mx-auto mb-2"
          />
          <p className="text-zinc-800 dark:text-zinc-200">
            Quality and Selection
          </p>
        </div>
        <div>
        <Image
            src="https://placehold.co/64x64"
            alt="Convenient"
            width={20}
            height={20}
            className="mx-auto mb-2"
          />
          <p className="text-zinc-800 dark:text-zinc-200">Guaranteed Fresh</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4">
              Indulge in the freshness of just-picked fruits and vegetables,
              conveniently brought to your doorstep for your culinary delight.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              GreenCartPH is dedicated to empowering our local farmers, making
              sure that their tireless efforts and premium-quality produce are
              accessible and enjoyed by everyone.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src="https://placehold.co/64x64"
            alt="Convenient"
            width={20}
            height={20}
            className="mx-auto mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
