import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Sparkles } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Enter Your Idea',
    description:
      'Describe your video concept in plain language. Add tone, style, and target platform preferences.',
    gradient: 'from-accent-purple to-violet-600',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Generates the Video',
    description:
      'Our AI writes the script, adds voiceover, edits footage, and creates captions — all in under 60 seconds.',
    gradient: 'from-accent-blue to-indigo-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Publish Everywhere',
    description:
      'Review, tweak if needed, then publish to all your platforms with one click. Track performance in real-time.',
    gradient: 'from-accent-cyan to-teal-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-card-glow" />

      <div className="container-max relative">
        <SectionHeading
          badge="How It Works"
          title="Three steps to viral content"
          subtitle="From blank page to published video in under a minute. No editing skills required."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <span className="mb-2 inline-block text-sm font-bold text-accent-purple">
                    Step {step.number}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.description}</p>
                </div>

                {/* Center icon */}
                <div className="relative z-10 flex shrink-0 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg shadow-accent-purple/20`}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
