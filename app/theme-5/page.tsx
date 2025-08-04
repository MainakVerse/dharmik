import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Book, Heart, GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme5() {
  return (
    <div className={`min-h-screen bg-white text-black ${lora.className}`}>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-amber-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-200 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">📚</span>
              </div>
              <div>
                <span className="text-xl font-bold text-amber-700">Vedic Heritage Center</span>
                <p className="text-xs text-gray-600">Ancient Wisdom • Modern Learning</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="#about" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="#courses" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                Courses
              </Link>
              <Link href="#library" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                Library
              </Link>
              <Link href="#research" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                Research
              </Link>
              <Link href="#contact" className="hover:text-amber-600 transition-colors duration-300 font-medium">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 w-16 h-16 bg-amber-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-amber-700 text-xl">📜</span>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-200/40 rounded-full animate-float-delayed flex items-center justify-center">
          <span className="text-orange-700 text-lg">🔱</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-yellow-200/40 rounded-full animate-float flex items-center justify-center">
          <span className="text-yellow-700 text-lg">⚛️</span>
        </div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-amber-200">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                <span className="text-amber-800 text-sm font-medium">Center of Learning</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-yellow-700">
                  Vedic Heritage
                </span>
                <br />
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-5xl">Center</span>
              </h1>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl mb-8 border border-amber-200">
                <p className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed">
                  {"Vidya dadati vinayam"}
                  <br />
                  {"Knowledge bestows humility"}
                </p>
                <p className="text-sm text-amber-700 mt-2 font-semibold">- Sanskrit Wisdom</p>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                {
                  "Discover the profound wisdom of ancient Vedic knowledge through scholarly study, research, and practical application in modern life."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Courses
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg transition-all duration-300 bg-transparent"
                >
                  Visit Library
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-300">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 rounded-3xl blur opacity-20 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Vedic+Manuscripts"
                  alt="Vedic Heritage"
                  width={400}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-amber-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Classes</span>
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-amber-200">
              <Book className="w-4 h-4 text-amber-700" />
              <span className="text-amber-800 text-sm font-medium">Ancient Wisdom</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {
                "Preserving, studying, and sharing the timeless wisdom of Vedic literature through rigorous scholarship, authentic teaching, and practical application."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📚",
                title: "Sanskrit Studies",
                desc: "Master the sacred language of the Vedas through comprehensive courses from beginner to advanced levels.",
                gradient: "from-amber-600 to-orange-600",
              },
              {
                icon: "🔬",
                title: "Vedic Research",
                desc: "Engage in scholarly research exploring the scientific and philosophical depths of ancient texts.",
                gradient: "from-orange-600 to-yellow-600",
              },
              {
                icon: "⭐",
                title: "Astrology & Astronomy",
                desc: "Study Jyotish Shastra and ancient astronomical knowledge with modern scientific understanding.",
                gradient: "from-yellow-600 to-amber-600",
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

          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-12 text-center border border-amber-100">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🕉️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Vedic Philosophy</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                {'"Aham brahmasmi - I am Brahman. The individual soul and the universal soul are one."'}
              </blockquote>
              <p className="text-amber-700 font-semibold">- Brihadaranyaka Upanishad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-amber-200">
              <Heart className="w-4 h-4 text-amber-700" />
              <span className="text-amber-800 text-sm font-medium">Join Our Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visit Heritage Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {
                "Embark on a journey of learning and discovery. Join our community of scholars, students, and seekers of ancient wisdom."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Center Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Center Address</h4>
                        <p className="text-gray-600">789 Knowledge Street, Wisdom City, WC 54321</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Contact Number</h4>
                        <p className="text-gray-600">(555) 345-6789</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@vedicheritage.org</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Center Hours</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Library Hours</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Classes</span>
                        <span>10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Research Center</span>
                        <span>9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weekends</span>
                        <span>10:00 AM - 4:00 PM</span>
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
                        <Input className="border-amber-200 focus:border-amber-400 focus:ring-amber-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input className="border-amber-200 focus:border-amber-400 focus:ring-amber-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" className="border-amber-200 focus:border-amber-400 focus:ring-amber-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interest Area</label>
                      <select className="w-full border border-amber-200 rounded-md px-3 py-2 focus:border-amber-400 focus:ring-amber-400">
                        <option>Sanskrit Language</option>
                        <option>Vedic Philosophy</option>
                        <option>Jyotish Shastra</option>
                        <option>Research Programs</option>
                        <option>Library Access</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea rows={4} className="border-amber-200 focus:border-amber-400 focus:ring-amber-400" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-700 hover:via-orange-700 hover:to-yellow-700 text-white py-3 transition-all duration-300 transform hover:scale-105">
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
      <footer className="bg-gradient-to-r from-amber-700 via-orange-700 to-yellow-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <div className="text-left">
                <span className="text-3xl font-bold block">Vedic Heritage Center</span>
                <span className="text-sm opacity-90">Ancient Wisdom • Modern Learning</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-xl font-medium italic mb-2">{"Vidya dadati vinayam"}</p>
              <p className="text-xl font-medium italic">{"Knowledge bestows humility"}</p>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Learn • Research • Preserve • Share"}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-sm opacity-75">
              {
                "© 2024 Vedic Heritage Center. All rights reserved. Dedicated to preserving and sharing ancient wisdom for future generations."
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
