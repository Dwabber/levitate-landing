"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-foreground">Privacy Policy</h1>
          <p className="text-center text-muted-foreground text-sm mb-12">Last Updated: December 28, 2025</p>

          <div className="space-y-8 text-foreground/80">
            <p className="leading-relaxed">
              Levitate ("we", "our", or "us") is dedicated to protecting your privacy. This policy outlines exactly how
              your data is handled.
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">1. Data Collection</h2>
              <p className="mb-3 leading-relaxed">
                We believe in data minimalism. We only collect what is strictly necessary to provide our service:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed inline-block text-left">
                <li>
                  <strong className="text-foreground">Authentication:</strong> Basic account details (email) to manage
                  your secure login.
                </li>
                <li>
                  <strong className="text-foreground">Check-in Data:</strong> Moods and reflections you explicitly log,
                  used solely to generate your personalized sessions.
                </li>
                <li>
                  <strong className="text-foreground">Usage Metrics:</strong> Anonymous data about which features are
                  used, to help us improve the app.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">2. Data Usage</h2>
              <p className="mb-3 leading-relaxed">Your data is used exclusively to:</p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed inline-block text-left md:block">
                <li>Generate personalized meditation scripts and audio.</li>
                <li>Sync your progress across your devices.</li>
                <li>Provide customer support when requested.</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We do <strong className="text-foreground">not</strong> sell your data to any third parties or
                advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">3. Security</h2>
              <p className="leading-relaxed">
                All data is encrypted in transit (SSL) and at rest using industry-standard protocols. Our database
                provided by Supabase ensures high-security standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">4. Your Rights</h2>
              <p className="leading-relaxed">
                You have full ownership of your data. You may request a complete export or deletion of your data at any
                time by contacting us at{" "}
                <a href="mailto:jiggsdwabber@gmail.com" className="text-primary font-semibold hover:underline">
                  jiggsdwabber@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions regarding your privacy, please contact us at{" "}
                <a href="mailto:jiggsdwabber@gmail.com" className="text-primary font-semibold hover:underline">
                  jiggsdwabber@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
