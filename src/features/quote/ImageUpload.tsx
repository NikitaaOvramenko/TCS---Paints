'use client'

import { useState } from 'react'
import { uploadToS3 } from './uploadToS3'

interface UploadedImage {
  name: string
  previewUrl: string
}

interface ImageUploadProps {
  onImagesChange: (images: string[]) => void
  initialImages?: string[]
}

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic']

export function ImageUpload({ onImagesChange, initialImages = [] }: ImageUploadProps) {
  const [images, setImages] = useState<UploadedImage[]>(
    initialImages.map((name) => ({ name, previewUrl: '' }))
  )
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return `${file.name}: Invalid file type. Allowed: JPG, PNG, WebP, HEIC`
    }
    return null
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError(null)

    try {
      const newImages: UploadedImage[] = []

      for (const file of Array.from(files)) {
        const validationError = validateFile(file)
        if (validationError) {
          setError(validationError)
          continue
        }

        const previewUrl = URL.createObjectURL(file)

        try {
          const fileName = await uploadToS3(file)
          newImages.push({ name: fileName, previewUrl })
        } catch (err) {
          console.error('Upload failed for', file.name, err)
          URL.revokeObjectURL(previewUrl)
        }
      }

      if (newImages.length > 0) {
        const updated = [...images, ...newImages]
        setImages(updated)
        onImagesChange(updated.map((img) => img.name))
      }
    } catch (err) {
      console.error('Upload failed', err)
      setError('Failed to upload images. Please try again.')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const removeImage = (indexToRemove: number) => {
    const removed = images[indexToRemove]
    if (removed?.previewUrl) {
      URL.revokeObjectURL(removed.previewUrl)
    }
    const updated = images.filter((_, index) => index !== indexToRemove)
    setImages(updated)
    onImagesChange(updated.map((img) => img.name))
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-neutral-300">
        Upload Pictures (Optional)
      </label>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="image-upload"
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-900 hover:bg-neutral-800 hover:border-purple-500/50 transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-sm text-neutral-400">
              <span className="font-semibold text-neutral-300">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-neutral-500">PNG, JPG, WebP, HEIC</p>
          </div>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            multiple
            accept="image/png,image/jpeg,image/jpg,image/webp,image/heic"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>

      {uploading && (
        <div className="flex items-center gap-2 text-sm text-purple-400">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Uploading images...
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((img, index) => (
            <div
              key={`${img.name}-${index}`}
              className="relative group aspect-square rounded-lg border border-neutral-700 bg-neutral-900 overflow-hidden"
            >
              {img.previewUrl ? (
                <img
                  src={img.previewUrl}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-xs text-neutral-500 p-2 text-center">
                  {img.name}
                </div>
              )}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove image"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
