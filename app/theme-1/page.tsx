import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Book, Heart, Music, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme1() {
  return (
    <div className={`min-h-screen bg-white text-black ${lora.className}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-orange-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-200 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">🕉️</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦚</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-orange-600">ISKCON Temple</span>
                <p className="text-xs text-gray-600">International Society for Krishna Consciousness</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="#about" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                About ISKCON
              </Link>
              <Link href="#programs" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                Daily Programs
              </Link>
              <Link href="#teachings" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                Teachings
              </Link>
              <Link href="#festivals" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                Festivals
              </Link>
              <Link href="#contact" className="hover:text-orange-600 transition-colors duration-300 font-medium">
                Visit Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-16 h-16 bg-orange-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-orange-600 text-xl">🪈</span>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-200/40 rounded-full animate-float-delayed flex items-center justify-center">
          <span className="text-yellow-600 text-lg">🦚</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-amber-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-amber-600 text-lg">🌸</span>
        </div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
                <Music className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">Hare Krishna Movement</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
                  Hare Krishna
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">Temple</span>
              </h1>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-2xl mb-8 border border-orange-200">
                <p className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed">
                  {"Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare"}
                  <br />
                  {"Hare Rama, Hare Rama, Rama Rama, Hare Hare"}
                </p>
                <p className="text-sm text-orange-600 mt-2 font-semibold">- The Maha Mantra</p>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                {
                  "Experience the bliss of Krishna consciousness through chanting, dancing, feasting, and spiritual fellowship in our loving community."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join Kirtan
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-3xl blur opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Krishna+Temple"
                  alt="Krishna Temple"
                  width={400}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-orange-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Kirtan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ISKCON Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
              <Book className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">Founded by Srila Prabhupada</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About ISKCON</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {
                "The International Society for Krishna Consciousness is a spiritual movement dedicated to spreading the teachings of Lord Krishna as presented in the Bhagavad-gita and other Vedic scriptures."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎵",
                title: "Chanting & Kirtan",
                desc: "Experience the transcendental vibration of the holy names through congregational chanting and melodious kirtan.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: "🍃",
                title: "Simple Living",
                desc: "Embrace a lifestyle of simplicity, vegetarianism, and spiritual practices for inner purification.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: "📚",
                title: "Vedic Knowledge",
                desc: "Study authentic Vedic literature, especially Srila Prabhupada's translations and commentaries.",
                gradient: "from-orange-500 to-red-500",
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

          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-3xl p-12 text-center border border-orange-100">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🙏</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                {
                  '"To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world."'
                }
              </blockquote>
              <p className="text-orange-600 font-semibold">- ISKCON's Seven Purposes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full mb-6 border border-orange-200">
              <Heart className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">Join Our Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visit ISKCON Temple</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {
                "Come and experience the joy of Krishna consciousness. All are welcome to participate in our programs, taste prasadam, and join our spiritual family."
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
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Temple Address</h4>
                        <p className="text-gray-600">123 Krishna Avenue, Vrindavan Gardens, VG 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Contact Number</h4>
                        <p className="text-gray-600">(555) 108-1008</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@iskcontemple.org</p>
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
                        <Input className="border-orange-200 focus:border-orange-400 focus:ring-orange-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input className="border-orange-200 focus:border-orange-400 focus:ring-orange-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" className="border-orange-200 focus:border-orange-400 focus:ring-orange-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea rows={4} className="border-orange-200 focus:border-orange-400 focus:ring-orange-400" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-3 transition-all duration-300 transform hover:scale-105">
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
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">🕉️</span>
              </div>
              <div className="text-left">
                <span className="text-3xl font-bold block">ISKCON Temple</span>
                <span className="text-sm opacity-90">International Society for Krishna Consciousness</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-xl font-medium italic mb-2">
                {"Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare"}
              </p>
              <p className="text-xl font-medium italic">{"Hare Rama, Hare Rama, Rama Rama, Hare Hare"}</p>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Chant • Dance • Feast • Be Happy"}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-sm opacity-75">
              {
                "© 2024 ISKCON Temple. All rights reserved. Dedicated to spreading Krishna consciousness worldwide for the benefit of all living entities."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
