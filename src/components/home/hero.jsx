import React from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/images/gallery/3.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/14.jpg",
];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${images[index]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-2 container mx-auto max-w-6xl pt-[200px] gap-2 z-50">
          <div className="cols-span-1 flex flex-col gap-4 z-20">
            <h1 className="text-6xl  font-[700] leading-[70px] text-end max-w-[18ch]">
              Welcome to{" "}
              <span className="text-green-500">
                Nig<span className="text-white">eri</span>ans
              </span>{" "}
              in the USA
            </h1>
            <p className="text-sm max-w-[8ch] -translate-y-15">
              founded <span className="text-2xl font-[700]">2022</span>
            </p>
            <div className="flex items-center gap-4">
              <Link to="/signup" className="btn btn-primary h-15 w-[200px]">
                Become a member
              </Link>
              <Link to="/contact" className="btn btn-white h-15 w-[200px]">
                Contact us
              </Link>
            </div>
          </div>
          <div className="cols-span-1 flex flex-col gap-1 pt-4 z-20">
            <div className="border-l-2 border-white pl-4 flex flex-col gap-1">
              <h2 className="text-2xl font-[400]">
                Your community away from home
              </h2>
              <p>
                Connect with Nigerians in all around the United States of
                America and building beneficial relationships
              </p>
              <div className="flex items-center">
                <span className="w-10 h-10 border-2 border-white rounded-full p-1">
                  <img src="/images/hero/1.png" alt="image" />
                </span>
                <span className="w-10 h-10 border-2 border-white rounded-full -translate-x-1 p-1">
                  <img src="/images/hero/2.png" alt="image" />
                </span>
                <span className="w-10 h-10 border-2 border-white rounded-full -translate-x-2 p-1">
                  <img src="/images/hero/3.png" alt="image" />
                </span>
              </div>
            </div>
            <p className="font-[500] translate-x-5">Last event hosted by</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-primary p-2 absolute bottom-0 left-0 right-0 text-white font-[600] tracking-wider z-20">
          <div className="flex gap-10">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <img
                  src="/images/hero/4.png"
                  alt="image"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="/images/hero/5.png"
                  alt="image"
                  className="w-10 h-10 rounded-full -translate-x-2"
                />
                <img
                  src="/images/hero/6.png"
                  alt="image"
                  className="w-10 h-10 rounded-full -translate-x-4"
                />
              </div>
              <p>A support system of 45k Nigerians</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <img
                  src="/images/hero/4.png"
                  alt="image"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="/images/hero/5.png"
                  alt="image"
                  className="w-10 h-10 rounded-full -translate-x-2"
                />
                <img
                  src="/images/hero/6.png"
                  alt="image"
                  className="w-10 h-10 rounded-full -translate-x-4"
                />
              </div>
              <p>A support system of 45k Nigerians</p>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
