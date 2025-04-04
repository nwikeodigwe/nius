import React from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-white rounded-sm z-20">
        <h2 className="text-3xl font-bold">2+</h2>
        <p className="text-medium font-[400] tracking-wide">Experience</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-white rounded-sm z-20">
        <h2 className="text-3xl font-bold">40+</h2>
        <p className="text-medium font-[400] tracking-wide">States Reached</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-white rounded-sm z-20">
        <h2 className="text-3xl font-bold">600+</h2>
        <p className="text-medium font-[400] tracking-wide">Happy Members</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-white rounded-sm z-20">
        <h2 className="text-3xl font-bold">20+</h2>
        <p className="text-medium font-[400] tracking-wide">Active Staffs</p>
      </div>
    </section>
  );
};

export default Stats;
