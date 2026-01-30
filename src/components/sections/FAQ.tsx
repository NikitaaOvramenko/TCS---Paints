'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui'
import type { Location } from '@/data/locations'

interface FAQProps {
  location?: Location
}

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const faqs = [
  {
    question: 'How long does a typical painting project take?',
    answer: 'Project timelines vary based on scope. A single room typically takes 1-2 days, while a full interior can take 3-5 days. Exterior projects usually take 3-7 days depending on the size of the home.',
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes! We provide detailed, no-obligation estimates for all projects. We\'ll assess your space, discuss your vision, and provide transparent pricing.',
  },
  {
    question: 'What type of paint do you use?',
    answer: 'We use premium quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. We can also accommodate special requests for eco-friendly or low-VOC options.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We are fully licensed and carry comprehensive liability insurance to protect both our team and your property.',
  },
  {
    question: 'Do I need to move my furniture?',
    answer: 'No, our team handles all furniture moving and protection. We carefully cover and move items as needed and return everything to its place when complete.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater metropolitan area and surrounding communities. Contact us to confirm if we cover your location.',
    answerWithCity: 'We proudly serve {city} and the surrounding {region} communities. Contact us to confirm coverage for your specific location.',
  },
]

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-neutral-900 pr-4">{question}</span>
        <svg
          className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-neutral-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ({ location }: FAQProps) {
  const title = location
    ? `Frequently Asked Questions - ${location.cityName}`
    : 'Frequently Asked Questions'

  const resolvedFaqs = faqs.map((faq) => ({
    question: faq.question,
    answer: location && faq.answerWithCity
      ? faq.answerWithCity
          .replace(/{city}/g, location.cityName)
          .replace(/{region}/g, location.regionName)
      : faq.answer,
  }))

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={title} />
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {resolvedFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
