"use client";

import { FaRegDotCircle } from "react-icons/fa";

const Bbps = () => {
  return (
    <div className="w-full">
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        The Bharat Bill Payments system is a Reserve Bank of India (RBI)
        conceptualized system driven by National Payments Corporation of India
        (NPCI). It is a one-stop payment platform for all bills providing an
        interoperable and accessible “Anytime Anywhere” bill payment service to
        all customers across India with certainty, reliability and safety of
        transactions.
      </p>
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        Bharat BillPay a One-stop access: Bharat BillPay has multiple modes of
        payment and provides instant confirmation of payment via an SMS or
        receipt. Bharat BillPay offers myriad bill collection categories like
        electricity, telecom, DTH, gas, water bills etc. through a single
        window. In future biller, categories may be expanded to include
        insurance premium, mutual funds, school fees, institution fees, credit
        cards, local taxes, invoice payments, etc. An effective mechanism for
        handling consumer complaints has also been put in place to support
        consumer regarding any bill related problems in Bharat BillPay.
      </p>
      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Key Features
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Interoperable</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Cost-effective</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Accessible</span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Complaint Management</span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Clearing & Settlement</span>
          </li>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Standardisation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bbps;
