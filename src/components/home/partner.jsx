import React from "react";

const Partner = () => {
  return (
    <section className="partner">
      <h2 className="title text-3xl font-bold mx-auto mb-10">
        Partner with us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 relative">
        <div className="col-span-2 bg-[url('/images/gallery/11.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="partner-form col-span-3">
          <div className="partner-form-content-bg"></div>
          <h2 className="text-2xl font-bold">Send Us a Request Today!</h2>
          <p className="mt-3 z-20">
            At NIUS, we believe that partnerships catalyze progress.
          </p>
          <form
            action=""
            className="mt-10 flex flex-col md:grid md:grid-cols-1 gap-4"
          >
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="name" className="font-[600]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your fullname"
                className="border border-gray-200 p-4"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="email" className="font-[600]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                className="border border-gray-200 p-4"
              />
            </fieldset>
            <fieldset className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="font-[600]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-gray-200 p-4 h-30 w-full"
              ></textarea>
            </fieldset>
            <fieldset className="col-span-2">
              <button type="submit" className="btn btn-white mt-5">
                Send message
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Partner;
