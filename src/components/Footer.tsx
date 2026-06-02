import { Github, Linkedin, Sparkles, Twitter, Youtube } from 'lucide-react'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'API Docs', href: '#' },
  { label: 'Changelog', href: '#' },
]

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="section-padding container-max py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Vid<span className="gradient-text">Forge</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              The AI-powered video creation platform that helps creators and
              businesses produce viral content in seconds.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/40 transition-all hover:border-white/[0.15] hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Stay Updated</h4>
            <p className="mb-4 text-sm text-white/40">
              Get the latest features and tips delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-purple/50"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} VidForge AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="transition-colors hover:text-white/60">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white/60">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white/60">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
