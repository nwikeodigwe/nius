import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader } from "../common";

const goalItems = [
  {
    icon: "/icons/web.svg",
    title: "Web-chain",
    description:
      "Developing a comprehensive web to disseminate community-related information and valuable resources.",
  },
  {
    icon: "/icons/outreach.svg",
    title: "Outreach",
    description: "Conducting community outreach initiatives",
  },
  {
    icon: "/icons/profession.svg",
    title: "Profession",
    description: "Hosting webinars and seminars tailored for professionals.",
  },
];

const Goal = () => {
  return (
    <section className="goal">
      <h2 className="title">Goal Statement</h2>
      <div className="goal-content">
        <div className="goal-content-bg"></div>
        <div className="flex flex-col md:flex-row items-center gap-5 z-10">
          <div className="flex flex-col md:gap-5 md:max-w-[34ch] md:tracking-wide leading-8 text-white">
            <h3 className="!text-white !text-left title text-2xl font-bold">
              Our Goal
            </h3>
            <p className="md:mt-3 text-md md:tracking-wider">
              At NIUS we're committed to delivering exceptional results that
              exceed your expectations. Let us help you build a powerful online
              presence that drives growth and success. Get in touch with us
              today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goalItems.map((goal, i) => (
              <Card
                key={i}
                className="shadow-md col-span-1 px-5 py-10 rounded-md bg-white tracking-wide"
              >
                <CardHeader>
                  <img src={goal.icon} alt={goal.title} className="w-10 h-10" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold opacity-80">{goal.title}</h4>
                  <p className="text-md leading-6 opacity-80">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Link
          to="/contact"
          className="btn w-fit bg-white text-primary font-semibold border-2 border-primary"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default Goal;
