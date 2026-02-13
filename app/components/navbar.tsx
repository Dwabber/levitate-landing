"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Moon, Lock, Menu, X } from "lucide-react"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <>
            <header className="border-b border-border/30 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        </div>
                        <span className="font-bold text-xl text-foreground">LEVITATE</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <Link
                            href="/#features"
                            className={`transition-colors ${isActive("/#features") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                                }`}
                        >
                            Features
                        </Link>
                        <Link
                            href="/about"
                            className={`transition-colors ${isActive("/about") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/support"
                            className={`transition-colors ${isActive("/support") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                                }`}
                        >
                            Support
                        </Link>
                        <Link
                            href="/privacy"
                            className={`transition-colors ${isActive("/privacy") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                                }`}
                        >
                            Privacy
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#"
                            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity hidden md:block"
                        >
                            Download App
                        </motion.a>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Slide-over Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-card/85 backdrop-blur-md border-l border-border/30 shadow-2xl z-50 md:hidden p-6 flex flex-col"
                        >
                            {/* Header with Close Button */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-bold text-xl text-foreground">Menu</span>
                                <button
                                    className="p-2 -mr-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-2">
                                <Link
                                    href="/#features"
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors font-medium ${isActive("/#features") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Brain className="w-5 h-5" />
                                    </div>
                                    Features
                                </Link>
                                <Link
                                    href="/about"
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors font-medium ${isActive("/about") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Moon className="w-5 h-5" />
                                    </div>
                                    About Levitate
                                </Link>
                                <Link
                                    href="/support"
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors font-medium ${isActive("/support") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    Support
                                </Link>
                                <Link
                                    href="/privacy"
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-colors font-medium ${isActive("/privacy") ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="text-lg font-bold">P</span>
                                    </div>
                                    Privacy Policy
                                </Link>
                            </nav>

                            <div className="mt-auto pt-8">
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                                >
                                    Download App
                                </a>
                                <p className="text-center text-xs text-muted-foreground mt-4">v1.0.0 • iOS only</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
