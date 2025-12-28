"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-12 pb-8 border-b border-border/30">
            <a href="/" className="inline-flex items-center gap-2 mb-8 group">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                LEVITATE
              </span>
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-foreground">Terms of Service</h1>
          <p className="text-center text-muted-foreground text-sm mb-12">Last Updated: December 28, 2025</p>

          <div className="space-y-8 text-foreground/80">
            <p className="leading-relaxed">
              By downloading or using Levitate ("the App"), you agree to the following terms and conditions.
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">
                1. Description of Service
              </h2>
              <p className="leading-relaxed">
                Levitate is a generative AI tool designed for meditation, focus, and relaxation. While we strive to
                provide helpful guidance, Levitate is not a medical device and is not a substitute for professional
                mental health therapy or medical advice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">2. Subscriptions</h2>
              <p className="mb-3 leading-relaxed">
                Levitate provides access to premium features via auto-renewing subscriptions.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 leading-relaxed">
                <li>Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
                <li>
                  Subscription automatically renews unless it is canceled at least 24 hours before the end of the
                  current period.
                </li>
                <li>
                  Your account will be charged for renewal within 24 hours prior to the end of the current period.
                </li>
                <li>
                  You can manage and cancel your subscriptions by going to your App Store account settings after
                  purchase.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                The visual interfaces, graphics, design, compilation, information, and computer code are the property of
                Levitate. You retain no rights to the AI models used to generate content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">4. User Conduct</h2>
              <p className="leading-relaxed">
                You agree not to misuse the App or help anyone else to do so. Accessing the App through authorized means
                is the only allowed usage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">5. Termination</h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your access to the Service at any time, for any reason,
                including if we reasonably believe you have violated these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wide">6. Contact</h2>
              <p className="leading-relaxed">
                If you have any questions regarding these terms, please contact us at{" "}
                <a href="mailto:jiggsdwabber@gmail.com" className="text-primary font-semibold hover:underline">
                  jiggsdwabber@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/30 text-center">
            <div className="flex items-center justify-center gap-6 text-sm mb-4">
              <a href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Levitate</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
