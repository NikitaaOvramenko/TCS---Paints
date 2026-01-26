'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { siteConfig } from '@/data/site'
import type { QuoteFormData, FormErrors, FormStatus } from './types'
import { workTypes, services } from './types'
import { validateQuoteForm, hasErrors, getInitialFormData } from './quoteSchema'
import { submitQuote } from './submitQuote'
import { ImageUpload } from './ImageUpload'

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(getInitialFormData())
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const validationErrors = validateQuoteForm(formData)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) {
      return
    }

    // Submit form
    setStatus('submitting')
    const result = await submitQuote(formData)

    if (result.success) {
      setStatus('success')
      setSubmitMessage(result.message)
      setFormData(getInitialFormData())
    } else {
      setStatus('error')
      setSubmitMessage(result.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-900">Thank You!</h3>
        <p className="mt-2 text-green-700">{submitMessage}</p>
        <p className="mt-4 text-sm text-green-600">
          We&apos;ll be in touch within 24 hours.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus('idle')}
        >
          Submit Another Quote
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error message */}
      {status === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          {submitMessage}
        </div>
      )}

      {/* Name fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
            First Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.name ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="John"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-neutral-700">
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.lastname ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="Doe"
          />
          {errors.lastname && <p className="mt-1 text-sm text-red-600">{errors.lastname}</p>}
        </div>
      </div>

      {/* Contact fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.email ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.phone ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Service selection */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="workType" className="block text-sm font-medium text-neutral-700">
            Property Type *
          </label>
          <select
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.workType ? 'border-red-500' : 'border-neutral-300'
            }`}
          >
            <option value="">Select property type</option>
            {workTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.workType && <p className="mt-1 text-sm text-red-600">{errors.workType}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.service ? 'border-red-500' : 'border-neutral-300'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
        </div>
      </div>

      {/* Address fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-neutral-700">
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.country ? 'border-red-500' : 'border-neutral-300'
            }`}
          />
          {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="town" className="block text-sm font-medium text-neutral-700">
            City/Town *
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.town ? 'border-red-500' : 'border-neutral-300'
            }`}
            placeholder="Miami"
          />
          {errors.town && <p className="mt-1 text-sm text-red-600">{errors.town}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="street" className="block text-sm font-medium text-neutral-700">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="123 Main St"
          />
        </div>

        <div>
          <label htmlFor="postal_code" className="block text-sm font-medium text-neutral-700">
            Postal Code
          </label>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="33101"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-neutral-700">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.description ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="Tell us about your project - what rooms need painting, preferred colors, timeline, etc."
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      {/* Image Upload */}
      <ImageUpload
        onImagesChange={(images) => setFormData((prev) => ({ ...prev, images }))}
        initialImages={formData.images}
      />

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        fullWidth
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Get My Free Quote'}
      </Button>

      <p className="text-center text-sm text-neutral-500">
        Or call us directly at{' '}
        <a href={`tel:${siteConfig.phone}`} className="font-medium text-purple-600 hover:text-purple-700">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  )
}
