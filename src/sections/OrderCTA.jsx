import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const channels = [
  { icon: '📦', label: 'Bulk & Wholesale', desc: 'For retailers, cafés, and distributors' },
  { icon: '🎉', label: 'Events & Catering', desc: 'Corporate, weddings, and private events' },
  { icon: '🏪', label: 'Retail Enquiry', desc: 'Stock Cocotang at your outlet' },
  { icon: '🧃', label: 'Personal Order', desc: 'Regular supply for home or office' },
]

export default function OrderCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-[#0D0D0D] relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <p className="font-display text-[20rem] text-white/[0.015] leading-none select-none">ORDER</p>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(212,43,43,0.12) 0%, transparent 70%)'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <div className="w-10 h-px bg-[#F5A623]" />
            <span className="text-[#F5A623] text-xs tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="w-10 h-px bg-[#F5A623]" />
          </motion.div>

          <motion.h2
            className="font-display text-6xl md:text-8xl text-white leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            ORDER YOUR<br />
            <span className="text-gradient-gold">COCOTANG</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-white/50 max-w-lg mx-auto font-body"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you're ordering for yourself, your café, or your event — we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – channels */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl text-white mb-8">HOW WE WORK WITH YOU</h3>

            <div className="space-y-4 mb-10">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.label}
                  className="flex items-center gap-4 glass rounded-xl p-5 border border-white/5 hover:border-[#D42B2B]/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <span className="text-2xl">{ch.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{ch.label}</p>
                    <p className="text-white/40 text-sm">{ch.desc}</p>
                  </div>
                  <div className="ml-auto text-[#D42B2B] opacity-50">→</div>
                </motion.div>
              ))}
            </div>

            {/* Quick contact info */}
            <div className="glass-red rounded-2xl p-6 border border-[#D42B2B]/20">
              <p className="text-[#F5A623] text-xs tracking-widest uppercase mb-4">Direct Contact</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#D42B2B]">📧</span>
                  <span className="text-white/80 text-sm">contactcocotang@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#D42B2B]">📱</span>
                  <span className="text-white/80 text-sm">+91 90321 91010</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#D42B2B]">📍</span>
                  <span className="text-white/80 text-sm">Delivery in Hyderabad</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {['Instagram', 'WhatsApp', 'Facebook'].map((s) => (
                  <a
                    key={s}
                    href={
                      s === 'Instagram'
                        ? 'https://www.instagram.com/cocotangindia/'
                        : s === 'WhatsApp'
                        ? 'https://wa.me/919032191010'
                        : 'https://www.facebook.com/COCOTANGINDIA/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white text-sm transition-colors hover:text-[#F5A623]"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-10 glass rounded-3xl border border-[#D42B2B]/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-[#D42B2B]/20 flex items-center justify-center text-4xl mb-6">
                  🥥
                </div>
                <h3 className="font-display text-4xl text-white mb-3">YOU'RE IN!</h3>
                <p className="text-white/60 font-body">
                  Thanks for reaching out. Our team will get back to you within 24 hours. Get ready for the freshest coconut experience of your life.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#F5A623] text-sm hover:underline"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 border border-white/10 space-y-5"
              >
                <h3 className="font-display text-2xl text-white mb-2">SEND AN ENQUIRY</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D42B2B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D42B2B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D42B2B] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">Enquiry Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D42B2B] transition-colors"
                  >
                    <option value="" disabled>Select type...</option>
                    <option>Personal Order</option>
                    <option>Bulk / Wholesale</option>
                    <option>Events & Catering</option>
                    <option>Retail Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need, your quantity, location, preferred flavours..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D42B2B] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#D42B2B] hover:bg-[#b52020] text-white font-semibold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/40"
                  whileTap={{ scale: 0.98 }}
                >
                  Send Enquiry →
                </motion.button>

                <p className="text-center text-white/25 text-xs">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
