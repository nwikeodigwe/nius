import React from "react";
import { Card, CardHeader, CardContent } from "@components/common";

const eventItems = [
  {
    title:
      "Afro-Retro play fest: Featuring, Bouncy house, Tug of war, Dance...",
    img: "/images/events/1.jpg",
    date: "Aug, 2024",
    location: "NIUS Community",
  },
  {
    title: "Youth Leadership Workshop: Building Tomorrow's Leaders",
    img: "/images/events/2.jpg",
    date: "Sep, 2024",
    location: "NIUS Training Hall",
  },
  {
    title: "End of Year Gala: Celebrating Community Achievement",
    img: "/images/events/3.png",
    date: "Dec, 2024",
    location: "Grand Community Arena",
  },
];

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <h2 className="title">Upcoming Events</h2>
        <div className="event-items">
          {eventItems.map((event, i) => (
            <Card key={i} className="event-item-card">
              <CardHeader className="event-item-card--header">
                <img src={event.img} alt={event.title} />
              </CardHeader>
              <CardContent className="event-item-card--content">
                <h3>{event.title}</h3>
                <div>
                  <p>{event.date}</p>
                  <p className="text-sm opacity-50">{event.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
