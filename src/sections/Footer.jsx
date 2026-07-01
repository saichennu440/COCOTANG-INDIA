import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Franchise', href: '/franchise' },
  { label: 'Products', href: '#products' },
  { label: 'Store Formats', href: '#formats' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const flavours = [
  'Red Queen', 'Bliss Mango', 'Hangocure', 'Cashew Vanilla',
  'Coco Chikoo', 'Coconut Juice', 'Coco Mocha', 'Sitafal Pulp Shake',
  'Kesar Badam', 'Choco Almond',
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Top CTA strip */}
      <div className="bg-[#D42B2B] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl text-white">READY TO TASTE THE DIFFERENCE?</p>
            <p className="text-white/70 text-sm font-body">No preservatives. No compromises. Just coconut.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-[#D42B2B] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#F5A623] transition-colors duration-300"
          >
            Order Now →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="Cocotang" className="w-12 h-12 object-contain rounded-xl" />
              <div>
                <p className="font-display text-xl text-white">COCOTANG</p>
                <p className="text-[9px] text-white/30 tracking-[0.3em] uppercase">India</p>
              </div>
            </div>
            <p className="text-white/45 text-sm font-body leading-relaxed mb-6">
              Premium tender coconut beverages. Raw, unprocessed, and alive with real flavour — straight from the coast to you.
            </p>
            <div className="flex gap-4">
              {['IG', 'WA', 'FB'].map((s) => (
                 <a
                    key={s}
                    href={
                      s === 'IG'
                        ? 'https://www.instagram.com/cocotangindia/'
                        : s === 'WA'
                        ? 'https://wa.me/919032191010'
                        : 'https://www.facebook.com/COCOTANGINDIA/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-[#D42B2B]/40 transition-all text-xs font-bold border border-white/5"
                  >
                    {s}
                  </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#F5A623] text-xs tracking-[0.25em] uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 hover:text-[#F5A623]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Flavours */}
          <div>
            <p className="text-[#F5A623] text-xs tracking-[0.25em] uppercase mb-5">Our Flavours</p>
            <ul className="space-y-3">
              {flavours.map((f) => (
                <li key={f}>
                  <a href="#products" className="text-white/45 hover:text-white text-sm transition-colors hover:text-[#F5A623]">
                    {f}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#F5A623] text-xs tracking-[0.25em] uppercase mb-5">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@cocotang.in" className="text-white/70 hover:text-white text-sm transition-colors">
                  contactcocotang@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+919032191010" className="text-white/70 hover:text-white text-sm transition-colors">
                  +91 90321 91010
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Availability</p>
                <p className="text-white/70 text-sm">Delivery in Hyderabad </p>
              </div>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-1">Hours</p>
                <p className="text-white/70 text-sm">Mon – Sat, 10am – 7pm IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-body">
            © {new Date().getFullYear()} Cocotang India. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D42B2B] animate-pulse" />
            <p className="text-white/25 text-xs">100% Natural · No Preservatives · Consume Fresh</p>
          </div>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none pb-0">
        <p className="font-display text-[8rem] md:text-[14rem] text-white/[0.018] leading-none select-none">
          COCOTANG
        </p>
      </div>
    </footer>
  )
}
