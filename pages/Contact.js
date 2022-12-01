import Image from "next/image";
import React from "react";
import contact from "../public/contact.png";

const Contact = () => {
  return (
    <section className="bg-[#FFECEF] h-screen pt-10">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 pl-10 ">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#251B37]">
              Lets talk!
            </h2>
            <div className="text-[#251B37]">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <div>
            <Image src={contact} width={400} height={500} alt="" />
          </div>
        </div>
        <div className="mt-16">
          <form
            novalidate=""
            className="space-y-6 ng-untouched ng-pristine ng-valid "
          >
            <div>
              <label for="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded border-1 border-[#251B37]"
              />
            </div>
            <div>
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded border-1 border-[#251B37]"
              />
            </div>
            <div>
              <label for="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded border-1 border-[#251B37]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#251B37] text-[#FFECEF] roboto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
