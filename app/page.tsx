import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Palette, Sparkles, Heart, Star, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function ThemeSelector() {
  const themes = [
    {
      id: "theme-1",
      name: "ISKCON Temple",
      description: "Krishna consciousness with Hare Krishna mantra, blue and purple gradients, devotional atmosphere",
      preview: "/placeholder.svg?height=300&width=400&text=ISKCON+Theme",
      colors: ["bg-blue-500", "bg-purple-500", "bg-orange-500"],
      features: ["Kirtan Programs", "Prasadam Distribution", "Bhagavad Gita Classes", "Krishna Festivals"],
    },
    {
      id: "theme-2",
      name: "Shanti Mandir",
      description: "Classic Hindu temple with traditional orange and yellow colors, peaceful and serene design",
      preview: "/placeholder.svg?height=300&width=400&text=Shanti+Mandir",
      colors: ["bg-orange-500", "bg-yellow-500", "bg-amber-500"],
      features: ["Daily Puja", "Meditation Sessions", "Sacred Ceremonies", "Spiritual Counseling"],
    },
    {
      id: "theme-3",
      name: "Divine Sanctuary",
      description: "Modern spiritual center with sidebar navigation, contemporary design with traditional values",
      preview: "/placeholder.svg?height=300&width=400&text=Divine+Sanctuary",
      colors: ["bg-orange-500", "bg-amber-600", "bg-yellow-500"],
      features: ["Morning Aarti", "Yoga Classes", "Vedic Studies", "Community Events"],
    },
    {
      id: "theme-4",
      name: "Radha Krishna Mandir",
      description: "Devotional temple focused on Radha-Krishna worship with pink and blue color scheme",
      preview: "/placeholder.svg?height=300&width=400&text=Radha+Krishna",
      colors: ["bg-pink-500", "bg-blue-500", "bg-purple-500"],
      features: ["Radha-Krishna Aarti", "Bhajan Sessions", "Festival Celebrations", "Devotee Programs"],
    },
    {
      id: "theme-5",
      name: "Vedic Heritage Center",
      description: "Educational focus on Vedic knowledge with earth tones and scholarly atmosphere",
      preview: "/placeholder.svg?height=300&width=400&text=Vedic+Heritage",
      colors: ["bg-amber-700", "bg-orange-600", "bg-yellow-600"],
      features: ["Sanskrit Classes", "Vedic Astrology", "Philosophy Courses", "Ancient Wisdom"],
    },
    {
      id: "theme-6",
      name: "Lotus Temple",
      description: "Minimalist design inspired by lotus symbolism with soft pastels and clean layout",
      preview: "/placeholder.svg?height=300&width=400&text=Lotus+Temple",
      colors: ["bg-rose-300", "bg-pink-300", "bg-orange-300"],
      features: ["Meditation Garden", "Lotus Pond", "Silent Retreats", "Mindfulness Programs"],
    },
    {
      id: "theme-7",
      name: "Vintage Ashram",
      description: "1970s retro design with warm earth tones, vintage typography, and classic spiritual aesthetics",
      preview: "/placeholder.svg?height=300&width=400&text=Vintage+Ashram",
      colors: ["bg-amber-600", "bg-orange-700", "bg-yellow-700"],
      features: ["Retro Meditation", "Vintage Chanting", "Classic Yoga", "Spiritual Workshops"],
    },
    {
      id: "theme-8",
      name: "Groovy Temple",
      description: "Psychedelic 60s inspired design with vibrant colors, flowing patterns, and peace-love vibes",
      preview: "/placeholder.svg?height=300&width=400&text=Groovy+Temple",
      colors: ["bg-purple-600", "bg-pink-500", "bg-orange-500"],
      features: ["Peace Circles", "Love Meditation", "Cosmic Chanting", "Flower Power Events"],
    },
    {
      id: "theme-9",
      name: "Art Deco Mandir",
      description: "1920s Art Deco style with geometric patterns, gold accents, and elegant vintage sophistication",
      preview: "/placeholder.svg?height=300&width=400&text=Art+Deco+Mandir",
      colors: ["bg-yellow-600", "bg-amber-700", "bg-orange-800"],
      features: ["Elegant Ceremonies", "Golden Age Rituals", "Classic Architecture", "Vintage Festivals"],
    },
    {
      id: "theme-10",
      name: "Retro Spiritual Center",
      description: "1980s retro-futuristic design with neon accents, geometric shapes, and synthwave aesthetics",
      preview: "/placeholder.svg?height=300&width=400&text=Retro+Spiritual",
      colors: ["bg-cyan-500", "bg-purple-500", "bg-pink-500"],
      features: ["Neon Meditation", "Synth Mantras", "Digital Dharma", "Cosmic Consciousness"],
    },
    {
      id: "theme-11",
      name: "Classic Heritage",
      description: "Victorian era inspired design with ornate details, sepia tones, and traditional elegance",
      preview: "/placeholder.svg?height=300&width=400&text=Classic+Heritage",
      colors: ["bg-amber-800", "bg-orange-900", "bg-yellow-800"],
      features: ["Heritage Prayers", "Classical Music", "Traditional Arts", "Ancient Scriptures"],
    },
    {
      id: "theme-12",
      name: "Bohemian Sanctuary",
      description: "1960s bohemian style with earthy colors, artistic patterns, and free-spirited design",
      preview: "/placeholder.svg?height=300&width=400&text=Bohemian+Sanctuary",
      colors: ["bg-teal-600", "bg-orange-600", "bg-red-600"],
      features: ["Artistic Expression", "Bohemian Lifestyle", "Creative Meditation", "Free Spirit Gatherings"],
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 ${lora.className}`}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🕉️</span>
              </div>
              <h1 className="text-3xl font-bold text-orange-600">Hindu Temple Themes</h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of beautiful Hindu temple website themes, each designed with unique spiritual
              aesthetics and features.
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-200/30 rounded-full animate-float-delayed"></div>

        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
              <Palette className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">Sacred Design Collection</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
              Divine Templates
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover the perfect spiritual aesthetic for your temple website. Each theme is crafted with devotion,
              incorporating traditional Hindu elements with modern web design principles.
            </p>

            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span>6 Unique Themes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-orange-500" />
                <span>Spiritual Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-orange-500" />
                <span>Responsive Layout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <Card
                key={theme.id}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Theme Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={theme.preview || "/placeholder.svg"}
                      alt={theme.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">Theme {index + 1}</span>
                    </div>
                  </div>

                  {/* Theme Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{theme.name}</h3>
                      <div className="flex space-x-1">
                        {theme.colors.map((color, colorIndex) => (
                          <div key={colorIndex} className={`w-4 h-4 rounded-full ${color}`}></div>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{theme.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {theme.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link href={`/${theme.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all duration-300 transform hover:scale-105">
                          <Eye className="w-4 h-4 mr-2" />
                          View Theme
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Temple Themes?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each theme is thoughtfully designed to honor Hindu traditions while providing modern functionality for
              your spiritual community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sun className="w-8 h-8 text-orange-500" />,
                title: "Spiritual Aesthetics",
                desc: "Beautiful color schemes and imagery that reflect Hindu spiritual traditions and create a sacred atmosphere online.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-amber-500" />,
                title: "Modern Functionality",
                desc: "Responsive design, smooth animations, and user-friendly interfaces that work perfectly on all devices.",
              },
              {
                icon: <Heart className="w-8 h-8 text-yellow-600" />,
                title: "Community Focused",
                desc: "Features designed to bring your spiritual community together through events, programs, and shared experiences.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🕉️</span>
              </div>
              <span className="text-2xl font-bold">Hindu Temple Themes</span>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Sacred Design • Spiritual Technology • Divine Inspiration"}</p>
            <p className="text-sm opacity-75">
              {"© 2024 Hindu Temple Themes. All rights reserved. May all beings find peace and spiritual fulfillment."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
