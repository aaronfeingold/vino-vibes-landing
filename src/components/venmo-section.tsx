import Link from "next/link"

export default function VenmoSection() {
  return (
    <div className="text-center mb-8 relative z-10">
      <div className="backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-6 max-w-md mx-auto">
        <p className="text-pink-100 mb-4">Love what we're building? Support SIP's development:</p>

        <Link
          href="https://venmo.com/siptheowl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center backdrop-blur-sm bg-blue-500/20 border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/30 transition-all duration-300 px-6 py-2 rounded-full font-medium"
        >
          💙 Venmo @siptheowl
        </Link>
      </div>
    </div>
  )
}
