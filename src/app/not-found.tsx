import Link from 'next/link'
import { Section, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Go Home</Button>
          <Button href="/quote" variant="outline">
            Get a Quote
          </Button>
        </div>
      </div>
    </Section>
  )
}
