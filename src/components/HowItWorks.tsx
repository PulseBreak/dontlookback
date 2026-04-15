import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Выберите квест", desc: "Определите уровень сложности и сценарий" },
  { num: "02", title: "Соберите команду", desc: "От 2 до 6 человек для идеального прохождения" },
  { num: "03", title: "Войдите в Dark Mind", desc: "AI начнёт адаптироваться к вам с первой секунды" },
  { num: "04", title: "Сбегите за 60 минут", desc: "Или останьтесь навсегда..." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground text-glow mb-16"
        >
          КАК ЭТО <span className="text-primary">РАБОТАЕТ</span>
        </motion.h2>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary/20 group-hover:text-primary transition-colors duration-500 shrink-0">
                {step.num}
              </div>
              <div className="border-l border-border pl-6 py-2 group-hover:border-primary transition-colors duration-500">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
