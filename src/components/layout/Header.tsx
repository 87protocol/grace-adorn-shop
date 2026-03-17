import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop", hasMega: true },
  { label: "Bridal", to: "/shop?category=bridal-wear" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to.includes("?")) return location.pathname + location.search === to;
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link to="/" className="font-display text-xl md:text-2xl tracking-[0.08em]">
              ĀTELIER
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasMega ? (
                    <button
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className="relative px-5 py-2 font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 hover:text-primary group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-3/4" />
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      className={`relative px-5 py-2 font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 group ${
                        isActive(link.to) ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      {link.label}
                      {isActive(link.to) ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-3/4" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4 md:gap-5">
              {[
                { icon: Search, label: "Search", hideOnMobile: true },
                { icon: Heart, label: "Wishlist", hideOnMobile: true },
              ].map(({ icon: Icon, label, hideOnMobile }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`${hideOnMobile ? "hidden md:flex" : "flex"} items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition-all duration-300 hover:text-primary`}
                >
                  <Icon className="w-[17px] h-[17px]" />
                </button>
              ))}
              <Link
                to="/cart"
                className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <ShoppingBag className="w-[17px] h-[17px]" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-body font-medium flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
              <button
                aria-label="Account"
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <User className="w-[17px] h-[17px]" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <MegaMenu onClose={() => setMegaMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
