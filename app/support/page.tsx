"use client"

import { motion } from "framer-motion"
import { MessageCircleQuestion, Mail, CreditCard, Volume2 } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4c5b5]/20 rounded-full blur-3xl opacity-60" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-white/40 backdrop-blur-md shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary/80 tracking-wide uppercase">Support Center</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              We're here to <span className="text-primary italic">Help</span>.
            </h1>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Your peace of mind is our priority. Find answers or reach out directly below.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="space-y-16">
              {/* Section 1: FAQs */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <MessageCircleQuestion className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Common Questions</h2>
                  <p className="text-sm text-muted-foreground">Quick solutions.</p>
                </div>
                <div className="md:w-2/3 space-y-8">
                  <div className="bg-white/50 rounded-2xl p-6 border border-white/60">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">How do I cancel my subscription?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Manage this directly via your Apple ID settings. Go to <strong>Settings &gt; Your Name &gt; Subscriptions</strong> on your iPhone.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6 border border-white/60">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Why is audio not playing?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Check your "Silent Mode" switch (on the side of your iPhone) and ensure your system volume is turned up.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 2: Contact */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Direct Support</h2>
                  <p className="text-sm text-muted-foreground">Human assistance.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-6">
                    If you haven't found what you're looking for, our team is ready to assist. We typically respond within 24 hours.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:jiggsdwabber@gmail.com"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all group"
                  >
                    <Mail className="w-5 h-5" />
                    Email Support
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-6 mt-4">
              <a href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-muted-foreground/60 text-xs mt-4">© 2025 Levitate. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
