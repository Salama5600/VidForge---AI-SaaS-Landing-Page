import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Eye,
  Film,
  Play,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const stats = [
  {
    label: 'Total Views',
    value: '2.4M',
    change: '+34%',
    icon: Eye,
    color: 'text-accent-purple',
  },
  {
    label: 'Videos Created',
    value: '847',
    change: '+12%',
    icon: Film,
    color: 'text-accent-blue',
  },
  {
    label: 'Avg. Engagement',
    value: '8.2%',
    change: '+28%',
    icon: TrendingUp,
    color: 'text-accent-cyan',
  },
  {
    label: 'Followers Gained',
    value: '45.2K',
    change: '+56%',
    icon: Users,
    color: 'text-emerald-400',
  },
]

const recentVideos = [
  { title: 'Morning Routine Hacks', views: '124K', platform: 'TikTok', score: 92 },
  { title: 'AI Tools for Creators', views: '89K', platform: 'YouTube', score: 87 },
  { title: 'Productivity Tips 2026', views: '67K', platform: 'Reels', score: 78 },
  { title: 'Startup Growth Secrets', views: '45K', platform: 'LinkedIn', score: 85 },
]

const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88]

export default function DemoDashboard() {
  return (
    <section className="section-padding py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading
          badge="Dashboard"
          title="Your command center for content"
          subtitle="Track performance, manage videos, and optimize your content strategy — all in one place."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-border overflow-hidden rounded-2xl shadow-glow"
        >
          <div className="bg-surface-raised p-4 sm:p-6 lg:p-8">
            {/* Stats row */}
            <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="flex items-center text-xs font-medium text-emerald-400">
                      <ArrowUpRight className="h-3 w-3" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {/* Chart */}
              <div className="glass rounded-xl p-4 lg:col-span-3">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Views Over Time</p>
                    <p className="text-xs text-white/40">Last 30 days</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-lg bg-white/[0.04] p-1">
                    {['7D', '30D', '90D'].map((period, i) => (
                      <button
                        key={period}
                        className={`rounded-md px-2.5 py-1 text-xs transition-colors ${
                          i === 1
                            ? 'bg-accent-purple/20 text-accent-purple'
                            : 'text-white/40 hover:text-white/60'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex h-40 items-end gap-1.5 sm:gap-2">
                  {chartBars.map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent-purple/60 to-accent-blue/40"
                    />
                  ))}
                </div>
              </div>

              {/* AI Generation History */}
              <div className="glass rounded-xl p-4 lg:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent-cyan" />
                  <p className="text-sm font-medium">AI Generation History</p>
                </div>
                <div className="space-y-3">
                  {[
                    { action: 'Script generated', time: '2 min ago', status: 'done' },
                    { action: 'Voiceover added', time: '1 min ago', status: 'done' },
                    { action: 'Video rendered', time: 'Just now', status: 'done' },
                    { action: 'Publishing to TikTok', time: 'In progress', status: 'active' },
                  ].map((item) => (
                    <div
                      key={item.action}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.status === 'active'
                              ? 'animate-pulse bg-accent-cyan'
                              : 'bg-emerald-400'
                          }`}
                        />
                        <span className="text-white/70">{item.action}</span>
                      </div>
                      <span className="text-white/30">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Videos Table */}
            <div className="mt-4 glass rounded-xl p-4">
              <p className="mb-4 text-sm font-medium">Recent Videos</p>
              <div className="space-y-2">
                {recentVideos.map((video) => (
                  <div
                    key={video.title}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/[0.03]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20">
                      <Play className="h-4 w-4 text-white/60" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{video.title}</p>
                      <p className="text-xs text-white/40">{video.platform}</p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <p className="text-sm font-medium">{video.views}</p>
                      <p className="text-xs text-white/40">views</p>
                    </div>
                    <div className="rounded-full bg-accent-cyan/10 px-2.5 py-1 text-xs font-medium text-accent-cyan">
                      {video.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
