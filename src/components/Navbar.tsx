import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Experiences", href: "/#tours" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Book", href: "/#booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? "bg-midnight/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl font-bold text-primary">
          NatureQuest
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="/#booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-xs px-6 py-2 rounded-full">
              Reserve
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-midnight/98 backdrop-blur-lg border-t border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium tracking-wide text-foreground/80 hover:text-primary uppercase"
            >
              {link.label}
            </a>
          ))}
          <a href="/#booking" onClick={() => setMobileOpen(false)}>
            <Button className="mt-4 w-full bg-primary text-primary-foreground uppercase tracking-widest text-xs rounded-full">
              Reserve Your Experience
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
