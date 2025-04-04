import React from "react";

const Index = () => {
  return (
    <section className="constitution container mx-auto px-15 mt-[150px] py-20">
      <div className="flex flex-col">
        <h1 className="title text-3xl font-bold mx-auto">About Us</h1>
        <h2 className="text-xl font-[600] mt-3">
          About NIUS: Nigerians in the USA
        </h2>

        <div className="flex flex-col gap-6 tracking-wide leading-8 mt-5">
          <p>
            The NIUS Community, short for Nigerians In the US Community, was
            founded on May 15th, 2022, by Ebunoluwa. Its inception arose from
            the realization that locating Nigerians in the vicinity wasn't
            straightforward, and even when found, they were not always receptive
            to community building. In the pursuit of opportunities in the United
            States, I've harbored a steadfast aspiration to cultivate a Nigerian
            community fostering influential individuals, enterprises, innovative
            ideas, and global recognition.
            <br />
            We aspire to transmit an already established and deeply rooted
            community, adorned with impactful achievements, to the next
            generation.
          </p>
          <p>
            A tightly-knit community with resourceful members and readily
            available life-changing insights is invaluable. Since its
            establishment, we've flourished, establishing a robust online
            presence across various platforms such as Twitter, Instagram,
            WhatsApp, and TikTok, amassing over 16,000 followers and boasting a
            community of over 5,000 members. Recognizing the vastness of the
            United States, we've segmented regions—Northeast, Southwest,
            Southeast, Midwest, and West—to bridge geographical divides.
          </p>
          <p>
            The ethos of the NIUS Community revolves around promoting community
            empowerment, fostering support among Nigerians, fostering unity
            among Nigerians residing in the United States, and providing avenues
            for life-altering opportunities.
          </p>
          Our goals encompass:
          <ul className="flex flex-col gap-3 list-disc list-inside">
            <li>
              Developing a comprehensive website to disseminate
              community-related information and valuable resources.
            </li>
            <li>Conducting community outreach initiatives.</li>
            <li>Hosting webinars and seminars tailored for professionals.</li>
            <li>Organizing engaging events, trips, and adventures.</li>
            <li>Offering financial literacy seminars.</li>
            <li>Creating a community app.</li>
            <li>Facilitating community building efforts.</li>
            <li>
              Venturing into diverse sectors as investors and stakeholders.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/intend.png"
                  alt="intend"
                  className="w-[300px]"
                />
              </div>
              <div>
                <p>
                  We intend to make this community safe and reliable for all
                  Nigerians who identify with our community.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/encourage.png"
                  alt="intend"
                  className="w-[300px]"
                />
              </div>
              <div>
                <p>
                  We encourage partnership, networking, growth and communal
                  interactions. We host our members to social and corporate
                  events.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/also.png"
                  alt="intend"
                  className="w-[300px]"
                />
              </div>
              <div>
                <p>
                  We also intend to encourage our members to partner and co-own
                  businesses and properties and encourage Nigerian-owned
                  businesses to thrive in the US.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/images/welcome.png"
                  alt="intend"
                  className="w-[300px]"
                />
              </div>
              <div>
                <p>
                  We welcome you as you join this force of growth and make the
                  US home away from home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
