import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router";

const Index = () => {
  return (
    <section className="constitution container mx-auto px-15 mt-[150px] py-10">
      <div className="flex flex-col">
        <h1 className="text-3xl text-primary font-bold">
          Join our Social groups
        </h1>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-end gap-3">
            <span>
              <FaWhatsappSquare className="text-green-500 text-5xl" />
            </span>
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold">Whatsapp</h3>
              <Link
                to="https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg"
                className="hover:underline transition-all duration-300"
              >
                https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg
              </Link>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span>
              <FaSquareTwitter className="text-blue-500 text-5xl" />
            </span>
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold">Twitter</h3>
              <Link
                to="https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg"
                className="hover:underline transition-all duration-300"
              >
                https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg
              </Link>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span>
              <FaFacebookSquare className="text-blue-500 text-5xl" />
            </span>
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold">Facebook</h3>
              <Link
                to="https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg"
                className="hover:underline transition-all duration-300"
              >
                https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg
              </Link>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span>
              <FaSquareInstagram className="text-red-500 text-5xl" />
            </span>
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold">Instagram</h3>
              <Link
                to="https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg"
                className="hover:underline transition-all duration-300"
              >
                https://chat.whatsapp.com/BaerxmoBrkahnGG2f6PONHkg
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
