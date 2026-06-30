import FranchiseForm from "./FranchiseForm"

export default function FranchiseModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex justify-center items-center p-5">
      <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          ×
        </button>

        <h2 className="text-4xl font-bold text-white mb-3">
          Franchise Enquiry
        </h2>

        <p className="text-white/60 mb-8">
          Start your journey with Cocotang today.
        </p>

        <FranchiseForm compact />
      </div>
    </div>
  )
}