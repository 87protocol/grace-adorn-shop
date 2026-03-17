import { Link } from "react-router-dom";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";

interface Props {
  onClose: () => void;
}

const shopLinks = [
  { label: "Bridal Wear", to: "/shop?category=bridal-wear" },
  { label: "Party Wear", to: "/shop?category=party-wear" },
  { label: "Festive Wear", to: "/shop?category=festive-wear" },
  { label: "Ready to Wear", to: "/shop?category=ready-to-wear" },
];

const filterLinks = [
  { label: "Silk", to: "/shop?fabric=silk" },
  { label: "Georgette", to: "/shop?fabric=georgette" },
  { label: "Organza", to: "/shop?fabric=organza" },
  { label: "Velvet", to: "/shop?fabric=velvet" },
];

export default function MegaMenu({ onClose }: Props) {
  return (
    <div className="absolute left-0 right-0 bg-background border-t border-border/50 animate-fade-in-slow">
      <div className="section-padding py-10">
        <div className="grid grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-5">Categories</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="font-body text-sm hover:text-primary transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-5">By Fabric</h3>
            <ul className="space-y-3">
              {filterLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="font-body text-sm hover:text-primary transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/shop?category=bridal-wear" onClick={onClose} className="image-hover-zoom">
            <img src={collectionBridal} alt="Bridal Collection" className="w-full h-48 object-cover object-top" />
            <p className="font-body text-xs tracking-[0.15em] uppercase mt-3">Bridal Collection</p>
          </Link>

          <Link to="/shop?category=festive-wear" onClick={onClose} className="image-hover-zoom">
            <img src={collectionFestive} alt="Festive Collection" className="w-full h-48 object-cover object-top" />
            <p className="font-body text-xs tracking-[0.15em] uppercase mt-3">Festive Collection</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
