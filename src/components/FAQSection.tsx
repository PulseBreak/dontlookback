import { motion } from "framer-motion";

const faqs = [
  { q: "Is it actually scary?", a: "YES. Rated 9/10 fear level by guests." },
  { q: "Can I leave if I panic?", a: "Yes — safeword 'LIGHTS' exits you instantly." },
  { q: "Min/max group size?", a: "2–8 guests per session." },
  { q: "Age requirement?", a: "16+ (under 18 needs parent waiver)." },
  { q: "How many hints do I get?", a: "3 hints per session from your Game Master." },
  { q: "How do I book?", a: "Online at dontlookback.ca or by phone." },
];

const tips = [
  "Communicate constantly with your team",
  "Examine EVERYTHING — clues are hidden",
  "Assign someone as time-keeper",
  "Don't overthink — trust your instincts",
  "Wear comfortable shoes, you'll be moving",
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground text-glow mb-16"
        >
          TIPS & <span className="text-primary">FAQ</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Tips for Success</h3>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                >
                  <span className="text-primary mt-0.5">▸</span>
                  {tip}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-border/50 pb-3"
                >
                  <p className="text-foreground font-body text-sm font-medium">{faq.q}</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
