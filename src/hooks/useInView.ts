import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.3,
): { ref: React.RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, inView }
}
