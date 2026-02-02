"use client"

import { motion } from "framer-motion"
import { Bot, Clock, Database, Eye, Lock, Server, ShieldCheck, UserCheck, Users } from "lucide-react"

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
                        <strong className="text-foreground font-semibold">Evolution:</strong> Usage patterns and interactions
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
                    Your data serves one master: <strong>You.</strong> We strictly use your inputs to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        Compose personalized meditation scripts using AI in real-time.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">Sync your journey and premium access across all your devices.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">Improve the app experience through anonymized usage analytics.</span>
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

              {/* Section 3: AI & Third-Party Services */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">AI & Third-Party Services</h2>
                  <p className="text-sm text-muted-foreground">Powering your experience.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-4">
                    To deliver personalized meditations, we utilize the following trusted partners:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">AI Content Generation:</strong> We use advanced large language models to compose personalized meditation scripts. Your inputs are processed to generate content but are not stored by AI providers for training.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Voice Synthesis:</strong> AI-powered text-to-speech services bring your meditations to life with natural, calming voices.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Payment Processing:</strong> Subscriptions are managed through Apple's App Store and RevenueCat for secure payment handling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Analytics:</strong> We use PostHog to understand how users interact with the app. This data is anonymized and used solely to improve the experience.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                    <Server className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground/80 font-medium">
                      All meditation content is <strong>AI-generated</strong>. While we strive for quality, generated content may occasionally be imperfect or unexpected.
                    </p>
                  </div>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 4: Security */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Bank-Grade Security</h2>
                  <p className="text-sm text-muted-foreground">Encrypted by default.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-4">
                    Your peace of mind demands serious protection. Here's how we safeguard your data:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Encryption in Transit:</strong> All data transmitted between your device and our servers is protected using TLS 1.3, the latest security protocol.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Encryption at Rest:</strong> Your stored data is encrypted using AES-256, the same standard used by banks and governments.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Secure Infrastructure:</strong> Our backend is powered by Supabase, which maintains SOC2 Type II compliance and undergoes regular security audits.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Authentication:</strong> We use secure token-based authentication with automatic session management to protect your account.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 5: Data Retention */}
              <section className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Data Retention</h2>
                  <p className="text-sm text-muted-foreground">Nothing lingers forever.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-4">
                    We retain your data only as long as necessary:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Account Data:</strong> Retained while your account is active. Deleted within 30 days of account deletion request.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Session History:</strong> Meditation sessions and journals are stored until you choose to delete them or close your account.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">
                        <strong className="text-foreground font-semibold">Analytics:</strong> Anonymized usage data may be retained for up to 2 years for product improvement.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>


              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              {/* Section 6: Rights */}
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
            <p className="text-muted-foreground text-sm font-medium">Last Updated: January 30, 2026</p>
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
