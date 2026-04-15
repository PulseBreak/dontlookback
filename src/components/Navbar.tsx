import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="font-heading text-xl font-bold text-foreground">
          DARK<span className="text-primary"> MIND</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-body">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#rooms" className="text-muted-foreground hover:text-primary transition-colors">Квесты</a>
          <a
            href="#"
            className="px-5 py-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-xs hover:brightness-125 transition-all"
          >
            Бронь
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
              <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#rooms" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">Квесты</a>
              <a href="#" className="py-2 bg-primary text-primary-foreground text-center font-heading uppercase tracking-wider text-xs">Бронь</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
