import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

const plans = [
  {
    name: 'Starter',
    price: 19,
    description: 'Perfect for solo creators getting started with AI video.',
    features: [
      '20 AI videos per month',
      '5 voice options',
      '720p export quality',
      'Basic captions',
      '2 platform connections',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 49,
    description: 'For serious creators who want to scale their content.',
    features: [
      '100 AI videos per month',
      '50+ premium voices',
      '4K export quality',
      'Animated smart captions',
      'All platform connections',
      'Analytics dashboard',
      'Priority support',
      'Custom brand kit',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    price: 99,
    description: 'For teams and agencies managing multiple brands.',
    features: [
      'Unlimited AI videos',
      'Voice cloning',
      '4K + HDR export',
      'Team collaboration (5 seats)',
      'White-label exports',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent" />

      <div className="container-max relative">
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free for 14 days. No credit card required. Upgrade when you're ready to scale."
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 lg:p-8 ${
                plan.highlighted
                  ? 'gradient-border bg-surface-raised shadow-glow-lg scale-[1.02]'
                  : 'glass'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-white/40">/month</span>
              </div>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="mb-8 w-full"
                to="/signup"
              >
                {plan.highlighted ? 'Start Free Trial' : 'Get Started'}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? 'text-accent-purple' : 'text-accent-cyan'
                      }`}
                    />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
