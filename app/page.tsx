"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Brain, Moon, Lock, Menu, X } from "lucide-react"
import { useRef, useState } from "react"

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [200, -400])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
      {/* Header Navigation */}
      <header className="border-b border-border/30 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl text-foreground">LEVITATE</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="/privacy" className="text-foreground hover:text-primary transition-colors">
              Privacy
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity hidden md:block"
            >
              Download App
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-over Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-card/85 backdrop-blur-md border-l border-border/30 shadow-2xl z-50 md:hidden p-6 flex flex-col"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl text-foreground">Menu</span>
                <button
                  className="p-2 -mr-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2">
                <a
                  href="#features"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Brain className="w-5 h-5" />
                  </div>
                  Features
                </a>
                <a
                  href="/about"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Moon className="w-5 h-5" />
                  </div>
                  About Levitate
                </a>
                <a
                  href="/support"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Lock className="w-5 h-5" />
                  </div>
                  Support
                </a>
                <a
                  href="/privacy"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-lg font-bold">P</span>
                  </div>
                  Privacy Policy
                </a>
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href="#"
                  className="flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                >
                  Download App
                </a>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  v1.0.0 • iOS only
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="container mx-auto px-6 pt-16 pb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm">
          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">✦</span>
          </div>
          <span className="text-sm text-foreground">The first bio-adaptive meditation app</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-tight">
          <span className="text-primary">Rise </span>
          <span className="relative inline-block">
            <span className="text-primary">as you are</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C50 2.5 150 2.5 199 5.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
          <br />
          with Mental Wellness
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Most apps play you a recording. Levitate <strong>listens</strong>. Experience the world's first AI that
          generates a unique session every time—adapting to your mood, bio-data, and needs in real-time.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 bg-[#000000] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-opacity hover:opacity-90"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-80">Download on the</div>
              <div className="text-base font-semibold -mt-0.5">App Store</div>
            </div>
          </motion.a>
        </div>

        {/* iPhone Mockup */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-sm mx-auto relative"
        >
          {/* iPhone 17 Pro Frame */}
          <div className="relative aspect-[9/19.5] rounded-[3.5rem] border-[12px] border-[#0a0a0a] bg-[#0a0a0a] shadow-2xl overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[#0a0a0a] rounded-[2rem] z-10 shadow-inner" />

            {/* Power Button */}
            <div className="absolute right-[-12px] top-[120px] w-[4px] h-[80px] bg-[#0a0a0a] rounded-l-sm" />

            {/* Volume Buttons */}
            <div className="absolute left-[-12px] top-[100px] w-[4px] h-[50px] bg-[#0a0a0a] rounded-r-sm" />
            <div className="absolute left-[-12px] top-[170px] w-[4px] h-[50px] bg-[#0a0a0a] rounded-r-sm" />

            {/* Screen */}
            <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                <div className="text-center space-y-4 px-8">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">L</span>
                  </div>
                  <div className="text-white/40 text-sm font-medium">Replace with app screenshot</div>
                  <div className="text-white/20 text-xs">Add your Levitate app screenshot here</div>
                </div>
              </div>
              {/* Screen Glare Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Screen Reflection */}
            <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Shadow underneath iPhone */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-24 bg-black/20 blur-3xl rounded-full" />
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Makes Us Different</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for real people with real minds—messy, unpredictable, and perfectly human
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">The Anti-App</h3>
            <p className="text-muted-foreground leading-relaxed">
              No scrolling. No searching. Just open the app, and our AI instantly generates the perfect session for your
              exact mental state.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Moon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Sleep Engineering</h3>
            <p className="text-muted-foreground leading-relaxed">
              Not just white noise. Dynamic, slowing rhythms backed by Cognitive Behavioral Therapy (CBT-I) to unstick
              your mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Private by Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your thoughts are yours. All journal entries and mood data are encrypted. We sell nothing to advertisers.
              Ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <div>
                <div className="font-bold text-foreground">LEVITATE</div>
                <div className="text-xs text-muted-foreground">© 2025 Levitate</div>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <a
                href="mailto:jiggsdwabber@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
