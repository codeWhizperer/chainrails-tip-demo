'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pos = { x: 0, y: 0 }
    const ring = { x: 0, y: 0 }
    let raf: number

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.x + 'px'
        dotRef.current.style.top = pos.y + 'px'
      }
      ring.x += (pos.x - ring.x) * 0.12
      ring.y += (pos.y - ring.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.x + 'px'
        ringRef.current.style.top = ring.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
