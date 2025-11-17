import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a, button') ||
        target.closest('[data-cursor-hover]') ||
        target.closest('input, textarea, select')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseLeaveWindow = () => {
      setIsVisible(false)
    }

    const handleMouseEnterWindow = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Outer ring with border */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500/60 pointer-events-none z-[9999] mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              scale: isHovering ? 1.8 : isClicking ? 0.7 : 1,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
          {/* Inner dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
              scale: isHovering ? 1.8 : isClicking ? 0.5 : 1,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28,
              mass: 0.3,
            }}
          />
          {/* Hover glow effect */}
          {isHovering && (
            <motion.div
              className="fixed top-0 left-0 w-20 h-20 rounded-full bg-blue-500/30 pointer-events-none z-[9998] blur-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                x: mousePosition.x - 40,
                y: mousePosition.y - 40,
                opacity: 1,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export default CustomCursor

