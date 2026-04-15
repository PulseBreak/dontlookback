import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Don't Look Back" className="w-10 h-10 object-contain" />
          <span className="font-heading text-lg font-bold text-foreground hidden sm:block">
            DON'T LOOK <span className="text-primary">BACK</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-body">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#book" className="px-5 py-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-xs hover:brightness-125 transition-all">
            Book Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="flex flex-col p-4 gap-4 font-body text-sm">
              <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">About</a>
              <a href="#experience" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Experience</a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">FAQ</a>
              <a href="#book" onClick={() => setOpen(false)} className="py-2 bg-primary text-primary-foreground text-center font-heading uppercase tracking-wider text-xs">Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
