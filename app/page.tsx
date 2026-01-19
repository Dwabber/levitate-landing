"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Brain, Moon, Lock } from "lucide-react"
import { useRef } from "react"
import { Carousel3D } from "./components/carousel-3d"

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [200, -400])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
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

        {/* App Screens 3D Carousel */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-5xl mx-auto relative mt-4"
        >
          <Carousel3D />
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
    </div>
  )
}
