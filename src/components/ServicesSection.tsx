import { motion } from "framer-motion";

const services = [
  "Private group bookings (2–8 guests)",
  "Birthday party packages",
  "Corporate team-building events",
  "Student group discount rates",
  "Scare photo package (digital download)",
  "Post-game lounge & refreshments",
  "Gift cards available online",
  "Repeat visitor loyalty program",
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground text-glow mb-16"
        >
          OUR <span className="text-primary">SERVICES</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 bg-card/50 border border-border/50"
            >
              <span className="text-primary text-lg">✦</span>
              <span className="text-foreground font-body text-sm">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
