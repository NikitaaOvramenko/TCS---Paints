import type { QuoteFormData, FormErrors } from './types'

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone format (basic)
 */
function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, dashes, parentheses, and + sign
  const phoneRegex = /^[\d\s\-()+ ]{7,20}$/
  return phoneRegex.test(phone)
}

/**
 * Validate the quote form data
 */
export function validateQuoteForm(data: Partial<QuoteFormData>): FormErrors {
  const errors: FormErrors = {}

  // Required fields
  if (!data.name?.trim()) {
    errors.name = 'First name is required'
  }

  if (!data.lastname?.trim()) {
    errors.lastname = 'Last name is required'
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.workType?.trim()) {
    errors.workType = 'Please select a work type'
  }

  if (!data.service?.trim()) {
    errors.service = 'Please select a service'
  }

  if (!data.country?.trim()) {
    errors.country = 'Country is required'
  }

  if (!data.town?.trim()) {
    errors.town = 'City/Town is required'
  }

  if (!data.description?.trim()) {
    errors.description = 'Please describe your project'
  } else if (data.description.length < 10) {
    errors.description = 'Description must be at least 10 characters'
  }

  // Optional fields - no validation needed for:
  // - street
  // - postal_code

  return errors
}

/**
 * Check if form has any errors
 */
export function hasErrors(errors: FormErrors): boolean {
  return Object.values(errors).some((error) => error !== undefined)
}

/**
 * Get initial form values
 */
export function getInitialFormData(): QuoteFormData {
  return {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    workType: '',
    service: '',
    country: 'USA',
    town: '',
    street: '',
    postal_code: '',
    description: '',
    images: [],
  }
}
