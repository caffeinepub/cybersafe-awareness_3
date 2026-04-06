import {
  BookOpen,
  ClipboardList,
  ExternalLink,
  Search,
  Video,
} from "lucide-react";
import { motion } from "motion/react";

const resources = [
  {
    icon: BookOpen,
    title: "Guides & Articles",
    description:
      "Beginner-friendly written guides on passwords, phishing, malware, and privacy best practices.",
    links: [
      {
        label: "CISA Security Tips",
        url: "https://www.cisa.gov/news-events/news/security-tip-st04-001",
      },
      { label: "StaySafeOnline.org", url: "https://staysafeonline.org" },
      {
        label: "NIST Cybersecurity",
        url: "https://www.nist.gov/cyberframework",
      },
    ],
    color: "text-cyber-teal",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description:
      "Visual learners can follow along with expert-led cybersecurity video courses and tutorials.",
    links: [
      {
        label: "Google's Be Safe Online",
        url: "https://beinternetawesome.withgoogle.com",
      },
      {
        label: "Khan Academy Security",
        url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:online-data-security",
      },
      { label: "YouTube CyberSec", url: "https://youtube.com" },
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: ClipboardList,
    title: "Security Checklists",
    description:
      "Step-by-step checklists to audit and improve your personal, device, and account security settings.",
    links: [
      {
        label: "Personal Security Checklist",
        url: "https://digital-defense.io",
      },
      { label: "EFF Surveillance Self-Defense", url: "https://ssd.eff.org" },
      {
        label: "Security Planner",
        url: "https://securityplanner.consumerreports.org",
      },
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Search,
    title: "Glossary",
    description:
      "Clear definitions for cybersecurity terms from A to Z — no jargon, just plain-language explanations.",
    links: [
      { label: "NIST Glossary", url: "https://csrc.nist.gov/glossary" },
      {
        label: "Techopedia Security",
        url: "https://www.techopedia.com/category/cybersecurity",
      },
      {
        label: "Kaspersky IT Glossary",
        url: "https://www.kaspersky.com/resource-center",
      },
    ],
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
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
            Keep Learning
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            RESOURCES & <span className="cyber-gradient-text">LEARNING</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Free, trusted resources to help you deepen your cybersecurity
            knowledge and protect yourself better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`resources.item.${i + 1}`}
              className="bg-cyber-card border border-border rounded-xl p-5 flex flex-col gap-4 hover:border-primary/30 transition-all"
            >
              <div
                className={`w-10 h-10 rounded-xl border ${res.bg} flex items-center justify-center`}
              >
                <res.icon className={`w-5 h-5 ${res.color}`} />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">
                  {res.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {res.description}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-1.5">
                {res.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyber-teal hover:underline flex items-center gap-1"
                    data-ocid="resources.link"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
