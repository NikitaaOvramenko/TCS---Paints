import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui'
import { QuoteForm } from '@/features/quote'
import { getQuoteMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = getQuoteMetadata()

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get Your Free Quote
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed estimate for your project.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg sm:p-8">
            <QuoteForm />
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Free Estimates</h3>
              <p className="mt-1 text-sm text-neutral-600">No obligation quotes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Quick Response</h3>
              <p className="mt-1 text-sm text-neutral-600">Within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Licensed & Insured</h3>
              <p className="mt-1 text-sm text-neutral-600">Full protection</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact alternative */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-neutral-600">
            Prefer to talk to someone directly?
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-purple-600 hover:text-purple-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  )
}
