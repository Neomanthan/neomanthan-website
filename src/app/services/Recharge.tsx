"use client";

import { FaRegDotCircle } from "react-icons/fa";

const Recharge = () => {
  return (
    <div className="w-full">
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        Recharge your DTH connection, mobile, data card by walking into any
        Mobisafar CSP . Get your recharge credited into your account in moments
        after you pay for it at our branches or select merchant establishments.
      </p>

      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Key Features
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Recharge any prepaid mobile, data card and DTH</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Easy, hassle-free and safe</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Choose plan and get instant recharge</span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              Mobile Recharges (Aircel, Airtel, BSNL, Idea, MTNL Delhi, MTNL
              Mumbai, MTS, Reliance, Docomo, Videocon, Vodafone)
            </span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>24/7 Friendly Customer Care assistance</span>
          </li>
        </ul>
      </div>
      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Key Benefits
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              View all the recharge plans available in a single portal
            </span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Instant recharge and confirmation from operator</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>No charges applicable on recharge transactions</span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              DTH Recharges (Airtel, BIG TV, Dish TV, TATA Sky, SunTV, Videocon)
            </span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              Data Card (Aircel, Airtel, BSNL, Idea, MTNL Delhi, MTNL Mumbai,
              MTS, Reliance, Docomo, Videocon, Vodafone)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recharge;
