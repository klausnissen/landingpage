"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ExternalLink, School, Home, Handshake, User } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function JuniormesterlaereLanding() {
  const scrollToSignup = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById("tilmeld-dig")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Add this useEffect to enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Juniormesterlære.nu
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8"></nav>
            <button
              onClick={scrollToSignup}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-all duration-200"
            >
              Tilmeld dig i dag
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-emerald-600/5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight mb-8 sm:mb-12 lg:mb-16">
                Juniormesterlære.nu
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mt-6 sm:mt-8">
                Forbind elever, skoler, forældre og virksomheder på en samlet platform for juniormesterlære-forløb.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto font-medium px-4">
                Skab fremtidens arbejdskraft i dag.
              </p>
            </div>

            {/* Launch Info Box - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 xl:-right-16 z-10">
              <div className="bg-[#f9f9f9] rounded-lg p-4 shadow-lg border-l-4 border-emerald-500 w-72 max-w-xs">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="mb-2">
                      <div className="text-gray-700 font-bold text-xl">Lanceres snarest</div>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Vi er i fuld gang med at finpudse de sidste detaljer. Tilmeld dig vores nyhedsbrev herunder, så du
                      er den første, der får besked, når vi går i luften.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version of launch info */}
            <div className="lg:hidden mt-6 mx-4">
              <div className="bg-[#f9f9f9] rounded-lg p-4 shadow-lg border-l-4 border-emerald-500">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="mb-2">
                      <div className="text-gray-700 font-bold text-lg">Lanceres snarest</div>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Vi er i fuld gang med at finpudse de sidste detaljer. Tilmeld dig vores nyhedsbrev herunder!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Juniormesterlære Information Box */}
            <div className="mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-teal-200 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Juniormesterlære indføres officielt i skoleåret 2025/26
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 italic">Kilde: Børne- og Undervisningsministeriet</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Elever i 8.-9. klasse kan være 1-2 dage i praktik
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Resten af tiden fokuseres undervisningen på dansk og matematik
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Eleverne gennemfører FSA og kan optages på EUD uden eux
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-3 border border-teal-100">
                    <p className="text-xs sm:text-sm text-gray-700 mb-2 text-center">
                      Baseret på Undervisningsministeriets retningslinjer for juniormesterlære-forløb
                    </p>
                    <div className="text-center">
                      <Link
                        href="https://www.uvm.dk/erhvervsuddannelser/juniormesterlaere"
                        target="_blank"
                        className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 font-medium transition-colors text-xs sm:text-sm"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Læs mere om juniormesterlære på UVM.dk</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alt-i-én praktikplatform Section */}
      <section id="for-elever" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Alt-i-én praktikplatform</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Juniormesterlære.nu samler alle aspekter af praktikadministration i én brugervenlig platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Cards remain the same but with responsive padding */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <School className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Skolen</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Planlæg og dokumentér praktikforløb med struktur og overblik
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Struktureret planlægning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Automatisk dokumentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Komplet overblik</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Elever</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Hold styr på dit praktikforløb og få overblik over dine opgaver
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Ugeskema</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Se hvad du skal lave</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Se dine fremskridt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Forældre</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Hold dig opdateret om dit barns praktikforløb og fremtid
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Trivsel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Evaluering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Fremtidsplanlægning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Virksomheder</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Modtag praktikanter, evaluer deres arbejde og kommuniker med skolerne og hjemmet
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Praktikant matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Evalueringsværktøjer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Skab fremtidens arbejdskraft</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="tilmeld-dig"
        className="py-12 sm:py-20 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold px-4">Klar til at forme fremtiden sammen?</h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Saml elever, skoler, virksomheder og forældre om juniormesterlære.
            </p>
            <div className="max-w-md mx-auto px-4">
              <form
                action="https://formspree.io/f/xldlwnkn"
                method="POST"
                className="space-y-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Tilmeld dig i dag</h3>
                  <p className="text-white/90 text-sm sm:text-base">Få adgang til Danmarks førende praktikplatform</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Fornavn"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Efternavn"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email adresse"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <select
                    name="role"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                    required
                  >
                    <option value="">Vælg din rolle</option>
                    <option value="Elev">Elev</option>
                    <option value="Lærer">Lærer</option>
                    <option value="Virksomhed">Virksomhed</option>
                    <option value="Forælder">Forælder</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="school"
                    placeholder="Skole/Virksomhed (valgfrit)"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/90 border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="accept"
                    className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm text-white/90">
                    Jeg accepterer{" "}
                    <Link href="#" className="underline hover:text-white">
                      vilkår og betingelser
                    </Link>{" "}
                    og{" "}
                    <Link href="#" className="underline hover:text-white">
                      privatlivspolitik
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-teal-600 hover:bg-gray-100 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors"
                >
                  Opret profil gratis
                </button>

                <p className="text-center text-xs sm:text-sm text-white/80">
                  Allerede medlem?{" "}
                  <Link href="#" className="underline hover:text-white font-medium">
                    Log ind her
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Om os Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">Om os</h2>

            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Juniormesterlære.nu er skabt af lærere, der selv har arbejdet med erhvervspraktik i folkeskolen.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Vi kender udfordringerne ved at koordinere mellem elever, forældre, virksomheder og skoler – og vi har
                derfor udviklet et digitalt værktøj, der gør hele processen enkel og overskuelig.
              </p>

              <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">Vores mission er at:</p>
                <div className="space-y-3 max-w-2xl mx-auto">
                  <div className="flex items-start justify-center space-x-3">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-left">Gøre det nemt for skoler at administrere erhvervspraktik</span>
                  </div>
                  <div className="flex items-start justify-center space-x-3">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-left">Give elever et klart overblik over muligheder og næste skridt</span>
                  </div>
                  <div className="flex items-start justify-center space-x-3">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="text-left">Skabe stærkere samarbejde mellem skole og erhvervsliv</span>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium pt-4">
                Sammen gør vi erhvervspraktikken lettere – og bygger broer mellem skole og erhvervsliv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Juniormesterlære.nu</h3>
              <p className="text-white/90 text-sm sm:text-base">Det smarte værktøj til erhvervspraktik i folkeskolen</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={scrollToSignup}
                className="text-white/90 hover:text-white transition-colors text-sm sm:text-base underline cursor-pointer"
              >
                Kontakt os via kontaktformularen på siden
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6"></div>

            <div className="border-t border-emerald-600 pt-6 mt-8">
              <p className="text-white/80 text-xs sm:text-sm">
                © 2025 Juniormesterlære.nu – Alle rettigheder forbeholdes
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
