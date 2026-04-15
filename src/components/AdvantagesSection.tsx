import { motion } from "framer-motion";

const advantages = [
  { icon: "🎭", title: "Live Actors", desc: "Real performers with custom scares based on real-time monitoring" },
  { icon: "🤖", title: "AI-Driven Horror", desc: "Reactive lighting, motion triggers, and dynamic sound design" },
  { icon: "🎬", title: "Cinematic Production", desc: "Hollywood-level set design and immersive storytelling" },
  { icon: "📸", title: "Social Shareability", desc: "Auto scare photos, reaction recordings, and viral moments" },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground text-glow mb-16"
        >
          WHY <span className="text-primary">US</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-card border border-border hover:border-glow transition-all duration-500"
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
