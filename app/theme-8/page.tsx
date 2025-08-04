"use client"

import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme8() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 text-purple-900 ${lora.className}`}
    >
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-purple-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Psychedelic Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff6b9d 0%, transparent 50%), radial-gradient(circle at 75% 75%, #c44569 0%, transparent 50%), radial-gradient(circle at 50% 50%, #f8b500 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 animate-pulse"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-spin-slow">
                <span className="text-white font-bold text-2xl">☮</span>
              </div>
              <div>
                <h1
                  className="text-3xl font-bold tracking-wide"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  GROOVY TEMPLE
                </h1>
                <p className="text-pink-200 text-sm tracking-widest animate-pulse">PEACE • LOVE • COSMIC VIBES</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-lg">
              <Link
                href="#home"
                className="hover:text-yellow-300 transition-all duration-300 font-bold transform hover:scale-110"
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="hover:text-yellow-300 transition-all duration-300 font-bold transform hover:scale-110"
              >
                VIBES
              </Link>
              <Link
                href="#meditation"
                className="hover:text-yellow-300 transition-all duration-300 font-bold transform hover:scale-110"
              >
                MEDITATION
              </Link>
              <Link
                href="#programs"
                className="hover:text-yellow-300 transition-all duration-300 font-bold transform hover:scale-110"
              >
                PROGRAMS
              </Link>
              <Link
                href="#contact"
                className="hover:text-yellow-300 transition-all duration-300 font-bold transform hover:scale-110"
              >
                CONNECT
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        {/* Psychedelic Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce opacity-70 flex items-center justify-center">
          <span className="text-white text-2xl">🌸</span>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full animate-pulse opacity-70 flex items-center justify-center">
          <span className="text-white text-xl">✨</span>
        </div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-70 flex items-center justify-center">
          <span className="text-white text-2xl">🦋</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform rotate-3 animate-pulse">
                <span className="text-xl font-bold tracking-wide">✨ FAR OUT SINCE '68 ✨</span>
              </div>

              <h1
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                style={{
                  fontFamily: "serif",
                  textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-pulse">
                  GROOVY
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                  TEMPLE
                </span>
              </h1>

              <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-orange-200 p-8 rounded-3xl mb-8 shadow-2xl border-4 border-pink-400 transform -rotate-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-orange-300/30 animate-pulse"></div>
                <p className="text-2xl text-purple-900 font-bold italic leading-relaxed relative z-10">
                  {"Love is all you need, man! "}
                  <br />
                  {"Expand your consciousness in our psychedelic sanctuary"}
                </p>
                <p className="text-pink-700 mt-4 font-semibold relative z-10">- Flower Power Wisdom</p>
              </div>

              <p className="text-xl mb-10 text-purple-800 leading-relaxed max-w-lg">
                {
                  "Join our cosmic journey of love, peace, and spiritual awakening. We're all about those good vibrations and higher consciousness, baby!"
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
                  JOIN THE LOVE ✌
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-purple-500 text-purple-700 hover:bg-purple-100 px-10 py-4 text-xl font-bold rounded-full bg-white/80 shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  EXPLORE VIBES 🌈
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-orange-200 p-8 rounded-3xl shadow-2xl border-4 border-pink-400 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Psychedelic+Temple"
                  alt="Groovy Temple"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-2xl transform -rotate-12 animate-bounce">
                  <span className="text-3xl">☮</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-2xl transform rotate-12 animate-pulse">
                  <span className="text-2xl">🌸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,107,157,0.3) 60deg, transparent 120deg)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform -rotate-3 animate-pulse">
              <span className="text-xl font-bold tracking-wide">🌈 COSMIC PHILOSOPHY 🌈</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-purple-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
              }}
            >
              PEACE, LOVE & UNDERSTANDING
            </h2>
            <p className="text-2xl text-purple-800 max-w-4xl mx-auto leading-relaxed">
              {
                "We're spreading love vibrations and cosmic consciousness, man. It's all about unity, peace, and expanding your mind to the infinite possibilities of the universe."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "☮",
                title: "PEACE POWER",
                desc: "Channeling universal peace energy through meditation, love, and righteous living in harmony with all beings.",
                color: "from-purple-500 via-pink-500 to-orange-500",
                rotation: "rotate-3",
              },
              {
                icon: "💖",
                title: "LOVE VIBRATIONS",
                desc: "Spreading love frequencies across the cosmos, connecting all souls in a beautiful tapestry of unity and compassion.",
                color: "from-pink-500 via-orange-500 to-purple-500",
                rotation: "-rotate-2",
              },
              {
                icon: "🌈",
                title: "COSMIC CONSCIOUSNESS",
                desc: "Expanding awareness beyond the material realm into the infinite dimensions of spiritual reality and universal truth.",
                color: "from-orange-500 via-purple-500 to-pink-500",
                rotation: "rotate-1",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-white border-4 border-pink-400 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 ${item.rotation} overflow-hidden`}
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute top-0 left-0 w-full h-4 bg-gradient-to-r ${item.color} animate-pulse`}
                  ></div>
                  <div className="text-6xl mb-6 filter drop-shadow-lg animate-bounce">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-900 tracking-wide" style={{ fontFamily: "serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-purple-800 leading-relaxed text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl border-4 border-yellow-400 transform rotate-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-orange-400/30 animate-pulse"></div>
            <div className="max-w-4xl mx-auto text-white relative z-10">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-spin-slow">
                <span className="text-white text-4xl">☮</span>
              </div>
              <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
                GROOVY WISDOM
              </h3>
              <blockquote className="text-2xl italic leading-relaxed mb-6">
                {
                  '"All you need is love, love, love is all you need. Open your mind, expand your heart, and let the cosmic energy flow through your beautiful soul."'
                }
              </blockquote>
              <p className="text-yellow-200 font-semibold text-lg">- Temple of Love, 1968</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform rotate-3 animate-pulse">
              <span className="text-xl font-bold tracking-wide">✨ CONNECT WITH US ✨</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-purple-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
              }}
            >
              JOIN OUR COSMIC FAMILY
            </h2>
            <p className="text-2xl text-purple-800 max-w-3xl mx-auto leading-relaxed">
              {
                "Come vibe with us, beautiful soul! Our temple is a sanctuary of love, peace, and cosmic consciousness. All are welcome in our groovy family."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white border-4 border-pink-400 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-purple-900" style={{ fontFamily: "serif" }}>
                    TEMPLE VIBES
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2 text-xl">COSMIC ADDRESS</h4>
                        <p className="text-purple-800 text-lg">
                          456 Love Street, Flower Power District, Groovy City 60068
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2 text-xl">LOVE HOTLINE</h4>
                        <p className="text-purple-800 text-lg">(555) PEACE-68</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2 text-xl">COSMIC EMAIL</h4>
                        <p className="text-purple-800 text-lg">love@groovytemple.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-8 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 rounded-2xl border-2 border-pink-400">
                    <h4 className="text-2xl font-bold mb-6 text-purple-900">COSMIC SCHEDULE</h4>
                    <div className="space-y-3 text-purple-800 text-lg">
                      <div className="flex justify-between">
                        <span>Morning Love Circle</span>
                        <span>8:00 AM - 10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Peace Meditation</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Groovy Chanting</span>
                        <span>7:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekend Love-In</span>
                        <span>All Day Vibes!</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-4 border-purple-400 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-purple-900" style={{ fontFamily: "serif" }}>
                    SEND LOVE VIBES
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-purple-900 mb-3">FIRST NAME</label>
                        <Input className="border-2 border-pink-400 focus:border-purple-600 focus:ring-purple-600 text-lg p-4 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-purple-900 mb-3">LAST NAME</label>
                        <Input className="border-2 border-pink-400 focus:border-purple-600 focus:ring-purple-600 text-lg p-4 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-purple-900 mb-3">EMAIL ADDRESS</label>
                      <Input
                        type="email"
                        className="border-2 border-pink-400 focus:border-purple-600 focus:ring-purple-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-purple-900 mb-3">YOUR VIBE</label>
                      <select className="w-full border-2 border-pink-400 rounded-xl px-4 py-4 text-lg focus:border-purple-600 focus:ring-purple-600">
                        <option>Love Circles</option>
                        <option>Peace Meditation</option>
                        <option>Cosmic Chanting</option>
                        <option>Flower Power Events</option>
                        <option>Just Spreading Love</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-purple-900 mb-3">LOVE MESSAGE</label>
                      <Textarea
                        rows={4}
                        className="border-2 border-pink-400 focus:border-purple-600 focus:ring-purple-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                      SEND LOVE VIBES ✨💖
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 via-pink-700 to-orange-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-spin-slow">
                <span className="text-white font-bold text-3xl">☮</span>
              </div>
              <div className="text-left">
                <span
                  className="text-4xl font-bold block"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  GROOVY TEMPLE
                </span>
                <span className="text-pink-200 text-lg tracking-widest animate-pulse">PEACE • LOVE • COSMIC VIBES</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-3xl mx-auto border-2 border-yellow-400">
              <p className="text-2xl font-bold italic mb-4">{"All you need is love, love, love!"}</p>
              <p className="text-2xl font-bold italic">{"Peace, love, and cosmic consciousness forever"}</p>
            </div>
            <p className="text-xl mb-6 text-pink-200">{"Groovy • Far Out • Cosmic • Beautiful"}</p>
            <div className="w-40 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-pink-300">
              {
                "© 1968-2024 Groovy Temple. All rights reserved. Keep spreading love and good vibrations, beautiful souls."
              }
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
