import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'

const faqs = [
  {
    question: 'How does the AI video generation work?',
    answer:
      'Simply describe your video idea in natural language. Our AI analyzes your prompt, generates an optimized script, selects appropriate visuals, adds AI voiceover, creates animated captions, and assembles everything into a polished video — all in under 60 seconds.',
  },
  {
    question: 'What platforms can I publish to?',
    answer:
      'VidForge supports direct publishing to TikTok, YouTube Shorts, Instagram Reels, LinkedIn, Twitter/X, and Facebook. Each video is automatically optimized for the target platform\'s format, aspect ratio, and best practices.',
  },
  {
    question: 'Can I use my own voice?',
    answer:
      'Yes! Pro and Business plans include voice cloning. Upload a few minutes of your voice samples, and our AI creates a digital clone that sounds just like you. Perfect for maintaining brand consistency across all your content.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Absolutely. Every plan includes a 14-day free trial with full access to all features. No credit card required to start. You can create up to 5 videos during the trial period.',
  },
  {
    question: 'What video quality can I export?',
    answer:
      'Starter plans export in 720p HD. Pro plans support up to 4K Ultra HD. Business plans include 4K + HDR export for the highest quality output. All exports are watermark-free on paid plans.',
  },
  {
    question: 'Can I edit the AI-generated videos?',
    answer:
      'Yes. After generation, you can fine-tune every aspect — edit the script, swap voiceovers, adjust timing, change captions, replace B-roll, and modify transitions. Our editor gives you full creative control.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding py-24 lg:py-32">
      <div className="container-max mx-auto max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about VidForge AI."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass overflow-hidden rounded-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="pr-4 text-sm font-medium sm:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-white/40" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="border-t border-white/[0.06] px-5 pb-5 pt-3">
                      <p className="text-sm leading-relaxed text-white/50">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
