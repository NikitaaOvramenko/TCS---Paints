import { Section, Button } from '@/components/ui'
import { Footer } from '@/components/ui/Footer'

export default function NotFound() {
  return (
    <>
      <Section className="flex min-h-screen items-center">
        <div className="max-w-xl">
          <p className="eyebrow mb-6 opacity-50">404</p>
          <h1 className="display-md">This page has been painted over</h1>
          <p className="mt-6 leading-relaxed opacity-60">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved, or it may never have existed.
          </p>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/">Go Home</Button>
            <Button href="/quote" variant="outline">
              Get a Quote
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  )
}
