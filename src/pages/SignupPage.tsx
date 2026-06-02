import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Eye, EyeOff, Github, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/ui/Button'

const perks = [
  '14-day free trial',
  'No credit card required',
  '5 free AI videos to start',
]

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <AuthLayout
      title="Start creating for free"
      subtitle="Create your account and generate your first AI video in minutes."
    >
      <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
        {perks.map((perk) => (
          <span key={perk} className="flex items-center gap-1.5 text-xs text-white/50">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />
            {perk}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Creator"
            required
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/70">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (8+ characters)"
              required
              minLength={8}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-11 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2.5 text-sm text-white/50">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/[0.03] accent-accent-purple"
          />
          <span>
            I agree to the{' '}
            <a href="#" className="text-accent-purple hover:text-accent-purple/80">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-accent-purple hover:text-accent-purple/80">
              Privacy Policy
            </a>
          </span>
        </label>

        <Button type="submit" className="w-full">
          Start Free
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/[0.08]" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-surface px-3 text-white/40">or sign up with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]"
        >
          <Mail className="h-4 w-4" />
          Google
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </motion.button>
      </div>

      <p className="mt-8 text-center text-sm text-white/40">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-accent-purple hover:text-accent-purple/80">
          Log in
        </Link>
      </p>
    </AuthLayout>
  )
}
