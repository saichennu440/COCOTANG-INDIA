import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Priya Ramesh',
    role: 'Nutritionist, Chennai',
    avatar: 'PR',
    color: '#D42B2B',
    rating: 5,
    text: "I recommend Cocotang to all my clients as a post-workout drink. The Bliss Mango is perfect — real coconut water with actual mango pulp. No gimmicks, just real ingredients. Finally, a beverage I can stand behind completely.",
    flavour: 'Bliss Mango',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Fitness Enthusiast, Hyderabad',
    avatar: 'AM',
    color: '#F5A623',
    rating: 5,
    text: "The Red Queen is genuinely mind-blowing. I was skeptical about coconut-pomegranate but after one bottle I was hooked. It tastes exactly like what it says — real pomegranate, real coconut. Nothing artificial.",
    flavour: 'Red Queen',
  },
  {
    id: 3,
    name: 'Sneha Kulkarni',
    role: 'Food Blogger, Pune',
    avatar: 'SK',
    color: '#2B7A4B',
    rating: 5,
    text: "Hangocure is a masterpiece of functional beverages. The vetiver and pink salt combination with coconut water is genius — it's the only thing that actually works after a long night. I keep a case at home permanently.",
    flavour: 'Hangocure',
  },
  {
    id: 4,
    name: 'Vikram Nair',
    role: 'Café Owner, Kochi',
    avatar: 'VN',
    color: '#8B6914',
    rating: 5,
    text: "We serve Cocotang at our café and the response has been extraordinary. The Cashew Vanilla is our top seller — customers can't believe something this creamy and rich is just coconut pulp, cashews, and vanilla. Absolutely premium.",
    flavour: 'Cashew Vanilla',
  },
  {
    id: 5,
    name: 'Divya Subramanian',
    role: 'Yoga Instructor, Bangalore',
    avatar: 'DS',
    color: '#7B4F2E',
    rating: 5,
    text: "I've tried every coconut water brand in the market. Cocotang is in a different league. The freshness is unmistakable — you can taste that it hasn't been heat-treated. The Coco Chikoo is especially divine.",
    flavour: 'Coco Chikoo',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true })

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section id="testimonials" className="py-32 px-6 bg-[#111111] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,43,43,0.06) 0%, transparent 70%)'
      }} />

      <div className="max-w-5xl mx-auto" ref={titleRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <div className="w-10 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.3em] uppercase">What People Say</span>
            <div className="w-10 h-px bg-[#F5A623]" />
          </motion.div>
          <motion.h2
            className="font-display text-6xl md:text-7xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            REAL REVIEWS
          </motion.h2>
        </div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="glass rounded-3xl p-10 md:p-16 border border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              {/* Accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
                style={{ backgroundColor: current.color }}
              />
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: current.color }}
              />

              {/* Quote mark */}
              <div className="font-display text-8xl text-[#D42B2B]/30 leading-none mb-4 -mt-4">"</div>

              <p className="text-white/85 text-lg md:text-xl font-accent italic leading-relaxed mb-8">
                {current.text}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: current.color }}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{current.name}</p>
                    <p className="text-white/40 text-sm">{current.role}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating count={current.rating} />
                  <span className="text-xs text-white/30">via {current.flavour}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-8 h-2 bg-[#D42B2B]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#D42B2B] flex items-center justify-center text-white hover:bg-[#b52020] transition-all"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex gap-4 mt-10 overflow-x-auto pb-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                i === active
                  ? 'border-[#D42B2B] bg-[#D42B2B]/10'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-semibold whitespace-nowrap">{t.name}</p>
                <p className="text-white/40 text-xs whitespace-nowrap">{t.flavour}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
