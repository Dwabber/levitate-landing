"use client"

import { motion } from "framer-motion"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How can we help?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're here to ensure your experience is peaceful and seamless.
            </p>
          </div>

          <div className="space-y-8 text-foreground/80">
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Common Questions</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">How do I cancel my subscription?</p>
                  <p className="leading-relaxed">
                    You can manage your subscription directly through your Apple ID settings on your device. Go to
                    Settings &gt; Your Name &gt; Subscriptions.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Why is the audio not playing?</p>
                  <p className="leading-relaxed">
                    Please ensure your device is not in "Silent Mode" (the physical switch on the side of your iPhone)
                    and that your volume is turned up.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="leading-relaxed mb-6">
                If you have feedback or need further assistance, please reach out directly. We aim to respond within 24
                hours.
              </p>

              <div className="text-center">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:jiggsdwabber@gmail.com"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
                >
                  Email Support
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
