import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Book, Heart, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme2() {
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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ॐ</span>
              </div>
              <span className="text-xl font-bold text-orange-600">Shanti Mandir</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-orange-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="#about" className="hover:text-orange-600 transition-colors duration-300">
                About
              </Link>
              <Link href="#services" className="hover:text-orange-600 transition-colors duration-300">
                Services
              </Link>
              <Link href="#teachings" className="hover:text-orange-600 transition-colors duration-300">
                Teachings
              </Link>
              <Link href="#events" className="hover:text-orange-600 transition-colors duration-300">
                Events
              </Link>
              <Link href="#contact" className="hover:text-orange-600 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Temple"
                alt="Temple"
                width={200}
                height={200}
                className="mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
              Shanti Mandir
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {"A sacred space for spiritual growth, divine connection, and inner peace"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
                Visit Temple
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">Our Philosophy</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {
                "Rooted in ancient wisdom, we embrace the eternal principles of Dharma, Artha, Kama, and Moksha, guiding souls toward spiritual enlightenment and divine realization."
              }
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Devotion</h3>
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Cultivating pure love and surrender to the Divine through prayer, meditation, and selfless service."
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Book className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Wisdom</h3>
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Studying sacred texts and ancient teachings to understand the deeper truths of existence and consciousness."
                  }
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  {
                    "Building a harmonious sangha where all beings can grow together in spiritual understanding and compassion."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">Sacred Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {
                "We offer various spiritual services to support your journey toward divine connection and inner transformation."
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Daily Puja", desc: "Morning and evening prayers with traditional rituals", icon: "🕉️" },
              { title: "Meditation", desc: "Guided meditation sessions for inner peace", icon: "🧘" },
              { title: "Ceremonies", desc: "Sacred ceremonies for life's important moments", icon: "🎭" },
              { title: "Counseling", desc: "Spiritual guidance and life counseling", icon: "💫" },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-orange-600">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">Connect With Us</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {
                "We welcome you to visit our temple, join our community, or reach out with any questions about our spiritual practices."
              }
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-600">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-orange-500" />
                      <span className="text-gray-700">123 Spiritual Lane, Sacred City, SC 12345</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-orange-500" />
                      <span className="text-gray-700">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-orange-500" />
                      <span className="text-gray-700">info@shantimandir.org</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-orange-600">Temple Hours</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 5:00 AM - 9:00 PM</p>
                      <p>Special Events: As scheduled</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-white/90 backdrop-blur-sm border-orange-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-600">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition-all duration-300 transform hover:scale-105">
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
      <footer className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ॐ</span>
              </div>
              <span className="text-2xl font-bold">Shanti Mandir</span>
            </div>
            <p className="text-lg mb-4 opacity-90">{"Peace • Wisdom • Devotion"}</p>
            <p className="text-sm opacity-75">
              {"© 2024 Shanti Mandir. All rights reserved. May all beings find peace and happiness."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
