import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-cyber-bg.dim_1920x800.jpg')",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-cyber-teal uppercase mb-4 border border-primary/30 px-3 py-1 rounded-full bg-primary/10">
            Cybersecurity Awareness Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground text-glow-teal mb-6"
        >
          STAY SAFE IN THE{" "}
          <span className="cyber-gradient-text">DIGITAL WORLD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Every click, every login, every message — the internet is powerful,
          but it comes with real risks. Cybercriminals are constantly evolving
          their tactics to steal your data, money, and identity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CyberGuard empowers you with the knowledge and tools to protect
          yourself online — from understanding threats to implementing strong
          defenses. Your digital safety starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#about">
            <Button
              data-ocid="hero.learn_safe.primary_button"
              size="lg"
              className="cyber-gradient text-cyber-dark font-bold px-8 py-3 rounded-full glow-teal hover:opacity-90 transition-all text-base"
            >
              Learn How to Stay Safe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <a href="#quiz">
            <Button
              data-ocid="hero.take_quiz.secondary_button"
              size="lg"
              variant="outline"
              className="border-primary/60 text-cyber-teal hover:bg-primary/10 hover:border-primary px-8 py-3 rounded-full font-bold text-base transition-all"
            >
              <BookOpen className="mr-2 w-4 h-4" />
              Take the Quiz
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center gap-8 text-center"
        >
          {[
            { value: "10M+", label: "Attacks Daily" },
            { value: "95%", label: "Human Error" },
            { value: "4.2B", label: "Records Breached" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-display font-bold text-cyber-teal">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}
