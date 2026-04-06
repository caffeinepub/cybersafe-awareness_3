import { CheckCircle2, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

const tips = [
  "Use strong, unique passwords (12+ characters, mix of letters, numbers, symbols)",
  "Enable Two-Factor Authentication (2FA) on all important accounts",
  "Never click suspicious links in emails or text messages",
  "Keep your software, apps, and operating system updated",
  "Avoid using public WiFi for sensitive activities — use a VPN",
  "Regularly back up your important files to an external drive or cloud",
  "Use a password manager to securely store and generate passwords",
  "Verify the sender before opening email attachments or clicking links",
  "Check for HTTPS before entering data on any website",
  "Be cautious about what personal info you share on social media",
];

export default function PreventionTips() {
  return (
    <section
      id="prevention"
      className="py-24 px-4 sm:px-6"
      style={{ background: "oklch(0.12 0.016 235)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: checklist */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
              Safety Practices
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 mb-8 tracking-tight">
              PREVENTION <span className="cyber-gradient-text">TIPS</span>
            </h2>
            <div className="bg-cyber-card border border-border rounded-2xl p-6 space-y-3">
              {tips.map((tip, i) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  data-ocid={`tips.item.${i + 1}`}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyber-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: callout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-cyber-card border border-primary/30 rounded-2xl p-8 relative overflow-hidden glow-teal-sm">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-5 glow-teal">
                  <ShieldAlert className="w-7 h-7 text-cyber-teal" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Did You Know?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  95% of cybersecurity breaches are caused by human error.
                  Simple habits like using strong passwords and recognizing
                  phishing attempts can prevent the vast majority of attacks.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "81%", label: "Breaches use stolen passwords" },
                    { value: "3.4B", label: "Phishing emails sent daily" },
                    { value: "$4.5M", label: "Average breach cost" },
                    { value: "22 sec", label: "Frequency of attacks" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-background/50 rounded-xl p-3 border border-border"
                    >
                      <div className="text-lg font-display font-bold text-cyber-teal">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-cyber-card border border-border rounded-xl p-5">
              <h4 className="font-semibold text-sm text-foreground mb-3">
                🔑 Password Strength Guide
              </h4>
              {[
                {
                  label: "Weak",
                  example: "password123",
                  width: "25%",
                  color: "bg-red-500",
                },
                {
                  label: "Fair",
                  example: "Pass@2024",
                  width: "55%",
                  color: "bg-amber-500",
                },
                {
                  label: "Strong",
                  example: "Tr0ub4dor&3",
                  width: "80%",
                  color: "bg-lime-500",
                },
                {
                  label: "Best",
                  example: "m7#Kq2$vLp9!Xn",
                  width: "100%",
                  color: "bg-cyber-teal",
                },
              ].map((pw) => (
                <div key={pw.label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{pw.label}</span>
                    <code className="text-muted-foreground font-mono">
                      {pw.example}
                    </code>
                  </div>
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full ${pw.color} rounded-full transition-all`}
                      style={{ width: pw.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
