"use client";
import { FaRegDotCircle } from "react-icons/fa";

const CmsContent = () => {
  return (
    <div className="w-full">
      <p className="text-textColor text-font16 font-normal text-start leading-6.75 mb-4">
        Mobisafar's Cash Management Services offers a full range of products and
        services to efficiently process the receivables and payables. We cater
        to all your cash management requirements to optimize your cash flow
        position and to facilitate effective management of business operation.
      </p>

      <h3 className="text-textColor text-font20 font-semibold text-start leading-7 mb-5">
        Benefits of Cash Management Services
      </h3>
      <div className="w-full mb-5">
        <ul>
          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Leverage of vast network of locations within India</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Wide range of CMS products</span>
          </li>

          <li className="flex items-start gap-2 text-textColor text-font16 font-normal leading-6.75 mb-3">
            <FaRegDotCircle className="text-green size-4.5 shrink-0 mt-1.5" />
            <span>Ensuring timely deposit of collections</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CmsContent;
