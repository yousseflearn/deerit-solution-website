'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [myValue, setMyValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = (e: any) => {
    setMyValue(e.target.value);
  };
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s work together
      </h1>
      <p className="text-gray-200 mt-3 text-xs lg:text-base md-text-sm">
        We’ll be happy to answer any specific questions or general inquiries you
        may have, and look forward to hearing from you.{' '}
      </p>
      {/* Input Fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md w-full border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md w-full border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md w-full border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="phone"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md w-full border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
        </div>
        <div>
          <select className="mt-5 bg-black text-white w-full placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none ">
            <option id="select" value={myValue} onChange={changeHandler}>
              Select an option
            </option>
            <option value="frontend">Frontend development</option>
            <option value="backend">Backend development</option>
            <option value="fullstack">Fullstack development</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder="Message"
          className='mt-5 bg-black text-white w-full placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none "'
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
