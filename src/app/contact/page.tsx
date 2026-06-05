"use client";
import Forward from "../component/Forward";
import ContactInfo from "./ContactInfo";
import TopSection from "./TopSection";

const ContactPage = () => {
  return (
    <>
      <TopSection />
      <ContactInfo />
      <div className="bg-whiteColor w-full py-6">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full border border-borderColor overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3570894165073!2d72.79374647584345!3d21.13818288401013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0521b4c9f1b4d%3A0x692ecee13e933f31!2sPragati%20MergeMinds!5e0!3m2!1sen!2sin!4v1780652443290!5m2!1sen!2sin"
              className="w-full"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Forward />
    </>
  );
};

export default ContactPage;
