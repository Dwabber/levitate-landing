"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
    { src: "/home.png", alt: "Home Screen" },
    { src: "/emotion.png", alt: "Emotion Check-in" },
    { src: "/player.png", alt: "Session Player" },
]

export function Carousel3D() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-rotate with reset on interaction
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const getPosition = (index: number) => {
        if (index === currentIndex) return "center"
        if (index === (currentIndex + 1) % images.length) return "right"
        if (index === (currentIndex - 1 + images.length) % images.length) return "left"
        return "hidden"
    }

    const getVariant = (position: string) => {
        if (position === "center") {
            return {
                x: 0,
                scale: 1,
                zIndex: 20,
                opacity: 1,
                filter: "blur(0px)",
                rotateY: 0,
                transition: {
                    zIndex: { delay: 0 }, // Instant rise to top
                }
            }
        } else if (position === "left") {
            return {
                x: "-60%",
                scale: 0.8,
                zIndex: 10,
                opacity: 0.6,
                filter: "blur(2px)",
                rotateY: 15,
                transition: {
                    zIndex: { delay: 0.8 }, // Wait until animation completes to drop
                }
            }
        } else if (position === "right") {
            return {
                x: "60%",
                scale: 0.8,
                zIndex: 10,
                opacity: 0.6,
                filter: "blur(2px)",
                rotateY: -15,
                transition: {
                    zIndex: { delay: 0.8 }, // Wait until animation completes to drop
                }
            }
        }
        return {
            x: 0,
            scale: 0.5,
            opacity: 0,
            zIndex: 0,
        }
    }

    return (
        <div className="relative w-full max-w-[1000px] h-[600px] mx-auto flex items-center justify-center perspective-[1000px]">
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence initial={false}>
                    {images.map((img, index) => {
                        const position = getPosition(index)
                        return (
                            <motion.div
                                key={img.src}
                                initial="hidden"
                                animate={getVariant(position)}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="absolute w-[280px] md:w-[320px]"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Manual Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-20 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-foreground"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-20 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors text-foreground"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Shadow */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-black/20 blur-3xl rounded-full z-0" />

            {/* Progress Indicator */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-[800ms] ${index === currentIndex
                            ? "w-8 bg-primary"
                            : "w-2 bg-primary/20 hover:bg-primary/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
