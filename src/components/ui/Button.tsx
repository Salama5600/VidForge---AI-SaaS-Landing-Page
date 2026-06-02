import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  to?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  to,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50'

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'glass text-white hover:bg-white/[0.08] hover:border-white/[0.15] active:scale-[0.98]',
    ghost: 'text-white/70 hover:text-white hover:bg-white/[0.05]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    const isFullWidth = className.includes('w-full')
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        className={isFullWidth ? 'flex w-full' : 'inline-flex'}
      >
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
