import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.svg";
import bgImg from "../public/img/bg.jpg";
import { useState } from "react";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div className="relative">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="bg-[url('../public/img/bg.jpg')] bg-center bg-cover">
        <Navbar />
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-28 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Find Clarity. Discover your perfect career.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Every Student Deserves Access to Career Guidance and counseling.
                Get free access to expert career guidance and counseling.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
