import { Badge } from "@/components/ui/badge";
import { AlertTriangle, DollarSign, Lock, User } from "lucide-react";
import { motion } from "motion/react";

const examples = [
  {
    title: "The Netflix Phishing Scam",
    story:
      "Sarah received an email claiming her Netflix account was suspended. She clicked the link, entered her login and credit card details. The site was fake — her card was charged $850 within hours.",
    consequence: "Financial Loss",
    consequenceColor: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: DollarSign,
  },
  {
    title: "The IT Support Impersonation",
    story:
      "John got a call from 'Microsoft Support' warning his computer had a virus. He allowed remote access. The attacker stole his banking credentials and locked his files with ransomware.",
    consequence: "Identity Theft",
    consequenceColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: User,
  },
  {
    title: "The Public WiFi Trap",
    story:
      "Emma connected to 'Free Airport WiFi' while traveling. An attacker on the same network intercepted her login to her email, then used it to reset her bank password and transfer funds.",
    consequence: "Account Takeover",
    consequenceColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: Lock,
  },
  {
    title: "The Reused Password Disaster",
    story:
      "A popular gaming site was breached. Mark used the same password for his email and gaming account. Hackers accessed his email, reset his Amazon password, and spent $1,200 on gift cards.",
    consequence: "Data Breach",
    consequenceColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: AlertTriangle,
  },
  {
    title: "The Romance Scam",
    story:
      "Lisa met someone online who seemed perfect. Over three months, he asked for money for emergencies. She sent $12,000 before discovering the profile photos were stolen from a real person.",
    consequence: "Financial Loss",
    consequenceColor: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: DollarSign,
  },
  {
    title: "The Fake Job Offer",
    story:
      "James applied for a remote job on social media. The 'employer' asked for his Social Security Number and bank details for 'direct deposit setup.' His identity was stolen and used for loans.",
    consequence: "Identity Theft",
    consequenceColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: User,
  },
];

export default function RealLifeExamples() {
  return (
    <section id="examples" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
            True Stories
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            REAL-LIFE <span className="cyber-gradient-text">EXAMPLES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            These scenarios are based on common attack patterns. Understanding
            them helps you recognize and avoid similar traps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              data-ocid={`examples.item.${i + 1}`}
              className="bg-cyber-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <ex.icon className="w-4 h-4 text-cyber-teal" />
                </div>
                <Badge
                  className={`text-xs border ${ex.consequenceColor} bg-transparent flex-shrink-0`}
                >
                  {ex.consequence}
                </Badge>
              </div>
              <h3 className="font-display font-bold text-sm text-foreground">
                {ex.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ex.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
