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
    <div className="gallery-item border border-neutral-900/10 bg-neutral-100">
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
          className="absolute top-0 bottom-0 z-10 w-px bg-white"
          style={{ left: `${percentage}%` }}
        />

        {/* Drag handle */}
        <div
          ref={circleRef}
          className="absolute z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 touch-none rounded-none border border-white bg-neutral-950 transition-colors duration-200"
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
        <span className="eyebrow absolute bottom-0 left-0 z-10 bg-neutral-950/70 px-3 py-2 text-white">Before</span>
        <span className="eyebrow absolute right-0 bottom-0 z-10 bg-neutral-950/70 px-3 py-2 text-white">After</span>
      </div>

      <div className="border-t border-neutral-900/10 px-5 py-5">
        <span className="eyebrow text-purple-700">{category}</span>
        <h3 className="mt-2 text-lg font-normal tracking-[-0.01em] text-neutral-900">
          {title}
        </h3>
      </div>
    </div>
  )
}
