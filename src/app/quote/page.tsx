import type { Metadata } from 'next'
import { Footer } from '@/components/ui/Footer'
import { QuoteForm } from '@/features/quote'
import { getQuoteMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = getQuoteMetadata()

export default function QuotePage() {
  return (
    <>
      <section className="min-h-screen bg-neutral-950 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h1
              className="section-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Lemon/Milk', sans-serif" }}
            >
              GET A QUOTE
            </h1>
            <p className="mt-4 text-lg text-neutral-400">
              Tell us about your painting project and we&apos;ll get back to you with next steps.
            </p>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
