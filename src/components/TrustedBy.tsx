import { motion } from 'framer-motion'

const logos = [
  { name: 'TechCrunch', abbr: 'TC' },
  { name: 'Forbes', abbr: 'F' },
  { name: 'Product Hunt', abbr: 'PH' },
  { name: 'Creator Lab', abbr: 'CL' },
  { name: 'MediaFlow', abbr: 'MF' },
  { name: 'ViralCo', abbr: 'VC' },
]

export default function TrustedBy() {
  return (
    <section className="border-y border-white/[0.06] py-16">
      <div className="section-padding container-max">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-white/30"
        >
          Trusted by 10,000+ creators and companies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-2.5 opacity-40 transition-opacity hover:opacity-70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-sm font-bold text-white/60 transition-colors group-hover:border-white/[0.2] group-hover:text-white/80">
                {logo.abbr}
              </div>
              <span className="hidden text-sm font-semibold text-white/50 sm:block">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
