"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, Moon, Target, Heart, BookOpen, LayoutGrid } from "lucide-react"
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
        className="container mx-auto px-6 pt-20 pb-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-tight">
          <span className="text-primary">Rise as </span>
          <span className="text-primary relative inline-block">
            you are
            {/* Hand-drawn style underscore */}
            <svg className="absolute w-[110%] h-4 -bottom-2 -left-1 text-primary/80" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12C35 5 120 5 195 12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </h1>

        <p className="text-2xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto mb-8 leading-tight tracking-tight">
          No courses. No classes. Just you.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Not another meditation app. No classes, no scrolling, no libraries. Just a unique session and adaptive environment that meets you exactly where you are—whether you need to unclench, focus, or fly.
        </p>

        {/* App Store Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://apps.apple.com/app/levitate-personal-guidance/id6757069448"
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for minds that <span className="text-primary italic">won't cooperate</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not another meditation app. A companion that understands chaos.
          </p>
        </motion.div>

        {/* Features Grid - 6 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "The Living Check-In",
              tagline: "It knows when you're drowning.",
              description:
                "Not another mood tracker. A conversation. Tell Levitate how you actually feel—messy, contradictory, human—and watch it craft a session that meets you exactly where you are.",
              icon: <Sparkles className="w-6 h-6" />,
            },
            {
              title: "Sleep Drift",
              tagline: "Fall asleep mid-sentence.",
              description:
                "A voice that fades as you do. Designed for racing minds at 2AM, Sleep Drift guides you down, matching your breath until you don't need it anymore.",
              icon: <Moon className="w-6 h-6" />,
            },
            {
              title: "Focus Tunnel",
              tagline: "Silence the noise. Ship the work.",
              description:
                "Deep work demands deep focus. The Focus Tunnel creates a sonic cocoon that blocks distractions and keeps you in flow—with timing that adapts to your rhythm.",
              icon: <Target className="w-6 h-6" />,
            },
            {
              title: "Panic Button",
              tagline: "For the moments you can't breathe.",
              description:
                "Anxiety doesn't wait. Neither do we. One tap and you're in a 3-minute reset designed to ground you before your mind spirals further.",
              icon: <Heart className="w-6 h-6" />,
            },
            {
              title: "Your Living Journal",
              tagline: "Patterns become clarity.",
              description:
                "Every session leaves a trace. Over time, Levitate reveals what triggers you, what grounds you, and how far you've come. Your story, reflected back.",
              icon: <BookOpen className="w-6 h-6" />,
            },
            {
              title: "Home Screen Widgets",
              tagline: "Glance. Stay accountable.",
              description:
                "Five beautiful widgets that live on your home screen: track your streak, see today's intention, and remember why you started. No app required.",
              icon: <LayoutGrid className="w-6 h-6" />,
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-primary font-medium text-sm mb-3 italic">{feature.tagline}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free to Breathe Section */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Free to <span className="text-primary italic">breathe</span>.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The essentials are free. Forever. No paywalls on peace of mind.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 text-left">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                Free Forever
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Here</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Quick Resets (3-5 min)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Living Journal
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Progress Insights
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Home Screen Widgets
                </li>
              </ul>
            </div>

            {/* Plus Tier */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-left">
              <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                Levitate Plus
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Go Deeper</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Living Check-Ins
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Unlimited Sessions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Sleep Drift (10-45 min)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Focus Tunnel
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Personalized Guidance
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Premium Soundscapes
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Origin Story CTA */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-muted-foreground mb-4 text-lg">
            Built by someone who needed it first.
          </p>
          <a
            href="/about"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-2 group"
          >
            Read the story
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your next breath is waiting.
          </h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://apps.apple.com/app/levitate-personal-guidance/id6757069448"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
          >
            Download Free
          </motion.a>
        </motion.div>
      </section>


    </div>
  )
}
