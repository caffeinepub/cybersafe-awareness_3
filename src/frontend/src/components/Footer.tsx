import { Shield } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Common Threats", href: "#threats" },
  { label: "Prevention Tips", href: "#prevention" },
  { label: "Tools & Protection", href: "#tools" },
  { label: "Quiz", href: "#quiz" },
  { label: "Latest News", href: "#news" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cyber-card border-t border-border pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyber-teal" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                CYBER<span className="text-cyber-teal">GUARD</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering individuals with cybersecurity knowledge to navigate
              the digital world safely.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: SiX, href: "https://twitter.com", label: "X/Twitter" },
                {
                  Icon: SiLinkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { Icon: SiGithub, href: "https://github.com", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid="footer.social.link"
                  className="w-8 h-8 rounded-md bg-border/50 border border-border flex items-center justify-center text-muted-foreground hover:text-cyber-teal hover:border-primary/40 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="footer.nav.link"
                  className="text-muted-foreground hover:text-cyber-teal text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Stay Connected
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 contact@cyberguard.io</p>
              <p>📞 +1 (800) CYBER-GD</p>
              <p className="text-cyber-teal font-medium mt-3">
                🛡️ Stay safe, stay informed!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {year} CyberGuard. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-teal hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
