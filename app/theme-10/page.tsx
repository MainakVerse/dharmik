import { Lora } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const lora = Lora({ subsets: ["latin"] })

export default function Theme10() {
  return (
    <div
      className={`min-h-screen bg-gray-200 text-black ${lora.className}`}
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white border-2 border-gray-400 text-black hover:bg-gray-100"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Themes
          </Button>
        </Link>
      </div>

      {/* 90s Style Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white border-b-4 border-yellow-400 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="w-12 h-12 bg-yellow-400 border-2 border-white flex items-center justify-center">
                <span className="text-blue-800 font-bold text-xl">🕉</span>
              </div>
              <h1
                className="text-3xl font-bold"
                style={{
                  fontFamily: "Arial, sans-serif",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.5)",
                }}
              >
                CYBER SPIRITUAL CENTER
              </h1>
            </div>
            <p className="text-yellow-300 text-sm font-bold">
              ★ Welcome to the Information Superhighway of Enlightenment! ★
            </p>
          </div>

          {/* 90s Navigation Bar */}
          <nav className="mt-4 bg-gray-300 border-2 border-gray-500 p-2">
            <div className="flex justify-center space-x-1">
              {[
                { href: "#home", text: "HOME" },
                { href: "#about", text: "ABOUT" },
                { href: "#services", text: "SERVICES" },
                { href: "#meditation", text: "MEDITATION" },
                { href: "#contact", text: "CONTACT" },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <button
                    className="bg-gray-400 hover:bg-gray-500 border-2 border-gray-600 px-4 py-1 text-black text-sm font-bold transition-colors duration-200"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      boxShadow: "inset 1px 1px 0px rgba(255,255,255,0.5), inset -1px -1px 0px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.text}
                  </button>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* 90s Marquee-style Banner */}
      <div className="bg-yellow-400 border-b-2 border-black py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-pulse">
          <span className="text-black font-bold text-sm">
            ★ ★ ★ WELCOME TO OUR HOMEPAGE! ★ SPIRITUAL AWAKENING IN THE DIGITAL AGE ★ EST. 1995 ★ ★ ★
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-8 bg-white border-b-4 border-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 mb-6 border-2 border-black">
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                  }}
                >
                  🌐 DIGITAL DHARMA 🌐
                </h2>
                <p className="text-sm">Connecting Ancient Wisdom with Modern Technology!</p>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-blue-800"
                style={{
                  fontFamily: "Arial, sans-serif",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                }}
              >
                RETRO SPIRITUAL CENTER
              </h1>

              <div className="bg-gray-100 border-4 border-gray-400 p-6 mb-6">
                <div className="bg-blue-100 border-2 border-blue-400 p-4 mb-4">
                  <p className="text-lg font-bold text-blue-800 mb-2">{"Welcome to our Website!"}</p>
                  <p className="text-sm text-gray-700">
                    {
                      "Experience spiritual growth through the power of the World Wide Web and ancient meditation practices."
                    }
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-bold">Last Updated: December 1999</span>
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 text-sm font-bold border-2 border-black"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    boxShadow: "3px 3px 0px rgba(0,0,0,0.5)",
                  }}
                >
                  🔗 ENTER SITE
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-100 px-6 py-3 text-sm font-bold bg-white"
                  style={{
                    fontFamily: "Arial, sans-serif",
                    boxShadow: "2px 2px 0px rgba(0,0,0,0.3)",
                  }}
                >
                  📖 LEARN MORE
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-300 border-4 border-gray-600 p-4">
                <div className="bg-white border-2 border-gray-400 p-2 mb-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-bold ml-2">spiritual-center.html</span>
                  </div>
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=90s+Website+Screenshot"
                    alt="Retro Spiritual Center"
                    width={400}
                    height={300}
                    className="border border-gray-400"
                  />
                </div>
                <div className="bg-blue-600 text-white p-2 text-center">
                  <span className="text-xs font-bold">🌟 BEST VIEWED IN NETSCAPE NAVIGATOR 🌟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 bg-gradient-to-r from-purple-100 to-blue-100 border-b-4 border-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-red-600 text-white p-3 mb-4 border-2 border-black inline-block">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "Arial, sans-serif" }}>
                🖥️ ABOUT OUR CYBER TEMPLE 🖥️
              </h2>
            </div>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              {
                "Welcome to the future of spirituality! Our temple combines ancient wisdom with cutting-edge 1990s technology to bring you enlightenment through your computer screen."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                title: "DIGITAL MEDITATION",
                desc: "Experience guided meditation through your computer speakers with our revolutionary CD-ROM technology!",
                bgColor: "bg-green-200",
                borderColor: "border-green-600",
              },
              {
                icon: "📧",
                title: "EMAIL PRAYERS",
                desc: "Send your prayers directly to our temple via electronic mail - the future of spiritual communication!",
                bgColor: "bg-blue-200",
                borderColor: "border-blue-600",
              },
              {
                icon: "🌐",
                title: "WEB WISDOM",
                desc: "Browse our collection of spiritual texts and teachings right here on the World Wide Web!",
                bgColor: "bg-yellow-200",
                borderColor: "border-yellow-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`${item.bgColor} border-4 ${item.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white border-4 border-gray-600 p-6 text-center">
            <div className="bg-yellow-400 border-2 border-black p-4 mb-4">
              <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                🎯 OUR MISSION 🎯
              </h3>
            </div>
            <blockquote className="text-lg italic text-gray-800 mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
              {
                '"To bring ancient spiritual wisdom into the digital age, connecting souls across the information superhighway through the power of technology and meditation."'
              }
            </blockquote>
            <p className="text-blue-600 font-bold">- Cyber Temple Mission Statement, 1995</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 bg-white border-b-4 border-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-green-600 text-white p-3 mb-4 border-2 border-black inline-block">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "Arial, sans-serif" }}>
                📞 GET IN TOUCH 📞
              </h2>
            </div>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              {
                "Contact our cyber temple using the latest communication technologies! We're always online and ready to help."
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="bg-gray-100 border-4 border-gray-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
                    📍 TEMPLE COORDINATES
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 border-2 border-black flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                          PHYSICAL LOCATION
                        </h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                          1995 Internet Boulevard, Cyber City, CC 19950
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                          PHONE NUMBER
                        </h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                          1-800-CYBER-95
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 border-2 border-black flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                          EMAIL ADDRESS
                        </h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                          info@cyber-temple.net
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-100 border-2 border-yellow-500 p-4">
                    <h4 className="text-lg font-bold mb-3 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
                      ⏰ ONLINE HOURS
                    </h4>
                    <div className="space-y-2 text-gray-700 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                      <div className="flex justify-between">
                        <span>Digital Meditation</span>
                        <span>24/7 Online</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email Support</span>
                        <span>Mon-Fri 9AM-5PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chat Room</span>
                        <span>Evenings 7PM-10PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Website Updates</span>
                        <span>Weekly</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-blue-100 border-4 border-blue-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-800" style={{ fontFamily: "Arial, sans-serif" }}>
                    📝 SEND MESSAGE
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-bold text-gray-800 mb-2"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          FIRST NAME:
                        </label>
                        <Input className="border-2 border-gray-400 focus:border-blue-500 text-sm p-2" />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-bold text-gray-800 mb-2"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          LAST NAME:
                        </label>
                        <Input className="border-2 border-gray-400 focus:border-blue-500 text-sm p-2" />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-bold text-gray-800 mb-2"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        EMAIL ADDRESS:
                      </label>
                      <Input
                        type="email"
                        className="border-2 border-gray-400 focus:border-blue-500 text-sm p-2"
                        placeholder="yourname@email.com"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-bold text-gray-800 mb-2"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        SUBJECT:
                      </label>
                      <select className="w-full border-2 border-gray-400 px-2 py-2 text-sm focus:border-blue-500">
                        <option>Digital Meditation</option>
                        <option>Email Prayers</option>
                        <option>Web Wisdom</option>
                        <option>Technical Support</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-bold text-gray-800 mb-2"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        MESSAGE:
                      </label>
                      <Textarea
                        rows={4}
                        className="border-2 border-gray-400 focus:border-blue-500 text-sm p-2"
                        placeholder="Type your message here..."
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 text-sm font-bold border-2 border-black"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        boxShadow: "3px 3px 0px rgba(0,0,0,0.5)",
                      }}
                    >
                      📧 SEND EMAIL 📧
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-600 text-white py-6 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-yellow-400 border-2 border-white flex items-center justify-center">
                <span className="text-blue-800 font-bold text-xl">🕉</span>
              </div>
              <div className="text-left">
                <span className="text-xl font-bold block" style={{ fontFamily: "Arial, sans-serif" }}>
                  CYBER SPIRITUAL CENTER
                </span>
                <span className="text-yellow-300 text-xs">EST. 1995 • DIGITAL DHARMA</span>
              </div>
            </div>
            <div className="bg-gray-700 border-2 border-gray-500 p-4 mb-4 max-w-2xl mx-auto">
              <p className="text-sm font-bold mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                {"Connecting Ancient Wisdom with Modern Technology"}
              </p>
              <p className="text-xs text-gray-300">{"Best viewed at 800x600 resolution"}</p>
            </div>
            <div className="flex justify-center space-x-4 text-xs mb-4">
              <span>🌟 Cyber • Digital • Retro • Spiritual 🌟</span>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-4"></div>
            <p className="text-xs text-gray-300" style={{ fontFamily: "Arial, sans-serif" }}>
              {"© 1995-2024 Cyber Spiritual Center. All rights reserved. Webmaster: admin@cyber-temple.net"}
            </p>
            <p className="text-xs text-yellow-300 mt-2">
              {"This site is optimized for Netscape Navigator 3.0+ and Internet Explorer 4.0+"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
