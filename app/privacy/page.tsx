"use client"

import { motion } from "framer-motion"
import { Database, Eye, Lock, ShieldCheck, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-60" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-white/40 backdrop-blur-md shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary/80 tracking-wide uppercase">
                Transparency Report
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Your Privacy is <span className="text-primary italic">Sacred</span>.
            </h1>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We believe mental clarity requires a safe space. Here is exactly how we protect yours.
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="space-y-16">
              {/* Section 1: Collection */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Database className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Data Collection</h2>
                  <p className="text-sm text-muted-foreground">Minimalism by design.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-4">
                    We only collect what is strictly necessary to power your seamless experience. We categorize this into
                    three focused tiers:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Identity:</strong> Your email and secure login
                        credentials.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Reflection:</strong> The moods and journal
                        entries you strictly choose to save.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Evolution:</strong> Anonymous usage patterns
                        that help us refine the app's intuition.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 2: Usage */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">How We Use It</h2>
                  <p className="text-sm text-muted-foreground">Purpose-driven logic.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-4">
                    Your data serves one master: **You.** We strictly use your inputs to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        Compose personalized meditation scripts in real-time.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">Sync your journey across all your devices.</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/80 font-medium">
                      We strictly <strong>never</strong> sell or trade your personal data to third parties, advertisers,
                      or data brokers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 3: Security */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Bank-Grade Security</h2>
                  <p className="text-sm text-muted-foreground">Encrypted by default.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80">
                    We employ end-to-end industry standards. Your data is encrypted in transit using **TLS 1.3** and at
                    rest using **AES-256**. Our infrastructure is powered by Supabase, adhering to strict SOC2
                    compliance standards.
                  </p>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 4: Rights */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Total Control</h2>
                  <p className="text-sm text-muted-foreground">It's your data.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-6">
                    You retain absolute sovereignty over your digital footprint. At any moment, you may request a full
                    export or complete deletion of your account.
                  </p>
                  <a
                    href="mailto:jiggsdwabber@gmail.com"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity text-sm group"
                  >
                    Exercise your rights
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm font-medium">Last Updated: December 28, 2025</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="/support" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Contact Support
              </a>
              <a href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
