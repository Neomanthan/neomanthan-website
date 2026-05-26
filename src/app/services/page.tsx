"use client";
import serviceBanner from "@/img/servicesIcon/services-banner.jpg";
import Image from "next/image";
import Forward from "../component/Forward";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const services = [
  "AEPS",
  "M-ATM Services",
  "BBPS",
  "Mobile & DTH Recharge",
  "EMI Collection",
  "CMS",
];

const ServicesPage = () => {
  const [active, setActive] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-whiteColor w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="grid grid-cols-12 gap-x-3">
            {/* LEFT SIDE */}
            <div className="col-span-full xl:col-span-3">
              <div className="w-full">
                <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-[35px] md:leading-11.25 mb-2 w-full">
                  Our Services
                </h2>

                <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
                  We provide secure, fast, and reliable digital payment and
                  financial solutions designed to help retailers and service
                  partners offer convenient banking and payment services to
                  customers.
                </p>

                {/* MOBILE BUTTON */}
                <div className="xl:hidden mb-5">
                  <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="w-full flex items-center justify-between bg-green text-whiteColor px-4 py-3 rounded-xl"
                  >
                    <span className="font-medium">{services[active]}</span>

                    {openMenu ? (
                      <RxCross2 className="size-5" />
                    ) : (
                      <HiOutlineMenuAlt3 className="size-5" />
                    )}
                  </button>

                  {/* MOBILE DROPDOWN */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMenu
                        ? "max-h-[500px] opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-whiteColor border border-borderColor rounded-2xl p-3 shadow-sm">
                      {services.map((item, index) => {
                        const isActive = active === index;

                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setActive(index);
                              setOpenMenu(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl mb-2 last:mb-0 transition-all duration-300 ${
                              isActive
                                ? "bg-green text-whiteColor"
                                : "bg-gray-50 text-textColor hover:bg-green/10"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* DESKTOP SIDEBAR */}
                <div className="w-full hidden xl:block">
                  {services.map((item, index) => {
                    const isActive = active === index;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 cursor-pointer group"
                        onClick={() => setActive(index)}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-5.5 h-5.5 rounded-full border-2 transition-all duration-300 ${
                              isActive
                                ? "bg-green border-green scale-110"
                                : "bg-lightText border-lightText"
                            }`}
                          />

                          {index !== services.length - 1 && (
                            <div className="w-0.5 h-8 bg-lightText" />
                          )}
                        </div>

                        <div>
                          <div
                            className={`px-2 transition-all duration-300 ${
                              isActive ? "text-green" : "text-lightText"
                            }`}
                          >
                            <h3 className="text-font17 font-medium">{item}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-full xl:col-span-9">
              <div className="w-full mb-5">
                <Image
                  src={serviceBanner}
                  width={0}
                  height={0}
                  alt="Services"
                  className="rounded-[20px] w-full h-auto"
                />
              </div>

              <div className="w-full">
                <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 mb-1 w-full">
                  {services[active]}
                </h2>

                <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
                  Manage all your bill payments in one place. Electricity,
                  water, gas, mobile, and more paid instantly with complete
                  security.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      id: "1.",
                      title: "One-Stop Platform",
                      desc: "Pay all types of bills – electricity, gas, water, DTH, mobile recharge, broadband, FASTag, insurance, loan EMIs, etc.",
                    },
                    {
                      id: "2.",
                      title: "Anytime, Anywhere Access",
                      desc: "Available through multiple channels banks, digital wallets, mobile apps, websites, and physical agent outlets.",
                    },
                    {
                      id: "3.",
                      title: "Secure And Reliable",
                      desc: "Offers a safe and standardized platform with real-time payment confirmation.",
                    },
                    {
                      id: "4.",
                      title: "Interoperability",
                      desc: "Customers can pay bills from any biller through any BBPS-enabled platform, regardless of the service provider.",
                    },
                    {
                      id: "5.",
                      title: "Instant Confirmation",
                      desc: "Receipts are generated immediately after the transaction.",
                    },
                    {
                      id: "6.",
                      title: "Multiple Payment Options",
                      desc: "Accepts payments via UPI, net banking, debit/credit cards, cash (through agents), and mobile wallets.",
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="bg-whiteColor border border-borderColor rounded-[20px] p-5 shadow-sm transition-all duration-300"
                    >
                      <h2 className="text-green text-font30 font-bold leading-none mb-4">
                        {item.id}
                      </h2>

                      <h3 className="text-textColor text-[22px] font-semibold leading-tight mb-3">
                        {item.title}
                      </h3>

                      <p className="text-lightText text-font16 leading-7 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Forward />
    </>
  );
};

export default ServicesPage;
