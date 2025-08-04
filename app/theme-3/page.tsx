import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Book, Heart, Users, Star, Sun, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme3() {
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

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-orange-500 to-amber-600 z-40 flex flex-col items-center py-8 shadow-2xl">
        <div className="mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg">ॐ</span>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          {[
            { href: "#home", icon: "🏠" },
            { href: "#about", icon: "🕉️" },
            { href: "#services", icon: "🙏" },
            { href: "#teachings", icon: "📿" },
            { href: "#events", icon: "🎭" },
            { href: "#contact", icon: "📞" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <span className="text-lg">{item.icon}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-slide-in-left">
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-700 text-sm font-medium">Sacred Space</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                    Divine
                  </span>
                  <br />
                  <span className="text-gray-800">Sanctuary</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  {
                    "Experience the eternal wisdom of ancient traditions in a space designed for spiritual awakening and divine connection."
                  }
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Begin Journey
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
                  >
                    Explore More
                  </Button>
                </div>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur opacity-20"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=400&text=Sacred+Temple"
                    alt="Sacred Temple"
                    width={400}
                    height={500}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">Our Essence</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Sacred Philosophy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {
                  "Rooted in timeless wisdom, we embrace the path of dharma, guiding souls toward enlightenment through devotion, knowledge, and compassionate service."
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Sun className="w-8 h-8 text-orange-500" />,
                  title: "Spiritual Awakening",
                  desc: "Discover your inner divine nature through ancient practices and modern understanding.",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: <Book className="w-8 h-8 text-amber-600" />,
                  title: "Sacred Knowledge",
                  desc: "Study the profound teachings of our scriptures and apply them to daily life.",
                  color: "from-amber-500 to-yellow-500",
                },
                {
                  icon: <Users className="w-8 h-8 text-yellow-600" />,
                  title: "Divine Community",
                  desc: "Join a loving sangha dedicated to mutual growth and spiritual support.",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                    <CardContent className="p-8 relative">
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                      <div className="mb-6">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 text-center">
              <blockquote className="text-3xl font-bold text-gray-800 mb-4 italic">
                {'"Vasudhaiva Kutumbakam"'}
              </blockquote>
              <p className="text-lg text-gray-600 mb-2">{"The world is one family"}</p>
              <p className="text-orange-600 font-semibold">- Maha Upanishad</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">Connect</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-gray-800">Join Our Sacred Community</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {
                  "We welcome you with open hearts. Come visit us, participate in our programs, or simply reach out to learn more about our spiritual path."
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Temple Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                          <p className="text-gray-600">123 Spiritual Avenue, Sacred City, SC 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                          <p className="text-gray-600">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                          <p className="text-gray-600">contact@divinesanctuary.org</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-white border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <Input className="border-gray-200 focus:border-orange-400 focus:ring-orange-400" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <Input className="border-gray-200 focus:border-orange-400 focus:ring-orange-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input type="email" className="border-gray-200 focus:border-orange-400 focus:ring-orange-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <Input className="border-gray-200 focus:border-orange-400 focus:ring-orange-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <Textarea rows={4} className="border-gray-200 focus:border-orange-400 focus:ring-orange-400" />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
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
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ॐ</span>
                </div>
                <span className="text-3xl font-bold">Divine Sanctuary</span>
              </div>
              <p className="text-xl mb-6 text-gray-300">{"Peace • Wisdom • Devotion • Unity"}</p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-400">
                {
                  "© 2024 Divine Sanctuary. All rights reserved. May all beings find peace, happiness, and spiritual fulfillment."
                }
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
