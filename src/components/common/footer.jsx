import React from "react";
import { Link } from "react-router";
import Newsletter from "./newsletter";
import { FaLocationArrow } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";
import { GrGoogle } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer>
        <div className="container">
          <div className="grid grid-cols-10 gap-6 px-15 py-10">
            <div className="col-span-3 flex flex-col gap-4">
              <img src="/logo.png" alt="logo" className="w-20" />
              <p className="text-md">
                Building Community, and Celebrating Nigeria in the Heart of the
                US.
              </p>
            </div>
            <div className="col-span-3 flex flex-col gap-4">
              <h4 className="text-primary font-bold">Contact us</h4>
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                <p>2972 Westheimer Rd. Atlanta, Georgia 85486 </p>
              </div>
              <div className="flex items-center gap-3">
                <CgPhone className="text-primary" />
                <p>(914) 774-4025</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-primary" />
                <p>nigeriansinus@gmail.com</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <h4 className="text-primary font-bold">Quick links</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/constitution">Constitution</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <h4 className="text-primary font-bold">Quick links</h4>
              <ul className="flex items-center gap-3 text-primary text-2xl">
                <li className="p-2 rounded-full bg-white text-primary">
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="p-2 rounded-full bg-white text-primary">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="p-2 bg-white rounded-full text-primary bg-white">
                  <Link to="#">
                    <TfiLinkedin />
                  </Link>
                </li>
                <li className="p-2 bg-white rounded-full text-primary bg-white">
                  <Link to="#">
                    <GrGoogle />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 bg-primary text-white text-sm ">
          <p className="tracking-wide opacity-70">
            Copyright © 2024 NIUS .All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
