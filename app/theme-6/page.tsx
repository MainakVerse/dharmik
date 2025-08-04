import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Heart, Flower, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme6() {
  return (
    <div className={`min-h-screen bg-white text-black ${lora.className}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-rose-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-rose-200 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-300 via-pink-300 to-orange-300 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">🪷</span>
              </div>
              <div>
                <span className="text-xl font-bold text-rose-600">Lotus Temple</span>
                <p className="text-xs text-gray-600">Serenity • Mindfulness • Peace</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="#about" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="#meditation" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                Meditation
              </Link>
              <Link href="#garden" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                Garden
              </Link>
              <Link href="#programs" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                Programs
              </Link>
              <Link href="#contact" className="hover:text-rose-600 transition-colors duration-300 font-medium">
                Visit
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-16 h-16 bg-rose-200/30 rounded-full animate-float flex items-center justify-center">
          <span className="text-rose-500 text-xl">🌸</span>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-200/30 rounded-full animate-float-delayed flex items-center justify-center">
          <span className="text-pink-500 text-lg">🪷</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-orange-200/30 rounded-full animate-float flex items-center justify-center">
          <span className="text-orange-500 text-lg">🍃</span>
        </div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
                <Flower className="w-4 h-4 text-rose-600" />
                <span className="text-rose-700 text-sm font-medium">Sacred Sanctuary</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500">
                  Lotus
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">Temple</span>
              </h1>

              <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-2xl mb-8 border border-rose-200">
                <p className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed">
                  {"Like a lotus blooming in muddy waters"}
                  <br />
                  {"Find purity in life's challenges"}
                </p>
                <p className="text-sm text-rose-600 mt-2 font-semibold">- Temple Wisdom</p>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                {
                  "Discover inner peace and mindfulness in our serene sanctuary, where the lotus symbolizes spiritual awakening and pure consciousness."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Meditation
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-8 py-3 text-lg transition-all duration-300 bg-transparent"
                >
                  Explore Garden
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-300 via-pink-300 to-orange-300 rounded-3xl blur opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Lotus+Garden"
                  alt="Lotus Temple"
                  width={400}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-rose-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Silent Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
              <Leaf className="w-4 h-4 text-rose-600" />
              <span className="text-rose-700 text-sm font-medium">Mindful Living</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">The Lotus Path</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {
                "Inspired by the sacred lotus that rises from muddy waters to bloom in pristine beauty, we offer a path to spiritual awakening through mindfulness and meditation."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🧘‍♀️",
                title: "Mindful Meditation",
                desc: "Practice various forms of meditation in our peaceful sanctuary, designed to cultivate inner stillness and awareness.",
                gradient: "from-rose-400 to-pink-400",
              },
              {
                icon: "🌸",
                title: "Lotus Garden",
                desc: "Walk through our beautiful lotus garden, where nature becomes your teacher in the art of mindful living.",
                gradient: "from-pink-400 to-orange-400",
              },
              {
                icon: "🕯️",
                title: "Silent Retreats",
                desc: "Join our silent retreats for deep introspection and spiritual renewal in a supportive community.",
                gradient: "from-orange-400 to-rose-400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-orange-50 rounded-3xl p-12 text-center border border-rose-100">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🪷</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Lotus Wisdom</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                {
                  '"Just as a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled, so I, born in the world, raised in the world having overcome the world, live unsoiled by the world."'
                }
              </blockquote>
              <p className="text-rose-600 font-semibold">- Buddha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-2 rounded-full mb-6 border border-rose-200">
              <Heart className="w-4 h-4 text-rose-600" />
              <span className="text-rose-700 text-sm font-medium">Join Our Sanctuary</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visit Lotus Temple</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {
                "Step into our peaceful sanctuary where the lotus teaches us about resilience, purity, and spiritual awakening. All are welcome."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Temple Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Temple Address</h4>
                        <p className="text-gray-600">321 Serenity Path, Peaceful Valley, PV 98765</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Contact Number</h4>
                        <p className="text-gray-600">(555) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-rose-400 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@lotustemple.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Temple Hours</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Meditation Sessions</span>
                        <span>6:00 AM - 8:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Garden Walks</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening Reflection</span>
                        <span>7:00 PM - 8:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Silent Hours</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input className="border-rose-200 focus:border-rose-400 focus:ring-rose-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input className="border-rose-200 focus:border-rose-400 focus:ring-rose-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" className="border-rose-200 focus:border-rose-400 focus:ring-rose-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                      <select className="w-full border border-rose-200 rounded-md px-3 py-2 focus:border-rose-400 focus:ring-rose-400">
                        <option>Meditation Sessions</option>
                        <option>Garden Walks</option>
                        <option>Silent Retreats</option>
                        <option>Mindfulness Programs</option>
                        <option>Volunteer Opportunities</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea rows={4} className="border-rose-200 focus:border-rose-400 focus:ring-rose-400" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 hover:from-rose-500 hover:via-pink-500 hover:to-orange-500 text-white py-3 transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">🪷</span>
              </div>
              <div className="text-left">
                <span className="text-3xl font-bold block">Lotus Temple</span>
                <span className="text-sm opacity-90">Serenity • Mindfulness • Peace</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-xl font-medium italic mb-2">{"Like a lotus blooming in muddy waters"}</p>
              <p className="text-xl font-medium italic">{"Find purity in life's challenges"}</p>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Mindfulness • Serenity • Awakening • Peace"}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mb-6"></div>
            <p className="text-sm opacity-75">
              {
                "© 2024 Lotus Temple. All rights reserved. May all beings find peace, mindfulness, and spiritual awakening."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
