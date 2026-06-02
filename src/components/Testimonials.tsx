import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator · 2.1M followers',
    avatar: 'SC',
    avatarGradient: 'from-pink-500 to-rose-600',
    content:
      'VidForge cut my video production time from 4 hours to 15 minutes. I went from posting twice a week to daily, and my engagement tripled.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Marketing Director · GrowthLab',
    avatar: 'MW',
    avatarGradient: 'from-blue-500 to-indigo-600',
    content:
      'Our team produces 10x more video content now. The AI voiceovers are indistinguishable from real voice talent, and the analytics help us optimize every post.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder · StartupStudio',
    avatar: 'ER',
    avatarGradient: 'from-violet-500 to-purple-600',
    content:
      'As a non-creative founder, I never thought I could make engaging video content. VidForge changed that completely. Our LinkedIn videos now get 50K+ views each.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading
          badge="Testimonials"
          title="Loved by creators worldwide"
          subtitle="Join thousands of creators and businesses who are growing faster with AI-powered video."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <GlassCard className="relative h-full">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-white/[0.06]" />

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarGradient} text-sm font-bold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
