import React from "react";
import Faq from "./faq";

const Index = () => {
  return (
    <section className="faq">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-sm font-[400] mt-3">
        Here is an opportunity to ask question or connect directly to the admins
        or moderator of this platform
      </p>
      <form
        action=""
        className="sm:flex sm:flex-col lg:grid grid-cols-2 gap-4 w-full mt-10"
      >
        <fieldset className="col-span-1 flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-sm p-2"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-2">
          <label htmlFor="state" className="font-semibold">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Enter your state"
            className="border border-gray-300 rounded-sm p-2"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-sm p-2"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-2">
          <label htmlFor="topic" className="font-semibold">
            Topic
          </label>
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="Enter your topic"
            className="border border-gray-300 rounded-sm p-2"
          />
        </fieldset>
        <fieldset className="col-span-2 flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold">
            Description
          </label>
          <textarea
            name="message"
            id="message"
            className="border border-gray-300 rounded-sm p-2 h-[200px]"
            placeholder="Enter your message"
          ></textarea>
        </fieldset>
        <fieldset>
          <button type="submit" className="btn btn-primary text-semibold">
            Send
          </button>
        </fieldset>
      </form>
      <Faq />
    </section>
  );
};

export default Index;
