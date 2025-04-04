import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";

const Newsletter = () => {
  return (
    <section className="newsletter  container mx-auto px-15 bg-primary text-white py-10">
      <div className="p-2 bg-white text-primary rounded-full w-fit">
        <RxEnvelopeOpen className="text-xl" />
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 flex flex-col gap-3">
          <h2 className="text-2xl font-bold max-w-[16ch]">
            Keep up with the latest
          </h2>
          <p className="text-sm">Join our newsletter to stay up to date</p>
        </div>
        <div className="col-span-3">
          <form action="" className="flex items-end gap-2">
            <fieldset className="flex flex-col gap-1">
              <label htmlFor="email" className="font-[600]">
                Newsletter
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-200 w-[500px] rounded-md mt-2"
              />
            </fieldset>
            <fieldset>
              <button type="submit" className="btn btn-white w-[185px]">
                Subscribe
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
