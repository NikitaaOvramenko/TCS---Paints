/**
 * Quote form data type matching backend API contract
 * Endpoint: POST /api/email/form
 */
export interface QuoteFormData {
  name: string
  lastname: string
  email: string
  phone: string
  workType: string
  service: string[]
  country: string
  town: string
  street: string
  postal_code: string
  description: string
  images?: string[]
}

/**
 * Form field errors
 */
export interface FormErrors {
  [key: string]: string | undefined
}

/**
 * Form submission state
 */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export type Service = {
  name:string;
  isSelected:boolean;
}

/**
 * Available work types
 */
export const workTypes = [
  'Residential',
  'Commercial',
  'Industrial',
] as const

/**
 * Available services
 */
export const servicesInitial: Service[] = [
  {name:'Interior Painting',isSelected:false},
  {name:'Exterior Painting',isSelected:false},
  {name:'Deck & fence staining/painting',isSelected:false},
   {name:'Cabinet painting / refinishing',isSelected:false}
]  
