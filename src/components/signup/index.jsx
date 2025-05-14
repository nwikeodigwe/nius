import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router";

const Index = () => {
  return (
    <section className="signup px-10 md:px-15 mt-[100px] sm:mt-[100px] md:mt-[150px] mb-10  mx-auto">
      <div className="flex gap-2 items-center text-3xl font-bold md:-translate-x-10">
        <Link to="/" className="hidden md:flex">
          <MdKeyboardBackspace />
        </Link>
        <h1>Create an account</h1>
      </div>
      <p className="text-sm font-[400] mt-3 max-w-[44ch]">
        Be sure to enter your legal names as it appears on your
        government-issued ID
      </p>
      <p className="text-sm mt-5">Required fields have asterisk:*</p>
      <form
        action=""
        className="md:grid sm:flex sm:flex-col md:grid-cols-2 gap-4 mt-5"
      >
        <fieldset className="col-span-1 flex flex-col gap-3">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-3">
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your last name"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-2 flex flex-col gap-3">
          <label htmlFor="email">Email Address*</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-3">
          <label htmlFor="city">City*</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-3">
          <label htmlFor="phone">Phone Number*</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-2 flex flex-col gap-3">
          <label htmlFor="phone">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="p-3 border border-gray-300"
          />
        </fieldset>
        <fieldset className="col-span-2 flex items-center gap-3">
          <input
            type="checkbox"
            name="confirm"
            id="confirm"
            className="p-1 border border-gray-300"
          />
          <label htmlFor="confirm">
            By clicking this, you agreed to our Terms and Privacy Policy.
          </label>
        </fieldset>
        <fieldset className="col-span-1 flex flex-col gap-3">
          <button type="submit" className="btn btn-primary w-fit mt-5">
            Create
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default Index;
