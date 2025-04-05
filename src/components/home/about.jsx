import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="title text-center text-3xl font-bold mx-auto">
          About Us
        </h2>
        <div className="flex flex-col gap-4 mt-16">
          <h3 className="text-2xl font-[700]">
            About NIUS: Nigerians in the USA
          </h3>
          <div className="flex flex-col gap-10 text-lg tracking-wide leading-10 font-[500]">
            <p>
              The NIUS Community, short for Nigerians In the US Community, was
              founded on May 15th, 2022, by Ebunoluwa. Its inception arose from
              the realization that locating Nigerians in the vicinity wasn't
              straightforward, and even when found, they were not always
              receptive to community building. In the pursuit of opportunities
              in the United States, I've harbored a steadfast aspiration to
              cultivate a Nigerian community fostering influential individuals,
              enterprises, innovative ideas, and global recognition.
              <br /> We aspire to transmit an already established and deeply
              rooted community, adorned with impactful achievements, to the next
              generation.
            </p>
            <p>
              A tightly-knit community with resourceful members and readily
              available life-changing insights is invaluable. Since its
              establishment, we've flourished, establishing a robust online
              presence across various platforms such as Twitter, Instagram,
              WhatsApp, and TikTok, amassing over 16,000 followers and boasting
              a community of over 5,000 members. Recognizing the vastness of the
              United States, we've segmented regions—Northeast, Southwest,
              Southeast, Midwest, and West—to bridge geographical divides....
            </p>
          </div>
          <Link to="/about" className="btn btn-primary mt-10 w-fit">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
