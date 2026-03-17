import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const { totalItems } = useCart();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="font-display text-xl md:text-2xl tracking-[0.08em]">
              ĀTELIER
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/" className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-500">
                Home
              </Link>
              <button
                onMouseEnter={() => setMegaMenuOpen(true)}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-500"
              >
                Shop
              </button>
              <Link to="/shop?category=bridal-wear" className="font-body text-xs tracking-[0.2em] uppercase text-primary transition-colors duration-500">
                Bridal
              </Link>
              <Link to="/about" className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-500">
                About
              </Link>
              <Link to="/contact" className="font-body text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors duration-500">
                Contact
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button aria-label="Search" className="hidden md:block hover:text-primary transition-colors duration-500">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button aria-label="Wishlist" className="hidden md:block hover:text-primary transition-colors duration-500">
                <Heart className="w-[18px] h-[18px]" />
              </button>
              <Link to="/cart" className="relative hover:text-primary transition-colors duration-500">
                <ShoppingBag className="w-[18px] h-[18px]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-body font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button aria-label="Account" className="hidden md:block hover:text-primary transition-colors duration-500">
                <User className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega menu */}
        {megaMenuOpen && (
          <div onMouseLeave={() => setMegaMenuOpen(false)}>
            <MegaMenu onClose={() => setMegaMenuOpen(false)} />
          </div>
        )}
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
