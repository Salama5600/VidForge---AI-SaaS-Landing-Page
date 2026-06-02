import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Film,
  Mic,
  Play,
  Sparkles,
  Wand2,
} from 'lucide-react'
import Button from './ui/Button'

const floatingItems = [
  { icon: Wand2, label: 'Script Generated', color: 'from-purple-500 to-violet-600', delay: 0 },
  { icon: Mic, label: 'Voice Added', color: 'from-blue-500 to-cyan-500', delay: 0.5 },
  { icon: Film, label: 'Video Ready', color: 'from-cyan-500 to-teal-500', delay: 1 },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent-purple/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent-cyan/10 blur-[80px]" />

      <div className="section-padding container-max relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-accent-purple" />
            <span className="text-white/70">Powered by next-gen AI models</span>
            <span className="rounded-full bg-accent-purple/20 px-2 py-0.5 text-xs font-medium text-accent-purple">
              New
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Create Viral Videos with{' '}
            <span className="gradient-text">AI in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-white/60 sm:text-xl"
          >
            Generate, edit, and publish professional short-form videos automatically
            using the power of AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" to="/signup">
              Start Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40"
          >
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-cyan" />
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl lg:mt-20"
        >
          <div className="gradient-border rounded-2xl shadow-glow-lg">
            <div className="overflow-hidden rounded-2xl bg-surface-raised">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex h-7 w-64 items-center justify-center rounded-lg bg-white/[0.04] text-xs text-white/30">
                  app.vidforge.ai/studio
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
                {/* Left panel - AI generation */}
                <div className="space-y-3 sm:col-span-1">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="mb-2 text-xs font-medium text-white/40">
                      AI PROMPT
                    </p>
                    <p className="text-sm text-white/80">
                      "Create a 60s viral TikTok about morning productivity hacks"
                    </p>
                  </div>
                  <div className="space-y-2">
                    {floatingItems.map((item) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + item.delay, duration: 0.4 }}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${item.color}`}
                        >
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium">{item.label}</p>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{
                                delay: 1 + item.delay,
                                duration: 1.5,
                                ease: 'easeOut',
                              }}
                              className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                            />
                          </div>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-accent-cyan opacity-0 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right panel - Video preview */}
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-surface-card to-surface-raised sm:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                    >
                      <Play className="h-7 w-7 fill-white text-white" />
                    </motion.div>
                  </div>
                  {/* Fake video timeline */}
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="mb-2 flex items-center justify-between text-xs text-white/60">
                      <span>0:00</span>
                      <span className="rounded bg-accent-purple/20 px-2 py-0.5 text-accent-purple">
                        AI Generated
                      </span>
                      <span>0:58</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '72%' }}
                        transition={{ delay: 1.5, duration: 2, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan"
                      />
                    </div>
                  </div>
                  {/* Floating stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute right-4 top-4 rounded-lg border border-white/[0.1] bg-black/40 px-3 py-2 backdrop-blur-md"
                  >
                    <p className="text-xs text-white/50">Viral Score</p>
                    <p className="text-lg font-bold text-accent-cyan">94/100</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow beneath mockup */}
          <div className="absolute -bottom-8 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-accent-purple/20 blur-[60px]" />
        </motion.div>
      </div>
    </section>
  )
}
