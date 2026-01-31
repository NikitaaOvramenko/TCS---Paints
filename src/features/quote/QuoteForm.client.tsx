'use client'

import { useState } from 'react'
import type { QuoteFormData, FormErrors, FormStatus } from './types'
import { services } from './types'
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }))
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateQuoteForm(formData)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) {
      return
    }

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
      <div className="rounded-2xl border border-purple-500/30 bg-purple-950/50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
          <svg className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">Thank You!</h3>
        <p className="mt-2 text-purple-300">{submitMessage}</p>
        <p className="mt-4 text-sm text-neutral-400">
          We&apos;ll be in touch within 24 hours.
        </p>
        <button
          className="mt-6 rounded-lg border border-purple-500/50 px-6 py-2.5 text-sm font-medium text-purple-300 hover:bg-purple-500/10 transition-colors"
          onClick={() => setStatus('idle')}
        >
          Submit Another Quote
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error message */}
      {status === 'error' && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400">
          {submitMessage}
        </div>
      )}

      {/* Name fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
            First Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.name ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="John"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-neutral-300 mb-1.5">
            Last Name *
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.lastname ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="Doe"
          />
          {errors.lastname && <p className="mt-1 text-sm text-red-400">{errors.lastname}</p>}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.email ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.phone ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
        </div>
      </div>

      {/* City & Postal Code */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="town" className="block text-sm font-medium text-neutral-300 mb-1.5">
            City / Town *
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.town ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="Miami"
          />
          {errors.town && <p className="mt-1 text-sm text-red-400">{errors.town}</p>}
        </div>

        <div>
          <label htmlFor="street" className="block text-sm font-medium text-neutral-300 mb-1.5">
            Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="123 Main St"
          />
        </div>
      </div>

      <div>
        <label htmlFor="postal_code" className="block text-sm font-medium text-neutral-300 mb-1.5">
          Postal Code
        </label>
        <input
          type="text"
          id="postal_code"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:max-w-[50%]"
          placeholder="33101"
        />
      </div>

      {/* Service selection buttons */}
      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-3">
          Select Service Type *
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceSelect(service)}
              className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                formData.service === service
                  ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                  : 'border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-purple-500/50 hover:bg-neutral-800'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
        {errors.service && <p className="mt-2 text-sm text-red-400">{errors.service}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-1.5">
          What do you need painted? *
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className={`block w-full rounded-lg border bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.description ? 'border-red-500' : 'border-neutral-700'
          }`}
          placeholder="Tell us about your project - rooms, colors, timeline..."
        />
        {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
      </div>

      {/* Image Upload */}
      <ImageUpload
        onImagesChange={(images) => setFormData((prev) => ({ ...prev, images }))}
        initialImages={formData.images}
      />

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-purple-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-500 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>

      {/* Validation hint */}
      {Object.values(errors).some(Boolean) && (
        <p className="text-center text-sm text-red-400">
          Please fill in all required fields to submit.
        </p>
      )}
    </form>
  )
}
