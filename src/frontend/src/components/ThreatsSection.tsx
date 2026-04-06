import {
  Bug,
  Fingerprint,
  Mail,
  MessageSquareWarning,
  Terminal,
  UserX,
} from "lucide-react";
import { motion } from "motion/react";

const threats = [
  {
    icon: Mail,
    title: "Phishing",
    description:
      "Deceptive emails, texts, or websites that trick you into revealing passwords, credit card numbers, or personal information by pretending to be a trusted source.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Bug,
    title: "Malware",
    description:
      "Malicious software including viruses, trojans, and spyware designed to damage your device, steal data, or give attackers unauthorized access to your system.",
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
    borderColor: "border-red-500/30",
  },
  {
    icon: Terminal,
    title: "Hacking",
    description:
      "Unauthorized access to computers or networks by exploiting security vulnerabilities, weak passwords, or software flaws to steal data or cause damage.",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Fingerprint,
    title: "Identity Theft",
    description:
      "Criminals steal your personal information (SSN, credit cards, passwords) to impersonate you, open fraudulent accounts, or drain your finances.",
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
  },
  {
    icon: MessageSquareWarning,
    title: "Social Engineering",
    description:
      "Psychological manipulation tactics that exploit human trust rather than technology — like pretending to be IT support to get your login credentials.",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400",
    borderColor: "border-green-500/30",
  },
  {
    icon: UserX,
    title: "Ransomware",
    description:
      "A type of malware that encrypts your files and demands payment to restore access. Hospitals, businesses, and individuals have lost millions to these attacks.",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
  },
];

export default function ThreatsSection() {
  return (
    <section
      id="threats"
      className="py-24 px-4 sm:px-6"
      style={{ background: "oklch(0.12 0.016 235)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
            Cyber Threats
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            COMMON <span className="cyber-gradient-text">THREATS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Understanding threats is the first step to protecting yourself. Here
            are the most common cyberattacks explained in plain language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {threats.map((threat, i) => (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`threats.item.${i + 1}`}
              className={`bg-cyber-card border ${threat.borderColor} rounded-xl p-6 hover:border-opacity-60 transition-all hover:-translate-y-1`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${threat.color} flex items-center justify-center mb-4`}
              >
                <threat.icon className={`w-5 h-5 ${threat.iconColor}`} />
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-2">
                {threat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {threat.description}
              </p>
              <a
                href="#resources"
                className="inline-block mt-4 text-xs text-cyber-teal hover:underline font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
