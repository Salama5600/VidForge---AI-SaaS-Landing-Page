import { motion } from 'framer-motion'
import {
  BarChart3,
  Captions,
  Mic,
  PenLine,
  Scissors,
  Share2,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

const features = [
  {
    icon: PenLine,
    title: 'AI Script Generation',
    description:
      'Turn any idea into a compelling, platform-optimized script in seconds with our advanced language models.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    icon: Mic,
    title: 'AI Voiceovers',
    description:
      'Choose from 50+ natural-sounding voices in 30 languages. Clone your own voice for brand consistency.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Scissors,
    title: 'Auto Video Editing',
    description:
      'AI automatically cuts, transitions, and adds B-roll, music, and effects to create polished videos.',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Share2,
    title: 'One-Click Publishing',
    description:
      'Publish directly to TikTok, YouTube Shorts, Instagram Reels, and LinkedIn with optimized formats.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Captions,
    title: 'Smart Captions',
    description:
      'Auto-generated, animated captions with perfect timing. Boost engagement by up to 80% on muted views.',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Track views, engagement, and viral potential across all platforms from one unified dashboard.',
    gradient: 'from-teal-500 to-cyan-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading
          badge="Features"
          title="Everything you need to go viral"
          subtitle="Powerful AI tools that handle the entire video creation pipeline — from idea to published content."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="group h-full">
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
