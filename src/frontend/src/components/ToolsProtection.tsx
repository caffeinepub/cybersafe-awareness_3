import { Globe, Key, Shield, Wifi } from "lucide-react";
import { motion } from "motion/react";

const tools = [
  {
    icon: Shield,
    title: "Antivirus Software",
    description:
      "Protects your device from malware, viruses, trojans, and ransomware by scanning files and monitoring system activity in real-time.",
    examples: ["Bitdefender", "Malwarebytes", "Norton 360", "Windows Defender"],
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: Key,
    title: "Password Manager",
    description:
      "Securely generates, stores, and auto-fills strong unique passwords for every account so you never have to reuse passwords or forget them.",
    examples: ["Bitwarden", "1Password", "Dashlane", "LastPass"],
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Wifi,
    title: "VPN (Virtual Private Network)",
    description:
      "Encrypts your internet traffic and hides your IP address, making it safe to browse on public WiFi and protecting your privacy online.",
    examples: ["ProtonVPN", "Mullvad", "NordVPN", "ExpressVPN"],
    color: "text-cyber-teal",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Globe,
    title: "Browser Safety Tools",
    description:
      "Extensions and settings that block ads, trackers, malicious sites, and phishing attempts to keep your browsing experience private and secure.",
    examples: [
      "uBlock Origin",
      "Privacy Badger",
      "HTTPS Everywhere",
      "Brave Browser",
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
];

export default function ToolsProtection() {
  return (
    <section id="tools" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
            Recommended Tools
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            TOOLS & <span className="cyber-gradient-text">PROTECTION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The right tools can drastically reduce your attack surface. These
            are the essentials every user should have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`tools.item.${i + 1}`}
              className="bg-cyber-card border border-border rounded-xl p-5 flex flex-col gap-4 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-10 h-10 rounded-xl border ${tool.bg} flex items-center justify-center`}
              >
                <tool.icon className={`w-5 h-5 ${tool.color}`} />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className="text-xs text-cyber-teal font-semibold mb-2">
                  Recommended Tools
                </div>
                <div className="flex flex-wrap gap-1">
                  {tool.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-xs bg-border/50 border border-border rounded px-2 py-0.5 text-muted-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
