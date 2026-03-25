import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-cubic',
      once: true,
      offset: 80,
    })
  }, [])
}