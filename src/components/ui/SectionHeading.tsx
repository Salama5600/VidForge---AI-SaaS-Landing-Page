import { motion } from 'framer-motion'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-purple">
          {badge}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-white/60">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
