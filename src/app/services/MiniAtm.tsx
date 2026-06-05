"use client";
import { FaRegDotCircle } from "react-icons/fa";

const MiniAtm = () => {
  return (
    <div className="w-full">
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        Mobisafar’s vision is to build a wide-spread public banking services
        infrastructure that makes quality banking services not just available,
        but more accessible to common citizens in urban and rural India. This is
        part of Mobisafar’s mission to bridge the gap between availability and
        accessibility to simple banking services for common citizens. Today
        Mobisafar CSP’s network of micro ATMs is spread across 24 states in the
        country.
      </p>

      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Services offered at an Mobisafar Mini ATM
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              ATM transactions: The Mobisafar micro ATM centres support all
              transactions which can be normally conducted at a Bank’s regular
              ATM
            </span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              Access to Direct Benefit Transfers of Government : Customers can
              now more easily access Direct Benefit Transfers of Government
              Welfare schemes into their accounts through the Mobisafar Micro
              ATM in the neighbourhood
            </span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>
              Service requests: Various account servicing requests such as
              balance enquiry, can be done at the Mobisafar micro ATM, putting
              banking services within easy reach of customers
            </span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Get up to 10 Rs per Transaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MiniAtm;
