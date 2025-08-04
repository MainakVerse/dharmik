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

export default function Theme12() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-red-50 text-teal-900 ${lora.className}`}
    >
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-teal-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Bohemian Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-teal-700 via-orange-700 to-red-700 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-orange-600/20 to-red-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-orange-500 rounded-full shadow-2xl border-4 border-white flex items-center justify-center transform rotate-12">
                  <span className="text-white font-bold text-2xl transform -rotate-12">🕉</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs">✿</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs">☮</span>
                </div>
              </div>
              <div>
                <h1
                  className="text-3xl font-bold tracking-wide"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  BOHEMIAN SANCTUARY
                </h1>
                <p className="text-teal-200 text-sm tracking-widest">FREE SPIRIT • ARTISTIC SOUL • EST. 1967</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-lg font-bold tracking-wide">
              <Link
                href="#home"
                className="hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                SPIRIT
              </Link>
              <Link
                href="#art"
                className="hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                ART
              </Link>
              <Link
                href="#community"
                className="hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                COMMUNITY
              </Link>
              <Link
                href="#contact"
                className="hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
              >
                CONNECT
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        {/* Bohemian Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200/40 rounded-full animate-bounce flex items-center justify-center transform rotate-12">
          <span className="text-teal-600 text-2xl">✿</span>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200/40 rounded-full animate-pulse flex items-center justify-center transform -rotate-12">
          <span className="text-orange-600 text-xl">☮</span>
        </div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-red-200/40 rounded-full animate-float flex items-center justify-center transform rotate-45">
          <span className="text-red-600 text-2xl">❀</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gradient-to-r from-teal-600 to-orange-600 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform rotate-3 animate-pulse">
                <span className="text-xl font-bold tracking-wide">✿ FREE SPIRIT SINCE '67 ✿</span>
              </div>

              <h1
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                style={{
                  fontFamily: "serif",
                  textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-orange-600 to-red-600 animate-pulse">
                  BOHEMIAN
                </span>
                <br />
                <span className="text-teal-800">SANCTUARY</span>
              </h1>

              <div className="bg-gradient-to-r from-teal-100 via-orange-100 to-red-100 p-8 rounded-3xl mb-8 shadow-2xl border-4 border-teal-400 transform -rotate-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-300/20 via-orange-300/20 to-red-300/20 animate-pulse"></div>
                <p className="text-2xl text-teal-900 font-bold italic leading-relaxed relative z-10">
                  {"Express your soul, man! "}
                  <br />
                  {"Where creativity meets spirituality in perfect harmony"}
                </p>
                <p className="text-orange-700 mt-4 font-semibold relative z-10">- Bohemian Creed</p>
              </div>

              <p className="text-xl mb-10 text-teal-800 leading-relaxed max-w-lg">
                {
                  "Join our artistic spiritual community where free expression, creative meditation, and bohemian lifestyle merge into a beautiful tapestry of consciousness."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gradient-to-r from-teal-500 via-orange-500 to-red-500 hover:from-teal-600 hover:via-orange-600 hover:to-red-600 text-white px-10 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse">
                  JOIN THE TRIBE ✿
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-teal-500 text-teal-700 hover:bg-teal-100 px-10 py-4 text-xl font-bold rounded-full bg-white/80 shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  EXPLORE ART ☮
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-to-r from-teal-400 via-orange-400 to-red-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-teal-200 via-orange-200 to-red-200 p-8 rounded-3xl shadow-2xl border-4 border-teal-400 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Bohemian+Art"
                  alt="Bohemian Sanctuary"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl transform -rotate-12 animate-bounce">
                  <span className="text-3xl">✿</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white p-3 rounded-full shadow-2xl transform rotate-12 animate-pulse">
                  <span className="text-2xl">☮</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-teal-200 via-orange-200 to-red-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(20,184,166,0.3) 60deg, transparent 120deg)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-700 to-red-700 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform -rotate-3 animate-pulse">
              <span className="text-xl font-bold tracking-wide">❀ BOHEMIAN PHILOSOPHY ❀</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-teal-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
              }}
            >
              ARTISTIC EXPRESSION & SPIRITUAL FREEDOM
            </h2>
            <p className="text-2xl text-teal-800 max-w-4xl mx-auto leading-relaxed">
              {
                "We believe that creativity is the highest form of spiritual expression. Through art, music, dance, and free-spirited living, we connect with the divine essence within us all."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "ARTISTIC EXPRESSION",
                desc: "Channel your inner creativity through painting, sculpture, music, and dance as pathways to spiritual awakening.",
                color: "from-teal-500 via-orange-500 to-red-500",
                rotation: "rotate-3",
              },
              {
                icon: "☮",
                title: "BOHEMIAN LIFESTYLE",
                desc: "Embrace freedom from conventional constraints and live authentically according to your soul's calling.",
                color: "from-orange-500 via-red-500 to-teal-500",
                rotation: "-rotate-2",
              },
              {
                icon: "✿",
                title: "CREATIVE MEDITATION",
                desc: "Discover meditation through artistic creation, where the act of making becomes a sacred spiritual practice.",
                color: "from-red-500 via-teal-500 to-orange-500",
                rotation: "rotate-1",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-white border-4 border-teal-400 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 ${item.rotation} overflow-hidden`}
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute top-0 left-0 w-full h-4 bg-gradient-to-r ${item.color} animate-pulse`}
                  ></div>
                  <div className="text-6xl mb-6 filter drop-shadow-lg animate-bounce">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-900 tracking-wide" style={{ fontFamily: "serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-teal-800 leading-relaxed text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-700 via-orange-700 to-red-700 rounded-3xl p-12 text-center shadow-2xl border-4 border-yellow-400 transform rotate-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-orange-600/30 to-red-600/30 animate-pulse"></div>
            <div className="max-w-4xl mx-auto text-white relative z-10">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-spin-slow">
                <span className="text-white text-4xl">✿</span>
              </div>
              <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
                BOHEMIAN WISDOM
              </h3>
              <blockquote className="text-2xl italic leading-relaxed mb-6">
                {
                  '"Art is the bridge between what is and what could be. In creative expression, we find our truest selves and connect with the infinite possibilities of the universe."'
                }
              </blockquote>
              <p className="text-yellow-200 font-semibold text-lg">- Sanctuary Manifesto, 1967</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-100 via-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-700 to-red-700 text-white px-8 py-4 rounded-full mb-8 shadow-2xl transform rotate-3 animate-pulse">
              <span className="text-xl font-bold tracking-wide">✿ JOIN OUR TRIBE ✿</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-teal-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
              }}
            >
              CONNECT WITH FREE SPIRITS
            </h2>
            <p className="text-2xl text-teal-800 max-w-3xl mx-auto leading-relaxed">
              {
                "Come vibe with our artistic spiritual community! Whether you're a painter, musician, dancer, or just a free spirit seeking authentic expression, you belong here."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white border-4 border-teal-400 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-teal-900" style={{ fontFamily: "serif" }}>
                    SANCTUARY INFO
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal-900 mb-2 text-xl">SANCTUARY ADDRESS</h4>
                        <p className="text-teal-800 text-lg">1967 Freedom Lane, Artist Quarter, Bohemian City 60067</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal-900 mb-2 text-xl">CREATIVE HOTLINE</h4>
                        <p className="text-teal-800 text-lg">(555) BOHO-ART</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-teal-900 mb-2 text-xl">SOUL MAIL</h4>
                        <p className="text-teal-800 text-lg">connect@bohemiansanctuary.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-8 bg-gradient-to-r from-teal-200 via-orange-200 to-red-200 rounded-2xl border-2 border-teal-400">
                    <h4 className="text-2xl font-bold mb-6 text-teal-900">CREATIVE SCHEDULE</h4>
                    <div className="space-y-3 text-teal-800 text-lg">
                      <div className="flex justify-between">
                        <span>Morning Art Circle</span>
                        <span>9:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Creative Meditation</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening Expression</span>
                        <span>7:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Free Spirit Gatherings</span>
                        <span>Whenever the Mood Strikes!</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-4 border-orange-400 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-teal-900" style={{ fontFamily: "serif" }}>
                    EXPRESS YOURSELF
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-teal-900 mb-3">FIRST NAME</label>
                        <Input className="border-2 border-teal-400 focus:border-orange-600 focus:ring-orange-600 text-lg p-4 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-teal-900 mb-3">LAST NAME</label>
                        <Input className="border-2 border-teal-400 focus:border-orange-600 focus:ring-orange-600 text-lg p-4 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-teal-900 mb-3">EMAIL ADDRESS</label>
                      <Input
                        type="email"
                        className="border-2 border-teal-400 focus:border-orange-600 focus:ring-orange-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-teal-900 mb-3">CREATIVE INTEREST</label>
                      <select className="w-full border-2 border-teal-400 rounded-xl px-4 py-4 text-lg focus:border-orange-600 focus:ring-orange-600">
                        <option>Artistic Expression</option>
                        <option>Bohemian Lifestyle</option>
                        <option>Creative Meditation</option>
                        <option>Free Spirit Gatherings</option>
                        <option>Soul Searching</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-teal-900 mb-3">SOUL MESSAGE</label>
                      <Textarea
                        rows={4}
                        className="border-2 border-teal-400 focus:border-orange-600 focus:ring-orange-600 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-500 via-orange-500 to-red-500 hover:from-teal-600 hover:via-orange-600 hover:to-red-600 text-white py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
                      SEND CREATIVE VIBES ✿☮
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-800 via-orange-800 to-red-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700/30 via-orange-700/30 to-red-700/30 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-spin-slow">
                <span className="text-white font-bold text-3xl">✿</span>
              </div>
              <div className="text-left">
                <span
                  className="text-4xl font-bold block"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  BOHEMIAN SANCTUARY
                </span>
                <span className="text-teal-200 text-lg tracking-widest animate-pulse">
                  FREE SPIRIT • ARTISTIC SOUL • EST. 1967
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-3xl mx-auto border-2 border-yellow-400">
              <p className="text-2xl font-bold italic mb-4">{"Express your soul, create your truth!"}</p>
              <p className="text-2xl font-bold italic">{"Where creativity meets spirituality in perfect harmony"}</p>
            </div>
            <p className="text-xl mb-6 text-orange-200">{"Creative • Free • Artistic • Authentic"}</p>
            <div className="w-40 h-2 bg-gradient-to-r from-teal-400 via-orange-400 to-red-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-teal-300">
              {
                "© 1967-2024 Bohemian Sanctuary. All rights reserved. Keep creating, keep expressing, keep being beautifully authentic."
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
