"use client";

import { cn } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type FAQItem = {
  question: string;
  answer?: string;
};

const faqs: FAQItem[] = [
  {
    question: "Which Type Of Connection Works Best For Wifi?",
    answer:
      "Felis eget nunc lobortis mattis aliquam faucibus purus in. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Dui id ornare arcu odio. In massa tempor nec feugiat. Tellus orci ac auctor augue.",
  },
  {
    question: "Which Network Plans Are Best For School Students?",
    answer:
      "Felis eget nunc lobortis mattis aliquam faucibus purus in. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Dui id ornare arcu odio. In massa tempor nec feugiat. Tellus orci ac auctor augue.",
  },
  {
    question: "How Many Days Does It Take To Process Your Service?",
    answer:
      "Felis eget nunc lobortis mattis aliquam faucibus purus in. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Dui id ornare arcu odio. In massa tempor nec feugiat. Tellus orci ac auctor augue.",
  },
  {
    question: "What Is The Difference Between 4G And 5G Technology?",
    answer:
      "Felis eget nunc lobortis mattis aliquam faucibus purus in. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Dui id ornare arcu odio. In massa tempor nec feugiat. Tellus orci ac auctor augue.",
  },
];

export default function FaqAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="container mx-auto lg:max-w-xl space-y-5 my-20 lg:my-40 "
    >
      <div className="text-center ">
        <p className="text-[#709D06] font-semibold mb-2">
          Our Specialist's Answer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-600">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in
          elementum urna est ut ligula.
        </p>
      </div>
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className={cn(
            "bg-white rounded-xl shadow-md px-6 py-4 transition-all duration-300",
            faq.answer && "border-l-4 border-[#709D06]"
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "flex justify-between items-center w-full text-left font-semibold text-lg",
                faq.answer ? "hover:text-[#709D06]" : "text-neutral-500"
              )}
            >
              {faq.question}
              <ChevronDownIcon
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  "AccordionChevron",
                  "[data-state=open]:rotate-180"
                )}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          {faq.answer && (
            <Accordion.Content className="pt-3 text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </Accordion.Content>
          )}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
