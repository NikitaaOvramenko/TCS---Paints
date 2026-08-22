import type { Metadata } from 'next'
import { Footer } from '@/components/ui/Footer'
import { QuoteForm } from '@/features/quote'
import { getQuoteMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = getQuoteMetadata()

export default function QuotePage() {
  return (
    <>
      <section className="min-h-screen bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="mb-14">
            <p className="eyebrow mb-6 opacity-50">Free estimate</p>
            <h1 className="display-md">Tell us about the job</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed opacity-60">
              A few details is all we need. We&apos;ll come back to you with
              next steps and a no-obligation price.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
