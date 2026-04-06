import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";
import { motion } from "motion/react";
import type { NewsItem } from "../backend.d";
import { useNewsItems } from "../hooks/useQueries";

const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "Massive Phishing Campaign Targets Microsoft 365 Users",
    summary:
      "Security researchers have uncovered a sophisticated phishing campaign targeting over 10,000 organizations using convincing Microsoft 365 login pages to harvest credentials.",
    date: "Mar 18, 2026",
    category: "Phishing",
  },
  {
    title: "LockBit Ransomware Gang Resurfaces with New Variant",
    summary:
      "The notorious LockBit ransomware group has launched a new version targeting healthcare organizations, demanding ransoms up to $50 million for encrypted patient data.",
    date: "Mar 15, 2026",
    category: "Ransomware",
  },
  {
    title: "Major Data Breach Exposes 200M User Records",
    summary:
      "A popular social platform suffered a breach exposing email addresses, phone numbers, and hashed passwords. Users urged to change passwords and enable 2FA immediately.",
    date: "Mar 12, 2026",
    category: "Data Breach",
  },
  {
    title: "AI-Powered Deepfakes Used in CEO Fraud Scams",
    summary:
      "Cybercriminals are using AI voice cloning and deepfake videos to impersonate executives in video calls, tricking finance teams into authorizing fraudulent wire transfers.",
    date: "Mar 10, 2026",
    category: "Social Engineering",
  },
  {
    title: "Critical Zero-Day Vulnerability Found in Chrome Browser",
    summary:
      "Google has released an emergency patch for a critical zero-day exploit actively being used to execute malicious code on users' machines through specially crafted web pages.",
    date: "Mar 8, 2026",
    category: "Vulnerability",
  },
  {
    title: "FBI Warns of Rising QR Code Scams in Public Places",
    summary:
      "Criminals are placing fake QR codes over legitimate ones in parking lots, restaurants, and public areas to redirect victims to phishing sites that steal payment information.",
    date: "Mar 5, 2026",
    category: "Scam",
  },
];

const categoryColors: Record<string, string> = {
  Phishing: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Ransomware: "bg-red-500/20 text-red-400 border-red-500/30",
  "Data Breach": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Social Engineering": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  Vulnerability: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Scam: "bg-green-500/20 text-green-400 border-green-500/30",
};

export default function LatestNews() {
  const { data: backendNews } = useNewsItems();
  const news =
    backendNews && backendNews.length > 0 ? backendNews : FALLBACK_NEWS;

  return (
    <section id="news" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
            Stay Updated
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            LATEST <span className="cyber-gradient-text">NEWS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Stay informed about the latest cyber threats, attacks, and security
            trends happening around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.slice(0, 6).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              data-ocid={`news.item.${i + 1}`}
              className="bg-cyber-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge
                  className={`text-xs border ${
                    categoryColors[item.category] ??
                    "bg-muted/20 text-muted-foreground border-border"
                  } bg-transparent`}
                >
                  <Tag className="w-2.5 h-2.5 mr-1" />
                  {item.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
              </div>
              <h3 className="font-display font-bold text-sm text-foreground leading-snug group-hover:text-cyber-teal transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {item.summary}
              </p>
              <a
                href="https://www.cisa.gov/news-events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyber-teal hover:underline font-medium"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
