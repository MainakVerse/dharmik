import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme7() {
  return (
    <div className={`min-h-screen bg-amber-50 text-amber-900 ${lora.className}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-amber-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-700 to-orange-800 text-white shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-2xl">☮</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wide" style={{ fontFamily: "serif" }}>
                  VINTAGE ASHRAM
                </h1>
                <p className="text-amber-200 text-sm tracking-widest">EST. 1975 • PEACE & LOVE</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-lg">
              <Link href="#home" className="hover:text-yellow-300 transition-colors duration-300 font-semibold">
                HOME
              </Link>
              <Link href="#about" className="hover:text-yellow-300 transition-colors duration-300 font-semibold">
                ABOUT
              </Link>
              <Link href="#meditation" className="hover:text-yellow-300 transition-colors duration-300 font-semibold">
                MEDITATION
              </Link>
              <Link href="#programs" className="hover:text-yellow-300 transition-colors duration-300 font-semibold">
                PROGRAMS
              </Link>
              <Link href="#contact" className="hover:text-yellow-300 transition-colors duration-300 font-semibold">
                CONTACT
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100"></div>

        {/* Retro Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg transform rotate-2">
                <span className="text-lg font-bold tracking-wide">✨ GROOVY VIBES SINCE '75 ✨</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: "serif" }}>
                <span className="text-amber-800 drop-shadow-lg">VINTAGE</span>
                <br />
                <span className="text-orange-700 drop-shadow-lg">ASHRAM</span>
              </h1>

              <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-8 rounded-3xl mb-8 shadow-xl border-4 border-amber-400 transform -rotate-1">
                <p className="text-2xl text-amber-900 font-bold italic leading-relaxed">
                  {"Far out, man! "}
                  <br />
                  {"Find your inner peace in our groovy spiritual space"}
                </p>
                <p className="text-amber-700 mt-4 font-semibold">- The Vintage Way</p>
              </div>

              <p className="text-xl mb-10 text-amber-800 leading-relaxed max-w-lg">
                {
                  "Step back in time to the golden age of spiritual awakening. Our retro ashram brings you authentic 70s vibes with timeless wisdom."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-4 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  JOIN THE GROOVE
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-amber-600 text-amber-700 hover:bg-amber-100 px-10 py-4 text-xl font-bold rounded-full bg-transparent shadow-xl"
                >
                  EXPLORE VIBES
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-amber-200 to-orange-200 p-8 rounded-3xl shadow-2xl border-4 border-amber-400 transform rotate-3">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Vintage+Ashram+Vibes"
                  alt="Vintage Ashram"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-white p-4 rounded-full shadow-lg transform -rotate-12">
                  <span className="text-2xl">☮</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-amber-200 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full mb-8 shadow-lg transform -rotate-2">
              <span className="text-xl font-bold tracking-wide">✌ THE VINTAGE WAY ✌</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-amber-900" style={{ fontFamily: "serif" }}>
              OUR GROOVY PHILOSOPHY
            </h2>
            <p className="text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
              {
                "Back in the day, we discovered that spiritual enlightenment comes with a side of good vibes, peace, and love. That's still our thing, man."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "☮",
                title: "PEACE & LOVE",
                desc: "Spreading good vibes and cosmic energy through meditation, chanting, and righteous living, dude.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: "🌻",
                title: "FLOWER POWER",
                desc: "Connecting with Mother Earth and finding harmony in nature's beautiful, far-out patterns.",
                color: "from-orange-500 to-yellow-500",
              },
              {
                icon: "🎵",
                title: "GROOVY MANTRAS",
                desc: "Chanting ancient wisdom with that classic 70s soul, bringing together tradition and good times.",
                color: "from-yellow-500 to-amber-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border-4 border-amber-400 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute top-0 left-0 w-full h-4 bg-gradient-to-r ${item.color}`}></div>
                  <div className="text-6xl mb-6 filter drop-shadow-lg">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-amber-900 tracking-wide" style={{ fontFamily: "serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-amber-800 leading-relaxed text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-center shadow-2xl border-4 border-yellow-400 transform rotate-1">
            <div className="max-w-4xl mx-auto text-white">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-white text-4xl">☮</span>
              </div>
              <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
                VINTAGE WISDOM
              </h3>
              <blockquote className="text-2xl italic leading-relaxed mb-6">
                {'"Peace, love, and understanding - that\'s the cosmic recipe for a righteous life, man."'}
              </blockquote>
              <p className="text-yellow-200 font-semibold text-lg">- Ashram Wisdom, circa 1975</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full mb-8 shadow-lg transform rotate-2">
              <span className="text-xl font-bold tracking-wide">✨ GET IN TOUCH ✨</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-amber-900" style={{ fontFamily: "serif" }}>
              VISIT OUR PAD
            </h2>
            <p className="text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              {
                "Come hang out with us, man! Our doors are always open for fellow seekers of peace, love, and cosmic consciousness."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white border-4 border-amber-400 shadow-2xl transform -rotate-2">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-amber-900" style={{ fontFamily: "serif" }}>
                    ASHRAM INFO
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2 text-xl">FAR OUT ADDRESS</h4>
                        <p className="text-amber-800 text-lg">123 Groovy Lane, Peace Valley, Cosmic State 70575</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2 text-xl">COSMIC HOTLINE</h4>
                        <p className="text-amber-800 text-lg">(555) GROOVY-1</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2 text-xl">PEACE MAIL</h4>
                        <p className="text-amber-800 text-lg">peace@vintageashram.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl border-2 border-amber-400">
                    <h4 className="text-2xl font-bold mb-6 text-amber-900">GROOVY HOURS</h4>
                    <div className="space-y-3 text-amber-800 text-lg">
                      <div className="flex justify-between">
                        <span>Morning Meditation</span>
                        <span>7:00 AM - 9:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Afternoon Vibes</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening Chants</span>
                        <span>7:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend Gatherings</span>
                        <span>All Day, Man!</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-4 border-amber-400 shadow-2xl transform rotate-2">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-amber-900" style={{ fontFamily: "serif" }}>
                    SEND GOOD VIBES
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-amber-900 mb-3">FIRST NAME</label>
                        <Input className="border-2 border-amber-400 focus:border-amber-600 focus:ring-amber-600 text-lg p-4 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-amber-900 mb-3">LAST NAME</label>
                        <Input className="border-2 border-amber-400 focus:border-amber-600 focus:ring-amber-600 text-lg p-4 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-amber-900 mb-3">EMAIL ADDRESS</label>
                      <Input
                        type="email"
                        className="border-2 border-amber-400 focus:border-amber-600 focus:ring-amber-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-amber-900 mb-3">YOUR VIBE</label>
                      <select className="w-full border-2 border-amber-400 rounded-xl px-4 py-4 text-lg focus:border-amber-600 focus:ring-amber-600">
                        <option>Meditation Sessions</option>
                        <option>Groovy Chanting</option>
                        <option>Peace Circles</option>
                        <option>Cosmic Workshops</option>
                        <option>Just Hanging Out</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-amber-900 mb-3">MESSAGE</label>
                      <Textarea
                        rows={4}
                        className="border-2 border-amber-400 focus:border-amber-600 focus:ring-amber-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-xl font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                      SEND THOSE VIBES ✨
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-white font-bold text-3xl">☮</span>
              </div>
              <div className="text-left">
                <span className="text-4xl font-bold block" style={{ fontFamily: "serif" }}>
                  VINTAGE ASHRAM
                </span>
                <span className="text-amber-200 text-lg tracking-widest">EST. 1975 • PEACE & LOVE</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-3xl mx-auto border-2 border-yellow-400">
              <p className="text-2xl font-bold italic mb-4">{"Keep on keepin' on, man!"}</p>
              <p className="text-2xl font-bold italic">{"Peace, love, and cosmic consciousness"}</p>
            </div>
            <p className="text-xl mb-6 text-amber-200">{"Groovy • Far Out • Righteous • Cosmic"}</p>
            <div className="w-40 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-amber-300">
              {"© 1975-2024 Vintage Ashram. All rights reserved. Keep spreading those good vibes, beautiful souls."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
