"use client"

import { motion } from "framer-motion"
import { CloudRain, Sparkles, Code, User, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d4c5b5]/20 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Why I Built <span className="text-primary italic">Levitate</span>.
            </h1>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              I'm Los Verdan, and this isn't just an app. It's my survival strategy.
            </p>
          </div>

          {/* Story Container */}
          <div className="space-y-8">
            {/* Chapter 1: The Fall */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary flex-shrink-0">
                  <CloudRain className="w-6 h-6" />
                </div>
                <div className="prose prose-stone prose-lg opacity-90 text-foreground/80">
                  <h3 className="text-xl font-bold text-foreground mt-0 mb-4">The Breaking Point</h3>
                  <p>
                    I dropped out of computer science in my junior year. Not because I couldn't handle the work—I was
                    good at it. I dropped out because I couldn't handle myself.
                  </p>
                  <p>
                    Mental health issues I'd been ignoring for years finally caught up with me. I thought leaving school
                    would give me space to heal. Then my father died, and everything went dark.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chapter 2: The Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="prose prose-stone prose-lg opacity-90 text-foreground/80">
                  <h3 className="text-xl font-bold text-foreground mt-0 mb-4">Finding Silence</h3>
                  <p>
                    I tried everything—therapy I couldn't afford, meditation apps that felt empty, breathing exercises
                    that stopped working when I needed them most. Nothing was built for someone whose mind refused to
                    cooperate.
                  </p>
                  <p>
                    So on a night when I couldn't sleep, overwhelmed and desperate, I opened my laptop and started
                    coding. Not to build a business. To survive.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chapter 3: The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-3 bg-primary rounded-2xl text-white flex-shrink-0 shadow-lg shadow-primary/20">
                  <Code className="w-6 h-6" />
                </div>
                <div className="prose prose-stone prose-lg opacity-90 text-foreground/80">
                  <h3 className="text-xl font-bold text-foreground mt-0 mb-4">The Code</h3>
                  <p>
                    Levitate became my lifeline. An app that met me exactly where I was—anxious at 3 AM, or depressed on
                    a Tuesday afternoon. It listened to my patterns, adapted to my state, and gave me what I needed in
                    that exact moment.
                  </p>
                  <p>
                    I haven't figured it all out. I'm still processing, still learning to live with a mind that doesn't
                    always cooperate. But Levitate helps me, one session at a time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center pt-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">.</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                What started as my survival tool is now here for you. If you're struggling, if nothing else has worked—this
                is for you. , and lift above the noise.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all"
              >
                Start Your Journey
              </motion.a>
              <p className="mt-8 text-sm text-muted-foreground font-medium">— Los Verdan</p>
            </motion.div>
          </div>

          {/* Footer Info */}
          <div className="mt-20 border-t border-black/5 pt-12 text-center">
            <div className="flex justify-center gap-6">
              <a href="/support" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Support
              </a>
              <a href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
            <p className="text-muted-foreground/60 text-xs mt-4">© 2025 Levitate. Built with heart.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
