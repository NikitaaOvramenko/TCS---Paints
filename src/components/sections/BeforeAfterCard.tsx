'use client'

import { useState, useRef, useCallback } from 'react'

interface BeforeAfterCardProps {
  title: string
  category: string
  beforeImage: string
  afterImage: string
}

export default function BeforeAfterCard({ title, category, beforeImage, afterImage }: BeforeAfterCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0.5) // 0-1 ratio
  const [dragging, setDragging] = useState(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setValue(x / rect.width)
  }, [])

  const handleMouseDown = () => {
    setDragging(true)
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = 'white'
      circleRef.current.style.borderColor = 'black'
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = 'black'
      circleRef.current.style.borderColor = 'white'
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return
    e.preventDefault()
    updatePosition(e.clientX)
  }

  const handleTouchStart = () => {
    setDragging(true)
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = 'white'
      circleRef.current.style.borderColor = 'black'
    }
  }

  const handleTouchEnd = () => {
    setDragging(false)
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = 'black'
      circleRef.current.style.borderColor = 'white'
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return
    e.preventDefault()
    updatePosition(e.changedTouches[0].clientX)
  }

  const percentage = value * 100

  return (
    <div className="overflow-hidden rounded-xl bg-neutral-200 gallery-item">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before image (full background) */}
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* After image (clipped) */}
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
          style={{ left: `${percentage}%` }}
        />

        {/* Drag handle */}
        <div
          ref={circleRef}
          className="absolute z-20 w-8 h-8 rounded-full border-2 border-white bg-black -translate-x-1/2 -translate-y-1/2 touch-none transition-colors duration-200"
          style={{ left: `${percentage}%`, top: '50%' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Arrows */}
          <svg className="w-full h-full p-1" viewBox="0 0 24 24" fill="none">
            <path d="M8 12H16M8 12L10 9M8 12L10 15M16 12L14 9M16 12L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white" />
          </svg>
        </div>

        {/* Invisible wider touch area */}
        <div
          className="absolute top-0 bottom-0 w-12 -translate-x-1/2 z-10 touch-none"
          style={{ left: `${percentage}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        />

        {/* Labels */}
        <span className="absolute bottom-2 left-2 text-xs font-bold uppercase tracking-wider text-white bg-black/60 px-2 py-1 rounded z-10">Before</span>
        <span className="absolute bottom-2 right-2 text-xs font-bold uppercase tracking-wider text-white bg-black/60 px-2 py-1 rounded z-10">After</span>
      </div>

      <div className="bg-white px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-wide text-purple-600">
          {category}
        </span>
        <h3 className="mt-1 text-sm font-bold text-neutral-900">{title}</h3>
      </div>
    </div>
  )
}
