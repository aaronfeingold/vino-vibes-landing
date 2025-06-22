import { Wine, Camera, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Wine,
    title: "AI-Powered Wine Pairing",
    description:
      "Upload menu photos and get expert, personalized wine recommendations from our sassy AI sommelier, Sip the Owl",
  },
  {
    icon: Camera,
    title: "Making Dining Memories",
    description:
      "Track what wines you've tried, where you had them, and share your vibes with others.",
  },
  {
    icon: MessageCircle,
    title: "Expert Chat Interface",
    description:
      "Discuss and refine selections through educational chats with Sip the Owl. Discover new wines with the confidence.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mb-32">
      <div className="mb-16 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Create Your Own Vino Vibes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>

              <p className="text-pink-100 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
