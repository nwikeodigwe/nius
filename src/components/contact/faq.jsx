import React from "react";
import { Tab, TabTrigger, TabContent } from "@/components/common/tab";

const faqItems = [
  {
    question: "What is the entry condition?",
    answer:
      "This platform is a place for people to ask questions and get    answers.",
  },
  {
    question: "When is the next event coming up?",
    answer:
      "This platform is a place for people to ask questions and get answers.",
  },
  {
    question: "Any benefit of joining?",
    answer:
      "This platform is a place for people to ask questions and get answers.",
  },
  {
    question: "What do I need to partner with the community?",
    answer:
      "This platform is a place for people to ask questions and get answers.",
  },
];

const Faq = ({ ...props }) => {
  return (
    <div className={`faq ${props.className}`}>
      <h1 className="text-2xl font-bold text-center">FAQs</h1>
      <div className="flex flex-col gap-3 mt-4">
        {faqItems.map((faq, i) => {
          return (
            <Tab key={i} className="border border-gray-300 rounded-sm p-3">
              <TabTrigger className="font-semibold">{faq.question}</TabTrigger>
              <TabContent className="mt-3">{faq.answer}</TabContent>
            </Tab>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
