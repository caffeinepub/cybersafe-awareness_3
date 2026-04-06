import { Button } from "@/components/ui/button";
import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Common Threats", href: "#threats" },
  { label: "Tips & Tools", href: "#prevention" },
  { label: "Latest News", href: "#news" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function scrollToQuiz() {
    setMobileOpen(false);
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center glow-teal-sm">
              <Shield className="w-5 h-5 text-cyber-teal" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-foreground">
              CYBER<span className="text-cyber-teal">GUARD</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "_")
                  .replace(/[^a-z0-9_]/g, "")}.link`}
                className="text-muted-foreground hover:text-cyber-teal transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={scrollToQuiz}
              data-ocid="nav.start_quiz.button"
              className="cyber-gradient text-cyber-dark font-bold text-sm px-5 py-2 rounded-full glow-teal hover:opacity-90 transition-all"
            >
              START QUIZ
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.mobile_menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur border-t border-border px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-cyber-teal transition-colors py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToQuiz}
              className="cyber-gradient text-cyber-dark font-bold text-sm w-full rounded-full mt-2"
            >
              START QUIZ
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
