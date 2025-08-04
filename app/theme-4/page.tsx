import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme4() {
  return (
    <div className={`min-h-screen bg-white text-black ${lora.className}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-pink-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-pink-200 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">💕</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦚</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-pink-600">Radha Krishna Mandir</span>
                <p className="text-xs text-gray-600">Divine Love Temple</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="hover:text-pink-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="#about" className="hover:text-pink-600 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="#devotion" className="hover:text-pink-600 transition-colors duration-300 font-medium">
                Devotion
              </Link>
              <Link href="#festivals" className="hover:text-pink-600 transition-colors duration-300 font-medium">
                Festivals
              </Link>
              <Link href="#contact" className="hover:text-pink-600 transition-colors duration-300 font-medium">
                Visit
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-16 h-16 bg-pink-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-pink-600 text-xl">🌸</span>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-rose-200/40 rounded-full animate-float-delayed flex items-center justify-center">
          <span className="text-rose-600 text-lg">💖</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-purple-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-purple-600 text-lg">🪷</span>
        </div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full mb-6 border border-pink-200">
                <Heart className="w-4 h-4 text-pink-600" />
                <span className="text-pink-700 text-sm font-medium">Divine Love</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600">
                  Radha Krishna
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">Mandir</span>
              </h1>

              <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-2xl mb-8 border border-pink-200">
                <p className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed">
                  {"Radhe Radhe, Krishna Krishna"}
                  <br />
                  {"Divine love flows eternal"}
                </p>
                <p className="text-sm text-pink-600 mt-2 font-semibold">- Sacred Chant</p>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                {
                  "Immerse yourself in the divine love of Radha and Krishna, where every heart finds its eternal companion in devotion."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Bhajan
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-3xl blur opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Radha+Krishna"
                  alt="Radha Krishna"
                  width={400}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-pink-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Aarti</span>
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full mb-6 border border-pink-200">
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 text-sm font-medium">Divine Love Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Radha Krishna Devotion</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {
                "Experience the eternal love story of Radha and Krishna, where divine love transcends all boundaries and every soul finds its perfect union with the Supreme."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💖",
                title: "Divine Love",
                desc: "Experience the pure, unconditional love between Radha and Krishna that represents the soul's longing for the divine.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: "🎵",
                title: "Sacred Bhajans",
                desc: "Join in melodious bhajans and kirtans celebrating the divine pastimes of the divine couple.",
                gradient: "from-rose-500 to-purple-500",
              },
              {
                icon: "🌸",
                title: "Vrindavan Spirit",
                desc: "Recreate the sacred atmosphere of Vrindavan where Radha and Krishna's eternal leela continues.",
                gradient: "from-purple-500 to-blue-500",
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

          <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 rounded-3xl p-12 text-center border border-pink-100">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💕</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Divine Union</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                {'"Radha and Krishna are one soul appearing in two forms for the sake of divine love play."'}
              </blockquote>
              <p className="text-pink-600 font-semibold">- Gaudiya Vaishnavism</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-2 rounded-full mb-6 border border-pink-200">
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-pink-700 text-sm font-medium">Join Our Devotion</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visit Radha Krishna Mandir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {
                "Come and immerse yourself in the divine love of Radha Krishna. Experience bhajans, aarti, and the eternal bliss of devotion."
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
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Temple Address</h4>
                        <p className="text-gray-600">456 Vrindavan Lane, Divine City, DC 67890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Contact Number</h4>
                        <p className="text-gray-600">(555) 234-5678</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@radhakrishnamandir.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Temple Timings</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Morning Aarti</span>
                        <span>6:00 AM - 8:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bhajan Sessions</span>
                        <span>7:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend Programs</span>
                        <span>5:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Festival Days</span>
                        <span>All Day</span>
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
                        <Input className="border-pink-200 focus:border-pink-400 focus:ring-pink-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input className="border-pink-200 focus:border-pink-400 focus:ring-pink-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" className="border-pink-200 focus:border-pink-400 focus:ring-pink-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                      <select className="w-full border border-pink-200 rounded-md px-3 py-2 focus:border-pink-400 focus:ring-pink-400">
                        <option>Bhajan Sessions</option>
                        <option>Festival Participation</option>
                        <option>Devotional Classes</option>
                        <option>Volunteer Opportunities</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea rows={4} className="border-pink-200 focus:border-pink-400 focus:ring-pink-400" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-600 hover:via-rose-600 hover:to-purple-600 text-white py-3 transition-all duration-300 transform hover:scale-105">
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
      <footer className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">💕</span>
              </div>
              <div className="text-left">
                <span className="text-3xl font-bold block">Radha Krishna Mandir</span>
                <span className="text-sm opacity-90">Divine Love Temple</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-xl font-medium italic mb-2">{"Radhe Radhe, Krishna Krishna"}</p>
              <p className="text-xl font-medium italic">{"Divine love flows eternal"}</p>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Love • Devotion • Bliss • Unity"}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-sm opacity-75">
              {
                "© 2024 Radha Krishna Mandir. All rights reserved. May divine love bless all beings with eternal happiness."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
