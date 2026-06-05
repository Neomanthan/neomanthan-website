"use client";

import { FaRegDotCircle } from "react-icons/fa";

const QRAtm = () => {
  return (
    <div className="w-full">
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        The unified payments interface or the UPI is an interface via which you
        can withdraw money from bank accounts across a single window. Mobisafar
        is providing an option to easily withdraw money from bank account by
        just scanning a dynamic QR code from different UPI apps like Google Pay,
        Phone Pay, Paytm etc.
      </p>

      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Key Features
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Easy Withdrawal without Debit card</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Dynamic QR code for secured transactions</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Easy Bank settlement</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QRAtm;
