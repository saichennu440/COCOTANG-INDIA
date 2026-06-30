import { useRef } from 'react'
import { Link } from "react-router-dom"
import { motion, useInView } from 'framer-motion'
import {
  Leaf,
  IceCream,
  TrendingUp,
  Store,
  HeartHandshake,
  CircleDashed,
} from 'lucide-react'

const highlights = [
  {
    icon: CircleDashed,
    title: 'Real Tender Coconut Goodness',
  },
  {
    icon: Leaf,
    title: 'Natural Fruit Ingredients',
  },
  {
    icon: IceCream,
    title: 'Exciting Product Range',
  },
  {
    icon: TrendingUp,
    title: 'Fast Growing Brand',
  },
  {
    icon: Store,
    title: 'Franchise Opportunities',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Centric Approach',
  },
]
export default function WhyCocotang() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="why-cocotang"
      ref={ref}
      className="relative py-28 px-6 bg-[#111111] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7BAF3A]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A623]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div>

          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] uppercase tracking-[0.35em] text-xs font-semibold">
              Why Cocotang?
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            FOOD THAT FEELS
            <br />
            <span className="text-[#F5A623]">
              CLOSER TO NATURE
            </span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-white/75 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <p>
              Every Cocotang product begins with one question:
            </p>

            <div className="border-l-4 border-[#F5A623] pl-6 py-2">
              <p className="text-2xl md:text-3xl text-white font-semibold italic leading-relaxed">
                "Would we proudly serve this to our own family?"
              </p>
            </div>

            <p>
              If the answer isn't yes, we won't make it.
            </p>

            <p>
              That's why here at Cocotang we carefully select the
              ingredients that nature has gifted us, avoid artificial
              preservatives and unnecessary additives, and focus on
              preserving natural taste through thoughtful and intelligent
              processing.
            </p>

            <p>
              The result is food that feels closer to nature while fitting
              effortlessly into your busy day.
            </p>

            <p className="text-white font-medium text-xl">
              Because convenience should never mean compromise.
            </p>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 mt-10 bg-[#D42B2B] px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
          >
            Explore Products
          </a>
        </motion.div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[32px] h-[600px] border border-white/10">
            <img
              src="/images/whychoose.jpeg"
              alt="Why Cocotang"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Trust Badge */}
            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5">
              <p className="text-4xl font-bold text-[#F5A623]">
                100%
              </p>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Natural Focus
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5">
              <p className="text-4xl font-bold text-[#7BAF3A]">
                0
              </p>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Artificial Preservatives
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-[#F5A623]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#F5A623]" />
                  </div>

                  <p className="text-white font-medium leading-relaxed">
                    {item.title}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}