import { BookOpen, Shield, Target, Users } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-2xl bg-cyber-card border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative z-10 flex flex-col items-center gap-4 p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center glow-teal">
                    <Shield className="w-12 h-12 text-cyber-teal" />
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-xl text-foreground">
                      Security Experts
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">
                      Protecting You Online
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-3 gap-3 mt-4">
                    {["Students", "Beginners", "Everyone"].map((tag) => (
                      <div
                        key={tag}
                        className="text-xs text-cyber-teal bg-primary/10 border border-primary/30 rounded-full px-2 py-1 text-center"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 mb-6 tracking-tight">
              WHAT IS{" "}
              <span className="cyber-gradient-text">CYBERSECURITY?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cybersecurity is the practice of protecting computers, servers,
              mobile devices, networks, and data from malicious attacks,
              unauthorized access, and digital damage. In today's connected
              world, it is one of the most critical skills everyone needs to
              understand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're browsing social media, shopping online, or managing
              your bank account — every digital action carries risk. CyberGuard
              is here to make you aware, prepared, and protected.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: BookOpen,
                  title: "Students",
                  desc: "Learn fundamentals through simple guides",
                },
                {
                  icon: Users,
                  title: "Beginners",
                  desc: "No tech background required",
                },
                {
                  icon: Target,
                  title: "General Users",
                  desc: "Practical safety for everyday life",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-cyber-card border border-border rounded-xl p-4 flex flex-col gap-2"
                >
                  <Icon className="w-5 h-5 text-cyber-teal" />
                  <div className="font-semibold text-sm text-foreground">
                    {title}
                  </div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
