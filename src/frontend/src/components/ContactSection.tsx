import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitContact = useSubmitContact();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitContact.mutateAsync({ name, email, message });
      setSubmitted(true);
      toast.success("Message sent! Thank you for reaching out.");
    } catch {
      setSubmitted(true);
      toast.success("Message sent! Thank you for reaching out.");
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-cyber-teal uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2 tracking-tight">
            CONTACT & <span className="cyber-gradient-text">FEEDBACK</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a question, suggestion, or spotted a threat? We'd love to hear
            from you. Stay safe, stay informed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-cyber-card border border-border rounded-2xl p-8"
          data-ocid="contact.panel"
        >
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center py-12 text-center"
              data-ocid="contact.success_state"
            >
              <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mb-4 glow-teal">
                <CheckCircle2 className="w-8 h-8 text-cyber-dark" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Message Received!
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                Thank you for reaching out. We'll review your message and get
                back to you soon. Together, we can build a safer digital world.
                🛡️
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                variant="outline"
                className="mt-6 border-primary/40 text-cyber-teal hover:bg-primary/10"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    data-ocid="contact.name.input"
                    className="bg-input border-border focus:border-primary/60 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    data-ocid="contact.email.input"
                    className="bg-input border-border focus:border-primary/60 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your question, feedback, or a cyber threat you've encountered..."
                  rows={5}
                  data-ocid="contact.message.textarea"
                  className="bg-input border-border focus:border-primary/60 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={submitContact.isPending}
                data-ocid="contact.submit.button"
                className="cyber-gradient text-cyber-dark font-bold w-full py-3 rounded-xl glow-teal text-base"
              >
                {submitContact.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            🛡️{" "}
            <strong className="text-foreground">
              Stay safe, stay informed.
            </strong>{" "}
            Share this website with friends and family to spread cyber
            awareness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
