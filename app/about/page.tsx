"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8e4df] to-[#f5f2ee]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 pt-16 pb-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">✦</span>
            </div>
            <span className="text-sm text-foreground">Built from lived experience</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">Why I Built Levitate</h1>

          <p className="text-xl text-muted-foreground leading-relaxed">I'm Los Verdan, and this is my story.</p>
        </div>
      </motion.section>

      {/* Story Content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I dropped out of computer science in my junior year. Not because I couldn't handle the work—I was good
                at it. I dropped out because I couldn't handle myself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mental health issues I'd been ignoring for years finally caught up with me. I thought leaving school
                would give me space to heal. Then my father died, and everything went dark.
              </p>
            </div>
          </motion.div>

          {/* The Turning Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#f5d5c8] to-[#e8c5b5] rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                I tried everything—therapy I couldn't afford, meditation apps that felt empty, breathing exercises that
                stopped working when I needed them most. Nothing was built for someone whose mind refused to cooperate.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I wasn't alone. I watched people I loved struggle with the same broken tools. So on a night when I
                couldn't sleep, overwhelmed and desperate, I opened my laptop and started coding. Not to build a
                business. To survive.
              </p>
            </div>
          </motion.div>

          {/* The Birth of Levitate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Levitate became my lifeline. An app that met me exactly where I was—anxious at 3 AM, depressed on
                Tuesday afternoon, or just trying to make it through the day. It listened to my patterns, adapted to my
                state, and gave me what I needed in that exact moment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I haven't figured it all out. I'm still finding myself in all of this, still processing, still learning
                to live with a mind that doesn't always cooperate. But Levitate helps me. One day at a time. One session
                at a time.
              </p>
            </div>
          </motion.div>

          {/* One Day at a Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#f5d5c8] to-[#e8c5b5] rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                What started as my survival tool is now here for you. If you're struggling, if nothing else has worked,
                if you just need something that understands—this is for you. Rise as you are, and lift above the noise.
              </p>
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center"
          >
            <p className="text-muted-foreground text-lg">— Los Verdan</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to start your own journey?</h3>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Download Levitate
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
