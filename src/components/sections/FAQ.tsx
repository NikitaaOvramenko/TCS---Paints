'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui'
import { getFaqContent } from '@/data/content'
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

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-neutral-900">{question}</span>
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
  const content = getFaqContent(location)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={content.title} />
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {content.faqs.map((faq, index) => (
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
