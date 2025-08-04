import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme9() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-amber-900 ${lora.className}`}
    >
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-yellow-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Art Deco Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-800 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-amber-600/20 to-orange-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-none shadow-2xl border-4 border-white transform rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl transform -rotate-45">🕉</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-none transform rotate-45"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-none transform rotate-45"></div>
              </div>
              <div>
                <h1
                  className="text-4xl font-bold tracking-widest"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                    letterSpacing: "0.2em",
                  }}
                >
                  ART DECO MANDIR
                </h1>
                <p className="text-yellow-200 text-sm tracking-widest font-semibold">
                  ESTABLISHED 1925 • GOLDEN AGE SPIRITUALITY
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-10 text-lg font-bold tracking-wide">
              <Link
                href="#home"
                className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-300"
              >
                HOME
              </Link>
              <Link
                href="#about"
                className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-300"
              >
                HERITAGE
              </Link>
              <Link
                href="#ceremonies"
                className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-300"
              >
                CEREMONIES
              </Link>
              <Link
                href="#architecture"
                className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-300"
              >
                ARCHITECTURE
              </Link>
              <Link
                href="#contact"
                className="hover:text-yellow-300 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-300"
              >
                VISIT
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 relative overflow-hidden">
        {/* Art Deco Geometric Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 transform rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 transform rotate-45 opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-gradient-to-r from-yellow-600 to-amber-700 text-white px-8 py-4 mb-8 shadow-2xl transform -skew-x-12">
                <span className="text-xl font-bold tracking-widest">✦ GOLDEN AGE ELEGANCE ✦</span>
              </div>

              <h1
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                style={{
                  fontFamily: "serif",
                  textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                  letterSpacing: "0.1em",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-700">
                  ART DECO
                </span>
                <br />
                <span className="text-amber-800">MANDIR</span>
              </h1>

              <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 p-10 mb-8 shadow-2xl border-4 border-yellow-400 relative">
                <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 transform rotate-45 -translate-x-4 -translate-y-4"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-amber-500 transform rotate-45 translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-500 transform rotate-45 -translate-x-4 translate-y-4"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-500 transform rotate-45 translate-x-4 translate-y-4"></div>

                <p
                  className="text-2xl text-amber-900 font-bold leading-relaxed text-center"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {"ELEGANCE • SOPHISTICATION • DIVINE GEOMETRY"}
                  <br />
                  {"Where Art Meets Spirituality"}
                </p>
                <p className="text-amber-700 mt-4 font-semibold text-center">- The Golden Age Philosophy</p>
              </div>

              <p className="text-xl mb-10 text-amber-800 leading-relaxed max-w-lg" style={{ letterSpacing: "0.02em" }}>
                {
                  "Experience the grandeur of the 1920s golden age, where geometric beauty meets spiritual transcendence in perfect harmony."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 hover:from-yellow-700 hover:via-amber-700 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ letterSpacing: "0.1em" }}
                >
                  ENTER TEMPLE
                </Button>
                <Button
                  variant="outline"
                  className="border-4 border-amber-600 text-amber-700 hover:bg-amber-100 px-12 py-4 text-xl font-bold bg-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ letterSpacing: "0.1em" }}
                >
                  EXPLORE ART
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 p-10 shadow-2xl border-8 border-yellow-400 relative">
                {/* Art Deco Corner Decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 transform rotate-45 -translate-x-6 -translate-y-6"></div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 transform rotate-45 translate-x-6 -translate-y-6"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 transform rotate-45 -translate-x-6 translate-y-6"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 transform rotate-45 translate-x-6 translate-y-6"></div>

                <Image
                  src="/placeholder.svg?height=500&width=400&text=Art+Deco+Temple"
                  alt="Art Deco Mandir"
                  width={400}
                  height={500}
                  className="shadow-lg"
                />

                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-4 shadow-2xl transform rotate-12">
                  <span className="text-2xl font-bold">✦</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 shadow-2xl transform -rotate-12">
                  <span className="text-2xl font-bold">◆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0,0,0,0.1) 45deg, transparent 90deg)`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-amber-700 to-orange-800 text-white px-10 py-6 mb-10 shadow-2xl transform skew-x-12">
              <span className="text-2xl font-bold tracking-widest">◆ GOLDEN AGE HERITAGE ◆</span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-bold mb-10 text-amber-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
                letterSpacing: "0.1em",
              }}
            >
              ARCHITECTURAL MAGNIFICENCE
            </h2>
            <p
              className="text-2xl text-amber-800 max-w-5xl mx-auto leading-relaxed"
              style={{ letterSpacing: "0.02em" }}
            >
              {
                "Built during the roaring twenties, our temple represents the pinnacle of Art Deco design merged with ancient spiritual wisdom. Every geometric pattern tells a story of divine proportion."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: "◆",
                title: "GEOMETRIC HARMONY",
                desc: "Sacred geometry meets Art Deco elegance in our temple's divine architectural proportions and golden ratio designs.",
                color: "from-yellow-600 via-amber-600 to-orange-600",
                transform: "skew-y-3",
              },
              {
                icon: "✦",
                title: "GOLDEN CEREMONIES",
                desc: "Experience rituals conducted with the sophistication and grandeur befitting the golden age of spiritual awakening.",
                color: "from-amber-600 via-orange-600 to-yellow-600",
                transform: "-skew-y-2",
              },
              {
                icon: "◇",
                title: "TIMELESS ELEGANCE",
                desc: "Our temple preserves the refined aesthetic of the 1920s while maintaining authentic spiritual traditions and practices.",
                color: "from-orange-600 via-yellow-600 to-amber-600",
                transform: "skew-y-1",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-white border-8 border-yellow-400 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 ${item.transform} overflow-hidden`}
              >
                <CardContent className="p-10 text-center relative">
                  <div className={`absolute top-0 left-0 w-full h-6 bg-gradient-to-r ${item.color}`}></div>
                  <div className="text-7xl mb-8 filter drop-shadow-lg text-amber-600">{item.icon}</div>
                  <h3
                    className="text-3xl font-bold mb-6 text-amber-900 tracking-widest"
                    style={{ fontFamily: "serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-amber-800 leading-relaxed text-lg" style={{ letterSpacing: "0.02em" }}>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-700 p-16 text-center shadow-2xl border-8 border-yellow-400 relative">
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 transform rotate-45 -translate-x-8 -translate-y-8"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-400 transform rotate-45 -translate-x-8 translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 transform rotate-45 translate-x-8 translate-y-8"></div>

            <div className="max-w-5xl mx-auto text-white relative z-10">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-10 shadow-2xl transform rotate-45">
                <span className="text-white text-5xl font-bold transform -rotate-45">◆</span>
              </div>
              <h3 className="text-5xl font-bold mb-8" style={{ fontFamily: "serif", letterSpacing: "0.1em" }}>
                DECO PHILOSOPHY
              </h3>
              <blockquote className="text-3xl italic leading-relaxed mb-8" style={{ letterSpacing: "0.02em" }}>
                {
                  '"In geometric perfection, we find divine truth. In elegant design, we discover spiritual beauty. Art and devotion unite in golden harmony."'
                }
              </blockquote>
              <p className="text-yellow-200 font-semibold text-xl">- Temple Manifesto, 1925</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-yellow-700 to-amber-800 text-white px-10 py-6 mb-10 shadow-2xl transform -skew-x-12">
              <span className="text-2xl font-bold tracking-widest">✦ VISIT OUR TEMPLE ✦</span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-bold mb-10 text-amber-900"
              style={{
                fontFamily: "serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.2)",
                letterSpacing: "0.1em",
              }}
            >
              GOLDEN AGE EXPERIENCE
            </h2>
            <p
              className="text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed"
              style={{ letterSpacing: "0.02em" }}
            >
              {
                "Step into an era of elegance and sophistication. Our Art Deco temple welcomes you to experience the divine through geometric beauty and timeless design."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Card className="bg-white border-8 border-yellow-400 shadow-2xl transform skew-y-2 hover:skew-y-0 transition-transform duration-500">
                <CardContent className="p-12">
                  <h3
                    className="text-4xl font-bold mb-10 text-amber-900"
                    style={{ fontFamily: "serif", letterSpacing: "0.1em" }}
                  >
                    TEMPLE INFORMATION
                  </h3>
                  <div className="space-y-10">
                    <div className="flex items-start space-x-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-amber-700 flex items-center justify-center shadow-2xl transform rotate-45">
                        <MapPin className="w-10 h-10 text-white transform -rotate-45" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-3 text-2xl" style={{ letterSpacing: "0.05em" }}>
                          TEMPLE ADDRESS
                        </h4>
                        <p className="text-amber-800 text-xl">
                          1925 Golden Avenue, Art Deco District, Elegance City 20025
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-700 flex items-center justify-center shadow-2xl transform rotate-45">
                        <Phone className="w-10 h-10 text-white transform -rotate-45" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-3 text-2xl" style={{ letterSpacing: "0.05em" }}>
                          CONTACT NUMBER
                        </h4>
                        <p className="text-amber-800 text-xl">(555) DECO-925</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-yellow-700 flex items-center justify-center shadow-2xl transform rotate-45">
                        <Mail className="w-10 h-10 text-white transform -rotate-45" />
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-3 text-2xl" style={{ letterSpacing: "0.05em" }}>
                          EMAIL ADDRESS
                        </h4>
                        <p className="text-amber-800 text-xl">elegance@artdecomandir.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-10 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 border-4 border-yellow-400 relative">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-500 transform rotate-45 -translate-x-4 -translate-y-4"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-amber-500 transform rotate-45 translate-x-4 -translate-y-4"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-500 transform rotate-45 -translate-x-4 translate-y-4"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-500 transform rotate-45 translate-x-4 translate-y-4"></div>

                    <h4 className="text-3xl font-bold mb-8 text-amber-900" style={{ letterSpacing: "0.05em" }}>
                      TEMPLE HOURS
                    </h4>
                    <div className="space-y-4 text-amber-800 text-xl">
                      <div className="flex justify-between">
                        <span>Morning Ceremonies</span>
                        <span>8:00 AM - 10:00 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Afternoon Prayers</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Evening Rituals</span>
                        <span>6:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Golden Hour Tours</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-8 border-amber-400 shadow-2xl transform -skew-y-2 hover:skew-y-0 transition-transform duration-500">
                <CardContent className="p-12">
                  <h3
                    className="text-4xl font-bold mb-10 text-amber-900"
                    style={{ fontFamily: "serif", letterSpacing: "0.1em" }}
                  >
                    CONTACT FORM
                  </h3>
                  <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label
                          className="block text-xl font-bold text-amber-900 mb-4"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          FIRST NAME
                        </label>
                        <Input className="border-4 border-yellow-400 focus:border-amber-600 focus:ring-amber-600 text-xl p-6" />
                      </div>
                      <div>
                        <label
                          className="block text-xl font-bold text-amber-900 mb-4"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          LAST NAME
                        </label>
                        <Input className="border-4 border-yellow-400 focus:border-amber-600 focus:ring-amber-600 text-xl p-6" />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-xl font-bold text-amber-900 mb-4"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        EMAIL ADDRESS
                      </label>
                      <Input
                        type="email"
                        className="border-4 border-yellow-400 focus:border-amber-600 focus:ring-amber-600 text-xl p-6"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xl font-bold text-amber-900 mb-4"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        INTEREST
                      </label>
                      <select className="w-full border-4 border-yellow-400 px-6 py-6 text-xl focus:border-amber-600 focus:ring-amber-600">
                        <option>Temple Tours</option>
                        <option>Art Deco Architecture</option>
                        <option>Golden Age Ceremonies</option>
                        <option>Heritage Programs</option>
                        <option>Private Events</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-xl font-bold text-amber-900 mb-4"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        MESSAGE
                      </label>
                      <Textarea
                        rows={5}
                        className="border-4 border-yellow-400 focus:border-amber-600 focus:ring-amber-600 text-xl p-6"
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 hover:from-yellow-700 hover:via-amber-700 hover:to-orange-700 text-white py-6 text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      SEND MESSAGE ◆
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-800 via-amber-800 to-orange-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 mb-10">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-2xl border-4 border-white transform rotate-45">
                <span className="text-white font-bold text-4xl transform -rotate-45">🕉</span>
              </div>
              <div className="text-left">
                <span
                  className="text-5xl font-bold block"
                  style={{
                    fontFamily: "serif",
                    textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
                    letterSpacing: "0.2em",
                  }}
                >
                  ART DECO MANDIR
                </span>
                <span className="text-yellow-200 text-xl tracking-widest font-semibold">
                  ESTABLISHED 1925 • GOLDEN AGE SPIRITUALITY
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 mb-10 max-w-4xl mx-auto border-4 border-yellow-400 relative">
              <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-400 transform rotate-45 -translate-x-4 -translate-y-4"></div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400 transform rotate-45 translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-400 transform rotate-45 -translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 transform rotate-45 translate-x-4 translate-y-4"></div>

              <p className="text-3xl font-bold mb-4" style={{ letterSpacing: "0.05em" }}>
                {"ELEGANCE • SOPHISTICATION • DIVINE GEOMETRY"}
              </p>
              <p className="text-3xl font-bold" style={{ letterSpacing: "0.05em" }}>
                {"Where Art Meets Spirituality"}
              </p>
            </div>
            <p className="text-2xl mb-8 text-yellow-200" style={{ letterSpacing: "0.05em" }}>
              {"Golden • Elegant • Timeless • Divine"}
            </p>
            <div className="w-48 h-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 mx-auto mb-10"></div>
            <p className="text-yellow-300 text-lg">
              {
                "© 1925-2024 Art Deco Mandir. All rights reserved. Preserving golden age elegance and spiritual magnificence for future generations."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
