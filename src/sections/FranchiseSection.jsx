import { useState } from "react"
import { motion } from "framer-motion"
import FranchiseModal from "./FranchiseModal"
import { Link } from "react-router-dom"

import {
  TrendingUp,
  BadgeCheck,
  Wallet,
  Store,
  Handshake
} from "lucide-react"

const reasons = [
  {
    title: "Growing Consumer Demand",
    desc: "Consumers are increasingly choosing healthier beverages and premium dessert experiences over traditional options.",
    icon: TrendingUp,
    color: "#2B7A4B",
  },
  {
    title: "Strong Brand Identity",
    desc: "Built around the freshness and appeal of tender coconut, Cocotang creates a memorable customer experience.",
    icon: BadgeCheck,
    color: "#F5A623",
  },
  {
    title: "Multiple Revenue Streams",
    desc: "Generate income from beverages, desserts, ice creams, fruit pops and seasonal products.",
    icon: Wallet,
    color: "#D42B2B",
  },
  {
    title: "Flexible Business Formats",
    desc: "Choose from kiosk, retail outlet, distribution and mobile models based on investment capacity.",
    icon: Store,
    color: "#D42B2B",
  },
  {
    title: "Complete Business Support",
    desc: "Receive assistance with setup, operations, marketing, product supply and business growth.",
    icon: Handshake,
    color: "#F5A623",
  },
]

const stats = [
  {
    value: "4",
    label: "Franchise Models",
  },
  {
    value: "5",
    label: "Support Systems",
  },
  {
    value: "6",
    label: "Launch Steps",
  },
  {
    value: "∞",
    label: "Growth Potential",
  },
]

const models = [
  "Nano",
  "Micro",
  "Kiosk",
  "Retail Store",
]

export default function FranchiseSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative py-32 px-6 bg-[#111111] overflow-hidden">

        {/* Background Glow */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7BAF3A]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A623]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">

          {/* Top Layout */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F5A623] uppercase tracking-[0.35em] text-sm">
                Franchise Opportunity
              </span>

              <h2 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-[1.05]">
                Own The Future
                <br />
                <span className="text-[#F5A623]">
                  Of Refreshment
                </span>
              </h2>

              <h3 className="text-2xl text-white/90 mt-8">
                Build a Profitable Business with Cocotang
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mt-8">
                Join one of India's emerging natural beverage and premium
                dessert brands. From tender coconut beverages to premium
                ice creams and fruit pops, Cocotang offers scalable
                franchise opportunities for entrepreneurs, investors and
                retailers.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#D42B2B] hover:bg-[#b52020] px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105"
                >
                  Request Franchise Information
                </button>

                <Link
                  to="/franchise"
                  className="border border-white/20 px-8 py-4 rounded-full text-white hover:border-[#F5A623] hover:text-[#F5A623] transition-all"
                >
                  Explore Franchise Models
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/franchise.jpeg"
                alt="Cocotang Franchise"
                className="rounded-[40px] w-full h-[650px] object-cover"
              />

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10">
                <p className="text-[#F5A623] uppercase tracking-[0.3em] text-sm">
                  Pan India Expansion
                </p>

                <h3 className="text-4xl font-bold text-white mt-3">
                  Become Part Of
                  <br />
                  The Growth Story
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#181818] border border-white/10 rounded-3xl p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-[#F5A623]">
                  {stat.value}
                </h3>

                <p className="text-white/70 mt-3">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Reasons */}
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-24">
            {reasons.map((reason, index) => {
                const Icon = reason.icon

                return (
                <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                    y: -12,
                    scale: 1.02,
                    }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#181818] p-8"
                >
                    {/* Top Accent Line */}
                    <div
                    className="absolute left-0 top-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{
                        backgroundColor: reason.color,
                    }}
                    />

                    {/* Glow */}
                    <div
                    className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                        backgroundColor: reason.color,
                    }}
                    />

                    <div className="relative z-10 flex flex-col h-full">

                    {/* Icon */}
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                        style={{
                        backgroundColor: `${reason.color}20`,
                        }}
                    >
                        <Icon
                        size={30}
                        style={{
                            color: reason.color,
                        }}
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-5 min-h-[64px] flex items-start">
                        {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed flex-grow">
                        {reason.desc}
                    </p>

                    {/* Footer */}
                    {/* <div className="flex items-center gap-3 mt-8 text-white/40 group-hover:text-white transition-colors">
                        <span className="text-sm tracking-wide uppercase">
                        Learn More
                        </span>

                        <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform group-hover:translate-x-2"
                        >
                        <path
                            d="M5 12H19M13 6L19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div> */}
                    </div>
                </motion.div>
                )
            })}
            </div>

          {/* Franchise Models Preview */}
          <div className="mt-24 text-center">
            <p className="text-[#F5A623] uppercase tracking-[0.3em] mb-6">
              Business Formats
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              {models.map((model) => (
                <div
                  key={model}
                  className="px-8 py-4 bg-[#181818] border border-white/10 rounded-full text-white hover:border-[#F5A623] transition-all"
                >
                  {model} Franchise
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FranchiseModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}