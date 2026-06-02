import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen">
      {/* Left panel — branding */}
      <div className="relative hidden w-1/2 overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-surface to-accent-blue/10" />
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-purple/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-cyan/15 blur-[100px]" />

        <div className="relative z-10 p-10">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Vid<span className="gradient-text">Forge</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 px-10 pb-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md"
          >
            <p className="text-2xl font-semibold leading-snug text-white/90">
              "VidForge helped me go from 2 posts a week to daily viral content."
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-sm font-bold">
                SC
              </div>
              <div>
                <p className="text-sm font-medium">Sarah Chen</p>
                <p className="text-xs text-white/40">Content Creator · 2.1M followers</p>
              </div>
            </footer>
          </motion.blockquote>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex w-full flex-col lg:w-1/2">
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Vid<span className="gradient-text">Forge</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="mt-2 text-white/50">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
