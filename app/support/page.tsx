"use client"

import { motion } from "framer-motion"
import { MessageCircleQuestion, Mail, CreditCard, Volume2, Shield, Smartphone, RefreshCw, Sparkles, Moon, Database, Wifi } from "lucide-react"

export default function SupportPage() {
  const faqs = [
    // Subscription & Billing
    {
      category: "Subscription",
      icon: <CreditCard className="w-5 h-5" />,
      question: "How do I cancel my subscription?",
      answer: "Manage this directly via your Apple ID settings. Go to Settings > Your Name > Subscriptions on your iPhone."
    },
    {
      category: "Subscription",
      icon: <Sparkles className="w-5 h-5" />,
      question: "What's included in the free version?",
      answer: "Quick Resets (3-5 min sessions), your Living Journal, Progress Insights, and all Home Screen Widgets are completely free. Forever."
    },
    {
      category: "Subscription",
      icon: <CreditCard className="w-5 h-5" />,
      question: "What does Levitate Plus include?",
      answer: "Living Check-Ins, unlimited sessions, Sleep Drift (10-45 min), Focus Tunnel, personalized guidance, and premium soundscapes."
    },
    // Technical Issues
    {
      category: "Technical",
      icon: <Volume2 className="w-5 h-5" />,
      question: "Why is audio not playing?",
      answer: "Check your \"Silent Mode\" switch (on the side of your iPhone) and ensure your system volume is turned up. Also check if Bluetooth is connected to another device."
    },
    {
      category: "Technical",
      icon: <Wifi className="w-5 h-5" />,
      question: "Sessions are taking too long to load",
      answer: "Sessions are generated in real-time, which requires an internet connection. Try switching between WiFi and cellular, or move to an area with better signal."
    },
    {
      category: "Technical",
      icon: <Smartphone className="w-5 h-5" />,
      question: "The app keeps crashing",
      answer: "Try force-closing the app and reopening it. If issues persist, delete and reinstall the app—your data is safely stored in your account."
    },
    // Privacy & Data
    {
      category: "Privacy",
      icon: <Shield className="w-5 h-5" />,
      question: "Is my data secure?",
      answer: "Absolutely. All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We use Supabase with SOC2 Type II compliance. Your peace of mind is our priority."
    },
    {
      category: "Privacy",
      icon: <Database className="w-5 h-5" />,
      question: "Can I delete all my data?",
      answer: "Yes. Contact us at jiggsdwabber@gmail.com and we'll permanently delete your account and all associated data within 7 days."
    },
    {
      category: "Privacy",
      icon: <Shield className="w-5 h-5" />,
      question: "Do you sell my data?",
      answer: "Never. We don't sell, rent, or share your data with third parties for marketing. Period."
    },
    // Features
    {
      category: "Features",
      icon: <Moon className="w-5 h-5" />,
      question: "How does Sleep Drift work?",
      answer: "Sleep Drift creates a guided session that gradually fades as you drift off. It's designed for racing minds at 2AM—matching your breath until you don't need it anymore."
    },
    {
      category: "Features",
      icon: <Sparkles className="w-5 h-5" />,
      question: "Why does each session feel different?",
      answer: "Every session is generated uniquely for you based on what you share during check-in. No two sessions are ever exactly the same."
    },
  ]

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
                  <p className="text-sm text-muted-foreground">Quick answers to frequent questions.</p>
                </div>
                <div className="md:w-2/3 space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/50 rounded-2xl p-5 border border-white/60">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                          {faq.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-primary/70 uppercase tracking-wide">{faq.category}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  <h2 className="text-xl font-bold text-foreground mb-2">Still Need Help?</h2>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours.</p>
                </div>
                <div className="md:w-2/3 prose prose-stone opacity-90">
                  <p className="leading-relaxed text-foreground/80 mb-6">
                    Can't find what you're looking for? Our team is ready to assist with anything—technical issues, account questions, or just feedback.
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
            <p className="text-muted-foreground/60 text-xs mt-4">© 2026 Levitate. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
