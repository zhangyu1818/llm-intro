import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.3,
): { inView: boolean; ref: React.RefObject<null | T>; } {
  const ref = useRef<null | T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {return}
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {setInView(true)}
      },
      { threshold },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { inView, ref }
}
