"use client"
import type React from "react"
import { useState, useRef } from "react"

interface MagnifiableImageProps {
  src: string
  alt: string
  className?: string
  magnificationLevel?: number
}

export function MagnifiableImage({ src, alt, className = "", magnificationLevel = 2 }: MagnifiableImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Main Image */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200"
        style={{
          transform: isHovered ? `scale(${magnificationLevel})` : "scale(1)",
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />

      {/* Magnification Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: `${magnificationLevel * 100}%`,
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            opacity: 0.8,
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  )
}
