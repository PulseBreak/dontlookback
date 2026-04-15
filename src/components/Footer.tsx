const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading text-xl font-bold text-foreground">
          DON'T LOOK <span className="text-primary">BACK</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground font-body">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#book" className="hover:text-primary transition-colors">Book</a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body">
          © 2026 Don't Look Back! · Toronto, ON · dontlookback.ca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
