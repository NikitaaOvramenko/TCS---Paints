"use client";

import { useState } from "react";
import { Section } from "@/components/ui";
import { getFaqContent } from "@/data/content";
import type { Location } from "@/data/locations";

interface FAQProps {
  location?: Location;
}

interface AccordionItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-900/10">
      <button
        className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-6 py-7 text-left sm:gap-x-10"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="eyebrow pt-2 text-purple-700">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="display pr-4 text-[clamp(1.125rem,1.9vw,1.5rem)]">
          {question}
        </span>

        {/* Plus that rotates into a minus */}
        <span className="relative mt-2.5 h-3.5 w-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100">
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
          <span
            className={`absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
              isOpen ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-8 leading-relaxed opacity-60 sm:pl-[calc(2rem+2.5rem)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ location }: FAQProps) {
  // Answers stay city-aware; the city rides in the eyebrow so the heading
  // does not wrap into four lines.
  const { faqs } = getFaqContent(location);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" background="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-6 opacity-50">
            05 — Questions{location ? ` · ${location.cityName}` : ""}
          </p>
          <h2 className="display-md">Frequently asked questions</h2>
        </div>

        <div className="border-t border-neutral-900/10">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
