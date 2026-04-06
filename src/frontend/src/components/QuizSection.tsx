import { Button } from "@/components/ui/button";
import { CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { QuizQuestion } from "../backend.d";
import { useQuizQuestions, useSubmitScore } from "../hooks/useQueries";

const FALLBACK_QUESTIONS: QuizQuestion[] = [
  {
    question: "What is phishing?",
    options: [
      "A type of computer virus",
      "Deceptive messages that trick you into revealing personal info",
      "Unauthorized network access",
      "A strong encryption method",
    ],
    correctIndex: BigInt(1),
    explanation:
      "Phishing involves fake emails, texts, or websites designed to steal your credentials or personal data by impersonating trusted sources.",
  },
  {
    question: "Which of these is a strong password?",
    options: ["password123", "MyName2024", "m7#Kq2$vLp9!Xn", "12345678"],
    correctIndex: BigInt(2),
    explanation:
      "Strong passwords are 12+ characters long and mix uppercase, lowercase, numbers, and symbols. Avoid using personal information.",
  },
  {
    question: "What does 2FA stand for?",
    options: [
      "Two-File Authentication",
      "Two-Factor Authentication",
      "Two-Form Authorization",
      "Total Firewall Access",
    ],
    correctIndex: BigInt(1),
    explanation:
      "Two-Factor Authentication adds a second verification step (like a code sent to your phone) beyond just your password.",
  },
  {
    question:
      "What should you do if you receive a suspicious email from your bank?",
    options: [
      "Click the link to verify your account",
      "Reply with your account details",
      "Contact your bank directly through their official website",
      "Forward it to your friends",
    ],
    correctIndex: BigInt(2),
    explanation:
      "Never click links or provide info in suspicious emails. Always contact your bank through their official website or customer service number.",
  },
  {
    question: "What is a VPN used for?",
    options: [
      "Creating stronger passwords",
      "Encrypting your internet connection and masking your IP",
      "Scanning files for viruses",
      "Managing login credentials",
    ],
    correctIndex: BigInt(1),
    explanation:
      "A VPN (Virtual Private Network) encrypts your traffic and hides your real IP address, protecting your privacy especially on public WiFi.",
  },
  {
    question: "Which is NOT a sign of a phishing website?",
    options: [
      "URL misspellings like 'paypa1.com'",
      "No HTTPS (padlock icon)",
      "A website with a valid SSL certificate",
      "Urgent warnings demanding immediate action",
    ],
    correctIndex: BigInt(2),
    explanation:
      "A valid SSL certificate (HTTPS / padlock) is a sign of a legitimate secure site. The other options are all red flags for phishing.",
  },
];

type QuizState = "idle" | "playing" | "answered" | "finished";

export default function QuizSection() {
  const { data: backendQuestions } = useQuizQuestions();
  const submitScore = useSubmitScore();
  const questions =
    backendQuestions && backendQuestions.length > 0
      ? backendQuestions
      : FALLBACK_QUESTIONS;

  const [state, setState] = useState<QuizState>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");

  const current = questions[currentIndex];
  const isCorrect =
    selectedOption !== null && selectedOption === Number(current?.correctIndex);

  function startQuiz() {
    setState("playing");
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
  }

  function selectAnswer(idx: number) {
    if (state !== "playing") return;
    setSelectedOption(idx);
    setState("answered");
    if (idx === Number(current.correctIndex)) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (currentIndex + 1 >= questions.length) {
      setState("finished");
      submitScore.mutate({
        user: userName || "Anonymous",
        score: BigInt(score),
        total: BigInt(questions.length),
      });
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setState("playing");
    }
  }

  function reset() {
    setState("idle");
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
  }

  const pct = Math.round((score / questions.length) * 100);

  return (
    <section
      id="quiz"
      className="py-24 px-4 sm:px-6"
      style={{ background: "oklch(0.12 0.016 235)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Promo card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-card border border-primary/30 rounded-2xl p-8 relative overflow-hidden glow-teal-sm"
          >
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl cyber-gradient flex items-center justify-center mb-5 glow-teal">
                <Trophy className="w-6 h-6 text-cyber-dark" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground mb-4 leading-tight">
                TEST YOUR
                <br />
                <span className="cyber-gradient-text">CYBER KNOWLEDGE!</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Think you know how to stay safe online? Take our{" "}
                {questions.length}-question interactive quiz to test your
                cybersecurity awareness. Learn from each answer with detailed
                explanations.
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-teal" />
                  <span>{questions.length} questions covering key topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-teal" />
                  <span>Instant feedback with explanations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyber-teal" />
                  <span>Score tracked and submitted</span>
                </div>
              </div>
              <input
                type="text"
                placeholder="Your name (optional)"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground mb-4 outline-none focus:border-primary/60"
                data-ocid="quiz.name.input"
              />
              {state === "idle" && (
                <Button
                  onClick={startQuiz}
                  data-ocid="quiz.start.primary_button"
                  className="cyber-gradient text-cyber-dark font-bold w-full py-3 rounded-xl glow-teal text-base"
                >
                  START THE QUIZ
                </Button>
              )}
              {state === "finished" && (
                <Button
                  onClick={reset}
                  variant="outline"
                  data-ocid="quiz.restart.button"
                  className="w-full border-primary/40 text-cyber-teal hover:bg-primary/10"
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                </Button>
              )}
            </div>
          </motion.div>

          {/* Quiz panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-ocid="quiz.panel"
          >
            <AnimatePresence mode="wait">
              {state === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-cyber-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center min-h-80 text-center"
                >
                  <Trophy className="w-16 h-16 text-cyber-teal/30 mb-4" />
                  <p className="text-muted-foreground">
                    Click START THE QUIZ to begin testing your knowledge
                  </p>
                </motion.div>
              )}

              {(state === "playing" || state === "answered") && (
                <motion.div
                  key={`q-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-cyber-card border border-border rounded-2xl p-6"
                >
                  {/* Progress */}
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>
                      Question {currentIndex + 1} of {questions.length}
                    </span>
                    <span className="text-cyber-teal">Score: {score}</span>
                  </div>
                  <div className="h-1 bg-border rounded-full mb-5 overflow-hidden">
                    <div
                      className="h-full cyber-gradient transition-all duration-500"
                      style={{
                        width: `${((currentIndex + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>

                  <p className="font-display font-bold text-base text-foreground mb-5">
                    {current.question}
                  </p>

                  <div className="space-y-2">
                    {current.options.map((opt, idx) => {
                      let cls =
                        "border border-border bg-background/50 hover:border-primary/40";
                      if (state === "answered") {
                        if (idx === Number(current.correctIndex))
                          cls = "border border-green-500/70 bg-green-500/10";
                        else if (idx === selectedOption)
                          cls = "border border-red-500/70 bg-red-500/10";
                        else cls = "border border-border opacity-50";
                      }
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => selectAnswer(idx)}
                          disabled={state === "answered"}
                          data-ocid={`quiz.option.${idx + 1}`}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3 ${cls} cursor-pointer disabled:cursor-default`}
                        >
                          <span className="w-5 h-5 rounded border border-border flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-foreground">{opt}</span>
                          {state === "answered" &&
                            idx === Number(current.correctIndex) && (
                              <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />
                            )}
                          {state === "answered" &&
                            idx === selectedOption &&
                            idx !== Number(current.correctIndex) && (
                              <XCircle className="w-4 h-4 text-red-400 ml-auto" />
                            )}
                        </button>
                      );
                    })}
                  </div>

                  {state === "answered" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 rounded-lg text-sm ${
                        isCorrect
                          ? "bg-green-500/10 border border-green-500/30 text-green-300"
                          : "bg-red-500/10 border border-red-500/30 text-red-300"
                      }`}
                    >
                      <strong>
                        {isCorrect ? "✓ Correct!" : "✗ Incorrect."}
                      </strong>{" "}
                      {current.explanation}
                    </motion.div>
                  )}

                  {state === "answered" && (
                    <Button
                      onClick={next}
                      data-ocid="quiz.next.button"
                      className="cyber-gradient text-cyber-dark font-bold w-full mt-4 rounded-xl"
                    >
                      {currentIndex + 1 >= questions.length
                        ? "See Results"
                        : "Next Question"}
                    </Button>
                  )}
                </motion.div>
              )}

              {state === "finished" && (
                <motion.div
                  key="finished"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cyber-card border border-primary/30 rounded-2xl p-8 text-center glow-teal-sm"
                  data-ocid="quiz.success_state"
                >
                  <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-teal">
                    <Trophy className="w-8 h-8 text-cyber-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {userName ? `Well done, ${userName}!` : "Well done!"} You
                    scored:
                  </p>
                  <div className="text-5xl font-display font-extrabold text-cyber-teal mb-1">
                    {pct}%
                  </div>
                  <div className="text-muted-foreground text-sm mb-6">
                    {score} out of {questions.length} correct
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden mb-6">
                    <div
                      className="h-full cyber-gradient rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pct >= 80
                      ? "Excellent! You have strong cybersecurity awareness."
                      : pct >= 60
                        ? "Good start! Review the tips and tools sections to improve."
                        : "Keep learning! Check out our Resources section for guides."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
