import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="text-center mb-16 relative z-10">
      <div className="backdrop-blur-sm bg-white/5 border-2 border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Ready to elevate your dining experience?
        </h2>

        <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join wine lovers who've discovered their perfect pairings. Start your
          sommelier journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="backdrop-blur-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 border-0 text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Link href="#chat">Start Chatting with SIP</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
          >
            <Link
              href="https://forms.gle/3uyzDNNS2qc7GnWG6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share Your Feedback
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
