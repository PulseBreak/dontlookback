import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Уникальных квеста" },
  { value: "98%", label: "Уровень страха" },
  { value: "2-6", label: "Игроков" },
  { value: "60", label: "Минут на побег" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-glow mb-6">
            ЧТО ТАКОЕ <span className="text-primary">DARK MIND</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Dark Mind — это квест-комнаты нового поколения в Торонто, где искусственный интеллект 
            адаптируется к вашим действиям в реальном времени. Каждое прохождение уникально. 
            AI меняет загадки, атмосферу и сценарий на основе вашего поведения.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border p-6 text-center border-glow"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
