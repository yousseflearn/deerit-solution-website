import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionHeading from '@/components/Helper/SectionHeading';

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Contact Us</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center mt-20 gap-10  ">
        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
