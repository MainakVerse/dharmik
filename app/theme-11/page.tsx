import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme11() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 text-stone-800 ${lora.className}`}
    >
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-stone-300 text-stone-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Victorian Pattern Overlay */}
      <div className="fixed inset-0 opacity-3 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-stone-700 via-amber-800 to-orange-800 text-white shadow-lg relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-orange-600"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🕉</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border border-white flex items-center justify-center">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  CLASSIC HERITAGE TEMPLE
                </h1>
                <p className="text-amber-200 text-xs font-medium" style={{ letterSpacing: "0.15em" }}>
                  ESTABLISHED 1875 • VICTORIAN SPIRITUAL TRADITION
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
              <Link
                href="#home"
                className="hover:text-amber-300 transition-colors duration-300 border-b border-transparent hover:border-amber-300 pb-1"
                style={{ letterSpacing: "0.05em" }}
              >
                HOME
              </Link>
              <Link
                href="#heritage"
                className="hover:text-amber-300 transition-colors duration-300 border-b border-transparent hover:border-amber-300 pb-1"
                style={{ letterSpacing: "0.05em" }}
              >
                HERITAGE
              </Link>
              <Link
                href="#traditions"
                className="hover:text-amber-300 transition-colors duration-300 border-b border-transparent hover:border-amber-300 pb-1"
                style={{ letterSpacing: "0.05em" }}
              >
                TRADITIONS
              </Link>
              <Link
                href="#scriptures"
                className="hover:text-amber-300 transition-colors duration-300 border-b border-transparent hover:border-amber-300 pb-1"
                style={{ letterSpacing: "0.05em" }}
              >
                SCRIPTURES
              </Link>
              <Link
                href="#contact"
                className="hover:text-amber-300 transition-colors duration-300 border-b border-transparent hover:border-amber-300 pb-1"
                style={{ letterSpacing: "0.05em" }}
              >
                VISIT
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 relative overflow-hidden">
        {/* Victorian Ornamental Elements */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-stone-200/40 rounded-full flex items-center justify-center">
          <span className="text-stone-600 text-2xl">❦</span>
        </div>
        <div className="absolute top-32 right-16 w-14 h-14 bg-amber-200/40 rounded-full flex items-center justify-center">
          <span className="text-amber-700 text-xl">⚜</span>
        </div>
        <div className="absolute bottom-24 left-16 w-18 h-18 bg-orange-200/40 rounded-full flex items-center justify-center">
          <span className="text-orange-700 text-2xl">❋</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gradient-to-r from-stone-600 to-amber-700 text-white px-6 py-3 mb-6 shadow-md">
                <span className="text-sm font-semibold" style={{ letterSpacing: "0.1em" }}>
                  ❦ VICTORIAN ELEGANCE ❦
                </span>
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "serif",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="text-stone-800">CLASSIC</span>
                <br />
                <span className="text-amber-800">HERITAGE</span>
              </h1>

              <div className="bg-gradient-to-r from-stone-50 to-amber-50 p-6 mb-6 shadow-md border-l-4 border-amber-600">
                <p
                  className="text-lg text-stone-800 font-medium leading-relaxed text-center"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {"TRADITION • REFINEMENT • SPIRITUAL NOBILITY"}
                  <br />
                  {"Where Ancient Wisdom Meets Victorian Grace"}
                </p>
                <p className="text-amber-700 mt-3 font-medium text-center text-sm">- The Heritage Creed</p>
              </div>

              <p className="text-base mb-8 text-stone-700 leading-relaxed max-w-lg" style={{ letterSpacing: "0.01em" }}>
                {
                  "Established in the golden age of Victorian spirituality, our heritage temple preserves the refined traditions of classical devotion and scholarly pursuit of divine wisdom."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-stone-600 to-amber-700 hover:from-stone-700 hover:to-amber-800 text-white px-8 py-3 text-sm font-semibold shadow-md transition-all duration-300"
                  style={{ letterSpacing: "0.05em" }}
                >
                  ENTER TEMPLE
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-stone-600 text-stone-700 hover:bg-stone-50 px-8 py-3 text-sm font-semibold bg-white shadow-md transition-all duration-300"
                  style={{ letterSpacing: "0.05em" }}
                >
                  EXPLORE HERITAGE
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-stone-100 to-amber-100 p-6 shadow-lg border border-stone-300">
                {/* Victorian Corner Ornaments */}
                <div className="absolute top-0 left-0 w-4 h-4 bg-amber-600 transform rotate-45 -translate-x-2 -translate-y-2"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-stone-600 transform rotate-45 translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-orange-600 transform rotate-45 -translate-x-2 translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-amber-600 transform rotate-45 translate-x-2 translate-y-2"></div>

                <Image
                  src="/placeholder.svg?height=400&width=350&text=Victorian+Heritage+Temple"
                  alt="Classic Heritage Temple"
                  width={350}
                  height={400}
                  className="shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-16 bg-gradient-to-r from-stone-200 to-amber-100 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-stone-700 to-amber-800 text-white px-8 py-4 mb-8 shadow-md">
              <span className="text-lg font-semibold" style={{ letterSpacing: "0.1em" }}>
                ⚜ NOBLE TRADITIONS ⚜
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-stone-800"
              style={{
                fontFamily: "serif",
                letterSpacing: "0.02em",
              }}
            >
              VICTORIAN SPIRITUAL LEGACY
            </h2>
            <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: "0.01em" }}>
              {
                "Our temple stands as a monument to the refined spiritual practices of the Victorian era, where devotion was expressed through elegant ceremony and scholarly pursuit of divine truth."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "❦",
                title: "HERITAGE PRAYERS",
                desc: "Experience the solemnity and grace of traditional Victorian prayer services, conducted with the dignity befitting our noble heritage.",
              },
              {
                icon: "♪",
                title: "CLASSICAL MUSIC",
                desc: "Immerse yourself in the sublime harmonies of classical devotional music, performed on period instruments with authentic Victorian style.",
              },
              {
                icon: "❋",
                title: "TRADITIONAL ARTS",
                desc: "Appreciate the refined artistic expressions of our heritage, from illuminated manuscripts to ornate architectural details.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border border-stone-300 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 text-stone-600">{item.icon}</div>
                  <h3
                    className="text-xl font-bold mb-3 text-stone-800"
                    style={{ fontFamily: "serif", letterSpacing: "0.05em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-sm" style={{ letterSpacing: "0.01em" }}>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-stone-700 to-amber-800 p-8 text-center shadow-lg border border-stone-400">
            <div className="max-w-3xl mx-auto text-white">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-md border border-white">
                <span className="text-stone-800 text-2xl font-bold">⚜</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif", letterSpacing: "0.05em" }}>
                HERITAGE PHILOSOPHY
              </h3>
              <blockquote className="text-lg italic leading-relaxed mb-4" style={{ letterSpacing: "0.01em" }}>
                {
                  '"In the refinement of ceremony and the nobility of tradition, we find the pathway to divine grace. True devotion is expressed through dignity, scholarship, and reverent beauty."'
                }
              </blockquote>
              <p className="text-amber-200 font-medium">- Temple Charter, 1875</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-stone-700 to-amber-800 text-white px-8 py-4 mb-8 shadow-md">
              <span className="text-lg font-semibold" style={{ letterSpacing: "0.1em" }}>
                ❦ VISIT OUR TEMPLE ❦
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-stone-800"
              style={{
                fontFamily: "serif",
                letterSpacing: "0.02em",
              }}
            >
              HERITAGE EXPERIENCE
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: "0.01em" }}>
              {
                "We cordially invite you to experience the refined elegance of Victorian spiritual tradition. Join us for services conducted with the dignity and grace of our noble heritage."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <Card className="bg-white border border-stone-300 shadow-md">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold mb-6 text-stone-800"
                    style={{ fontFamily: "serif", letterSpacing: "0.05em" }}
                  >
                    TEMPLE INFORMATION
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-stone-600 to-amber-700 flex items-center justify-center shadow-md">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1 text-sm" style={{ letterSpacing: "0.02em" }}>
                          TEMPLE ADDRESS
                        </h4>
                        <p className="text-stone-700 text-sm">
                          1875 Heritage Lane, Victorian Quarter, Noble City 18750
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 flex items-center justify-center shadow-md">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1 text-sm" style={{ letterSpacing: "0.02em" }}>
                          CONTACT NUMBER
                        </h4>
                        <p className="text-stone-700 text-sm">(555) HERITAGE</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-stone-700 flex items-center justify-center shadow-md">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-1 text-sm" style={{ letterSpacing: "0.02em" }}>
                          EMAIL ADDRESS
                        </h4>
                        <p className="text-stone-700 text-sm">heritage@classictemple.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-stone-100 to-amber-100 border border-stone-300">
                    <h4 className="text-lg font-bold mb-4 text-stone-800" style={{ letterSpacing: "0.02em" }}>
                      SERVICE TIMES
                    </h4>
                    <div className="space-y-2 text-stone-700 text-sm">
                      <div className="flex justify-between">
                        <span>Morning Prayer</span>
                        <span>8:00 AM - 9:30 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Classical Music</span>
                        <span>3:00 PM - 4:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening Vespers</span>
                        <span>6:00 PM - 7:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Heritage Tours</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border border-stone-300 shadow-md">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold mb-6 text-stone-800"
                    style={{ fontFamily: "serif", letterSpacing: "0.05em" }}
                  >
                    CORRESPONDENCE
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-semibold text-stone-800 mb-2"
                          style={{ letterSpacing: "0.02em" }}
                        >
                          GIVEN NAME
                        </label>
                        <Input className="border border-stone-300 focus:border-amber-500 focus:ring-amber-500 text-sm p-3" />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-semibold text-stone-800 mb-2"
                          style={{ letterSpacing: "0.02em" }}
                        >
                          FAMILY NAME
                        </label>
                        <Input className="border border-stone-300 focus:border-amber-500 focus:ring-amber-500 text-sm p-3" />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-stone-800 mb-2"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        CORRESPONDENCE ADDRESS
                      </label>
                      <Input
                        type="email"
                        className="border border-stone-300 focus:border-amber-500 focus:ring-amber-500 text-sm p-3"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-stone-800 mb-2"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        AREA OF INTEREST
                      </label>
                      <select className="w-full border border-stone-300 px-3 py-3 text-sm focus:border-amber-500 focus:ring-amber-500">
                        <option>Heritage Prayers</option>
                        <option>Classical Music</option>
                        <option>Traditional Arts</option>
                        <option>Ancient Scriptures</option>
                        <option>Temple Tours</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-semibold text-stone-800 mb-2"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        MESSAGE
                      </label>
                      <Textarea
                        rows={4}
                        className="border border-stone-300 focus:border-amber-500 focus:ring-amber-500 text-sm p-3"
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-stone-600 to-amber-700 hover:from-stone-700 hover:to-amber-800 text-white py-3 text-sm font-semibold shadow-md transition-all duration-300"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      SEND CORRESPONDENCE ❦
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-stone-800 to-amber-900 text-white py-12 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-orange-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center shadow-md border border-white">
                <span className="text-stone-800 font-bold text-2xl">🕉</span>
              </div>
              <div className="text-left">
                <span
                  className="text-2xl font-bold block"
                  style={{
                    fontFamily: "serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  CLASSIC HERITAGE TEMPLE
                </span>
                <span className="text-amber-200 text-xs font-medium" style={{ letterSpacing: "0.1em" }}>
                  ESTABLISHED 1875 • VICTORIAN SPIRITUAL TRADITION
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 mb-6 max-w-2xl mx-auto border border-amber-400">
              <p className="text-lg font-semibold mb-2" style={{ letterSpacing: "0.02em" }}>
                {"TRADITION • REFINEMENT • SPIRITUAL NOBILITY"}
              </p>
              <p className="text-lg font-semibold" style={{ letterSpacing: "0.02em" }}>
                {"Where Ancient Wisdom Meets Victorian Grace"}
              </p>
            </div>
            <p className="text-base mb-6 text-amber-200" style={{ letterSpacing: "0.02em" }}>
              {"Noble • Elegant • Refined • Timeless"}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-amber-300 text-sm">
              {
                "© 1875-2024 Classic Heritage Temple. All rights reserved. Preserving Victorian spiritual elegance and noble traditions for future generations."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
