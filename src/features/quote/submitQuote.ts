import type { QuoteFormData } from './types'

/**
 * Backend API configuration
 * Update this when deploying to production
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
const QUOTE_ENDPOINT = '/api/email/form'

interface SubmitResult {
  success: boolean
  message: string
  data?: unknown
}

/**
 * Submit quote form to backend API
 */
export async function submitQuote(formData: QuoteFormData): Promise<SubmitResult> {
  try {
    const response = await fetch(`${API_BASE_URL}${QUOTE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      // Handle HTTP errors
      if (response.status === 400) {
        return {
          success: false,
          message: 'Please check your form inputs and try again.',
        }
      }
      if (response.status === 429) {
        return {
          success: false,
          message: 'Too many requests. Please wait a moment and try again.',
        }
      }
      if (response.status >= 500) {
        return {
          success: false,
          message: 'Server error. Please try again later.',
        }
      }
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }

    const data = await response.json()

    return {
      success: true,
      message: 'Your quote request has been submitted successfully!',
      data,
    }
  } catch (error) {
    // Handle network errors
    console.error('Quote submission error:', error)

    return {
      success: false,
      message: 'Unable to connect to the server. Please check your connection and try again.',
    }
  }
}
