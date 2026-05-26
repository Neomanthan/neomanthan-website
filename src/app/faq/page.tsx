"use client";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const faqData = [
  {
    title: "What is Aadhaar Enabled Payment System?",
    content:
      "Aadhaar Enabled Payment System is a payment service empowering a bank customer to use Aadhaar as his/her identity to access his/ her respective Aadhaar enabled bank account and perform basic banking transactions like balance enquiry, cash deposit, cash withdrawal, remittances through a Business Correspondent.",
  },
  {
    title: "What are the services provided by instant mudra under AePS?",
    content:
      "Cash withdrawal, balance enquiry, mini statement, Aadhaar to Aadhaar fund transfer and many more services are provided.",
  },
  {
    title: "What is required for AePS transactions?",
    content:
      "You need Aadhaar number, linked bank account and biometric authentication for transactions.",
  },
  {
    title: "How much money can be withdraw from instant mudra AEPS?",
    content:
      "Withdrawal limits depend on the bank guidelines and transaction policies.",
  },
  {
    title: "Who can avail AePS?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "What is eKYC Service?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "What are the benefits of AEPS?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "What are the benefits of eKYC?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "Who is acquirer Bank?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "Who is issuer Bank?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "what is RRN No.?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "How to use AEPS?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
  {
    title: "Where can a retailer raise an issue related to his/her account?",
    content:
      "Any customer having Aadhaar linked with a bank account can use AEPS services.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="relative w-full bg-[url('/mainBanner.jpg')] bg-cover bg-center bg-no-repeat h-[75px] md:h-[170px] lg:h-[214px] xl:h-[298px] 2xl:h-[382px]"></section>
      <div className="bg-lightGray w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full text-center mb-10 max-w-212.5 mx-auto">
            <h2 className="text-green font-bold text-font27 leading-9.25 md:text-font40 md:leading-12.5 mb-2 ">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-textColor text-font16 font-normal text-center leading-6.5">
              Everything you need to know about our services, process, pricing,
              support, and platform features all in one place. Browse the most
              commonly asked questions and get answers instantly.
            </p>
          </div>
          <div className="w-full">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ease-in-out mb-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05)] cursor-pointer
                    ${
                      isOpen
                        ? "bg-green border-s-3 border-green"
                        : "bg-lightGreen border-s-3 border-green hover:bg-green/20"
                    }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-5 py-5 text-left cursor-pointer"
                  >
                    <h3
                      className={`text-font16 font-semibold transition-colors duration-300
                  ${isOpen ? "text-whiteColor" : "text-textColor"}`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`transition-all duration-300 ${
                        isOpen ? "rotate-180 text-whiteColor" : "text-green"
                      }`}
                    >
                      {isOpen ? (
                        <TiArrowSortedUp size={25} />
                      ) : (
                        <TiArrowSortedDown size={25} />
                      )}
                    </div>
                  </button>

                  {/* Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <p
                          className={`text-font15 leading-6.25 font-medium transition-colors duration-300 ${
                            isOpen ? "text-whiteColor" : "text-textColor"
                          }`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
