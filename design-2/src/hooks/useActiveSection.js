import { useEffect, useState } from 'react'

const NAV_OFFSET = 83

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY
      const marker = scrollY + NAV_OFFSET + window.innerHeight * 0.12

      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) {
          current = id
        }
      }

      const docHeight = document.documentElement.scrollHeight
      if (scrollY + window.innerHeight >= docHeight - 60) {
        current = sectionIds[sectionIds.length - 1]
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return active
}
