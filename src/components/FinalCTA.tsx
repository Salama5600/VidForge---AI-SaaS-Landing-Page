import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section className="section-padding py-24 lg:py-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/10 to-accent-cyan/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 glass" />

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/30"
            >
              <Sparkles className="h-7 w-7 text-white" />
            </motion.div>

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Grow Faster with{' '}
              <span className="gradient-text">AI?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/60">
              Join 10,000+ creators who are already making viral content with
              VidForge. Start your free trial today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" to="/signup">
                Start Creating Today
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/30">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
