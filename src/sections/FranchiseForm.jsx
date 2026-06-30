import { useState } from "react"

export default function FranchiseForm({ compact = false }) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    const response = await fetch(
      "https://formspree.io/f/YOUR_FORMSPREE_ID",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    )

    setLoading(false)

    if (response.ok) {
      setSubmitted(true)
      e.target.reset()
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-3xl text-[#F5A623] font-bold mb-4">
          Thank You!
        </h3>

        <p className="text-white/70">
          Our franchise development team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5A623]"
        />

        <input
          type="tel"
          name="mobile"
          required
          placeholder="Mobile Number"
          className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5A623]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5A623]"
        />

        <input
          type="text"
          name="city"
          required
          placeholder="City"
          className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5A623]"
        />
      </div>

      <select
        name="investment"
        required
        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white"
      >
        <option value="">Investment Capacity</option>
        <option>Below ₹5 Lakhs</option>
        <option>₹5 - ₹10 Lakhs</option>
        <option>₹10 - ₹20 Lakhs</option>
        <option>₹20 - ₹50 Lakhs</option>
        <option>₹50 Lakhs+</option>
      </select>

      <select
        name="model"
        required
        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white"
      >
        <option value="">Preferred Franchise Model</option>
        <option>Nano Franchise</option>
        <option>Micro Franchise</option>
        <option>Kiosk Franchise</option>
        <option>Retail Store Franchise</option>
        <option>Not Sure Yet</option>
      </select>

      <textarea
        name="message"
        rows="5"
        placeholder="Tell us more about your plans..."
        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#F5A623]"
      />

      <button
        disabled={loading}
        className="w-full bg-[#D42B2B] hover:bg-[#b92323] text-white font-semibold py-4 rounded-xl transition"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  )
}