import { motion } from "framer-motion";

const stats = [
  { value: "60", label: "Minutes to Escape" },
  { value: "9/10", label: "Fear Rating" },
  { value: "2-8", label: "Players" },
  { value: "16+", label: "Age Requirement" },
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
            WHO <span className="text-primary">WE ARE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body leading-relaxed">
            Don't Look Back! was born from a simple belief: that the best experiences are the ones 
            that make your heart pound. We combine cinematic storytelling, cutting-edge AI technology, 
            and live performance to create moments that stay with you long after you escape.
          </p>
          <p className="text-muted-foreground/70 text-base max-w-2xl mx-auto font-body mt-4">
            Or don't escape. We enjoy that too.
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
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider font-body">
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
