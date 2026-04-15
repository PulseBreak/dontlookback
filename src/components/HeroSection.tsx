import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="The Abandoned Precinct" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          src={logo}
          alt="Don't Look Back"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 object-contain"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm font-body mb-4"
        >
          Toronto's Most Terrifying Escape Room
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-glow leading-tight mb-6"
        >
          DON'T LOOK
          <span className="text-primary"> BACK</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 font-body"
        >
          Step into 1940s Toronto. A detective has gone missing. The evidence room is sealed. 
          Something is watching you. You have 60 minutes to escape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#book" className="px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm box-glow hover:brightness-125 transition-all duration-300">
            Book Now
          </a>
          <a href="#experience" className="px-8 py-4 border border-primary/40 text-foreground font-heading uppercase tracking-widest text-sm hover:border-primary hover:text-glow transition-all duration-300">
            The Experience
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
