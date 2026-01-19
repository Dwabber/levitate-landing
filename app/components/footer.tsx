import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">L</span>
                        </div>
                        <div>
                            <div className="font-bold text-foreground">LEVITATE</div>
                            <div className="text-xs text-muted-foreground">© 2025 Levitate</div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-8 text-sm">
                        <a
                            href="mailto:jiggsdwabber@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Support
                        </a>
                        <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
