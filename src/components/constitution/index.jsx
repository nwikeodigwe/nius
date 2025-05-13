import React from "react";
import { Link } from "react-router";

const Index = () => {
  return (
    <section className="constitution">
      <div className="container">
        <h1 className="text-3xl font-bold">
          The Proposed Constitution of the Nigerians in The US Community
        </h1>
        <p className="text-sm font-[600] mt-3">First draft</p>
        <span className="text-xs font-[400]">5th May, 2022</span>

        <p className="font-semibold mt-5">
          <span className="text-red-500">Disclaimer:</span> This constitution is
          an internal document which provides guidelines by which the NIUS
          community will run its affairs and that of the members. This document
          is not a legal document and cannot be quoted or used as a legal
          instrument in any court of law in the United States or elsewhere,
          except where the laws of the United States permit same.
        </p>
        <Link to="#" className="underline mt-3 font-semibold">
          Read constitution
        </Link>

        <form action="" className="flex flex-col gap-3 mt-5">
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="feedback" className="font-[600]">
              Leave a feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              placeholder="Enter your feedback here..."
              className="h-[200px] w-full border-2 border-gray-300 rounded-md p-2"
            ></textarea>
          </fieldset>
          <fieldset>
            <button type="submit" className="btn btn-primary font-semibold">
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Index;
