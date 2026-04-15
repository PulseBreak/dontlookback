import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="book" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground text-glow mb-6">
          ARE YOU <span className="text-primary animate-pulse-glow">BRAVE ENOUGH</span>?
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
          Book your escape now. The Abandoned Precinct awaits.
        </p>
        <a
          href="https://dontlookback.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-primary text-primary-foreground font-heading uppercase tracking-[0.3em] text-sm box-glow hover:brightness-125 transition-all duration-300"
        >
          Book Now
        </a>
        <p className="text-muted-foreground/60 font-body text-xs mt-6 uppercase tracking-wider">
          📍 Toronto, Ontario · Open Daily 12:00 PM – 12:00 AM
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
