import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass rounded-2xl p-6 transition-colors duration-300 ${
        hover ? 'hover:border-white/[0.15] hover:bg-white/[0.05]' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
