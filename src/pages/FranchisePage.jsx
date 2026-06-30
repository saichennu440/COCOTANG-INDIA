import { motion } from "framer-motion"
import FranchiseForm from "../sections/FranchiseForm"

const whyChoose = [
  {
    title: "Growing Consumer Demand",
    description:
      "Consumers today are actively seeking natural beverages, refreshing alternatives and unique dessert experiences. Cocotang is positioned to serve this growing demand.",
  },
  {
    title: "Strong Brand Identity",
    description:
      "Built around the freshness and appeal of tender coconut, Cocotang offers a unique and memorable brand experience.",
  },
  {
    title: "Multiple Revenue Streams",
    description:
      "Generate revenue through beverages, ice creams, ice pops, desserts and seasonal products.",
  },
  {
    title: "Attractive Business Formats",
    description:
      "Choose from kiosk, retail outlet, distribution and mobile formats based on your investment capacity.",
  },
  {
    title: "Complete Business Support",
    description:
      "Our team assists franchise partners with setup, operations, product supply, branding and marketing support.",
  },
]

const franchiseModels = [
  {
    title: "Nano Franchise",
    image: "/images/nanostall.jpeg",
    description:
      "Ideal for individuals looking to start with a low investment.",
    points: [
      "Events",
      "Seasonal Sales",
      "Gated Community Events",
    ],
  },
  {
    title: "Micro Franchise",
    image: "/images/micro.jpeg",
    description:
      "A compact business model designed for entrepreneurs seeking a scalable opportunity with manageable investment.",
    points: [
      "Residential Communities",
      "Schools & Colleges",
      "Commercial Locations",
      "Small Retail Spaces",
    ],
  },
  {
    title: "Kiosk Franchise",
    image: "/images/kiosk.jpg",
    description:
      "A modern and attractive retail format designed for malls, food courts and busy commercial locations.",
    points: [
      "High Visibility",
      "Efficient Operations",
      "Strong Impulse Purchases",
      "Lower Operating Costs",
    ],
  },
  {
    title: "Retail Store Franchise",
    image: "/images/retail.jpeg",
    description:
      "A complete Cocotang experience offering beverages, desserts and premium ice creams under one roof.",
    points: [
      "Prime Commercial Locations",
      "Shopping Destinations",
      "High Footfall Markets",
    ],
  },
]

const supportData = [
  {
    title: "Brand Support",
    items: [
      "Brand identity",
      "Marketing materials",
      "Promotional campaigns",
    ],
  },
  {
    title: "Operational Support",
    items: [
      "Business setup guidance",
      "Standard operating procedures",
      "Team training",
    ],
  },
  {
    title: "Product Support",
    items: [
      "Product supply assistance",
      "New product introductions",
      "Quality standards",
    ],
  },
  {
    title: "Marketing Assistance",
    items: [
      "Digital marketing support",
      "Local promotional activities",
      "Campaign guidance",
    ],
  },
  {
    title: "Technology Support",
    items: [
      "Billing systems",
      "Operational tools",
      "Business management assistance",
    ],
  },
]

const partnerCriteria = [
  "Investment readiness and working capital availability",
  "Strong commitment to actively manage operations",
  "Ability to secure a suitable commercial location",
  "Customer-centric mindset",
  "Business and financial management skills",
  "Willingness to follow SOPs and brand standards",
  "Leadership ability to build and manage teams",
  "Sales and local marketing orientation",
  "Long-term business vision",
  "Integrity and professionalism",
  "Technology adoption mindset",
  "Growth ambition aligned with Cocotang's mission",
]

const journey = [
  "Submit Franchise Enquiry Form",
  "Discussion with Franchise Team",
  "Location Evaluation",
  "Business Plan & Approval",
  "Setup & Training",
  "Grand Launch",
]

export default function FranchisePage() {
  return (
    <div className="bg-[#0D0D0D] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <video
            autoPlay
                muted
                loop
                playsInline
                preload="auto"
          src="/images/hero-bg.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5A623] tracking-[0.3em] uppercase mb-6"
          >
            Franchise Opportunity
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold leading-tight mb-8"
          >
            Own The Future
            <br />
            <span className="text-[#F5A623]">
              Of Refreshment
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl text-white/90 mb-10"
          >
            Build a Profitable Business with Cocotang
          </motion.h2>

          <p className="max-w-4xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed">
            Cocotang is bringing the goodness of tender coconut beverages,
            natural fruit drinks and premium desserts to consumers across India.
            Whether you are a first-time business owner, investor, retailer or
            aspiring entrepreneur, Cocotang provides business models designed
            for different investment levels and market opportunities.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-20">
          Why Choose <span className="text-[#F5A623]">Cocotang?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#181818] border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#F5A623] mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FRANCHISE MODELS */}
      <section className="py-28 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-20">
            Franchise Models
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {franchiseModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818]"
              >
                <img
                  src={model.image}
                  className="w-full h-72 object-cover"
                  alt={model.title}
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#F5A623] mb-4">
                    {model.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-3">
                    {model.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <span className="text-[#F5A623]">✓</span>
                        <span className="text-white/80">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-20">
          What We Provide
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportData.map((support) => (
            <div
              key={support.title}
              className="bg-[#181818] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl text-[#F5A623] mb-6 font-bold">
                {support.title}
              </h3>

              <div className="space-y-3">
                {support.items.map((item) => (
                  <p key={item} className="text-white/70">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IDEAL PARTNER */}
      <section className="py-28 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-bold mb-16">
            Ideal Franchise Partner
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {partnerCriteria.map((item) => (
              <div
                key={item}
                className="bg-[#181818] border border-white/10 rounded-2xl p-6 flex gap-4"
              >
                <span className="text-[#F5A623] text-xl">✓</span>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-xl text-white/70">
            Prior experience in food and beverage is helpful but not mandatory.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-20">
          Your Journey With Cocotang
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {journey.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#181818] rounded-3xl p-8 border border-white/10 text-center"
            >
              <div className="text-6xl font-bold text-[#F5A623] mb-5">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 text-center">
        <img
          src="/images/growthstory.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">
            Join The Cocotang Growth Story
          </h2>

          <p className="text-white/70 text-xl leading-relaxed">
            We believe business growth happens through strong partnerships.
            By joining Cocotang, you become part of a brand committed to
            innovation, quality and customer satisfaction.
          </p>

          <p className="mt-8 text-2xl text-[#F5A623]">
            Take the first step towards owning your own Cocotang franchise today.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section id="franchise-form" className="max-w-5xl mx-auto py-28 px-6">
        <h2 className="text-5xl text-center font-bold mb-6">
          Request Franchise Information
        </h2>

        <p className="text-center text-white/60 mb-14">
          Fill in the enquiry form below and our franchise development team
          will contact you shortly.
        </p>

        <div className="bg-[#181818] rounded-3xl border border-white/10 p-8 md:p-12">
          <FranchiseForm />
        </div>
      </section>
    </div>
  )
}