"use client";
import logo from "@/img/logo.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-lightGreen w-full py-8">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl py-7 relative px-4 mx-auto overflow-x-hidden">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-x-2">
            <div className="col-span-full md:col-span-4">
              <div className="w-full">
                <div className="relative mb-3">
                  <Image
                    src={logo}
                    width={0}
                    height={0}
                    alt="logo"
                    className="max-w-60 w-full"
                  />
                </div>
                <p className="text-textColor text-font17 leading-6.75 mb-4 text-start">
                  We are an India-based utility service provider offering bill
                  payments for electricity, gas, water, broadband, insurance,
                  FASTag, and more, with a rapidly growing presence in the
                  market.
                </p>
                <h6 className="text-textColor capitalize text-font17 leading-6.75 font-semibold">
                  Social Media
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
