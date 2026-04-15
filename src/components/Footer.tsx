const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-heading text-xl font-bold text-foreground">
          DARK<span className="text-primary"> MIND</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground font-body">
          <a href="#about" className="hover:text-primary transition-colors">О нас</a>
          <a href="#rooms" className="hover:text-primary transition-colors">Квесты</a>
          <a href="#" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body">
          © 2026 Dark Mind. Toronto, ON.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
