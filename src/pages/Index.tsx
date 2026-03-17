import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import heroBridal from "@/assets/hero-bridal.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import collectionParty from "@/assets/collection-party.jpg";
import collectionReadytowear from "@/assets/collection-readytowear.jpg";

const bestsellers = products.filter((p) => p.isBestseller);

const collections = [
  { name: "Bridal", image: collectionBridal, to: "/shop?category=bridal-wear" },
  { name: "Festive", image: collectionFestive, to: "/shop?category=festive-wear" },
  { name: "Party", image: collectionParty, to: "/shop?category=party-wear" },
  { name: "Ready to Wear", image: collectionReadytowear, to: "/shop?category=ready-to-wear" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The craftsmanship is extraordinary. My bridal lehenga was the most beautiful piece I've ever worn.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    text: "Every detail was perfect — from the fabric to the embroidery. Truly a luxury experience.",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    text: "Ātelier understands what modern Indian women want. Elegant, sophisticated, and timeless.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBridal} alt="Bridal collection" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/20 to-transparent" />
        </div>
        <div className="relative h-full flex items-center section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-background/70 mb-4">
              The 2026 Bridal Collection
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-background font-normal leading-[1.05] mb-6">
              Where Heritage Meets Elegance
            </h1>
            <p className="font-body text-sm text-background/70 leading-relaxed mb-8 max-w-md">
              Handcrafted by master artisans, each piece is a testament to centuries of Indian textile tradition.
            </p>
            <Link to="/shop?category=bridal-wear" className="btn-luxury border-background/40 text-background hover:bg-background hover:text-foreground">
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections grid */}
      <section className="section-padding py-20 md:py-32">
        <div className="text-center mb-14">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated</p>
          <h2 className="editorial-heading">Our Collections</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((col) => (
            <Link key={col.name} to={col.to} className="group image-hover-zoom">
              <div className="aspect-[3/4] relative">
                <img src={col.image} alt={col.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-foreground/60 to-transparent">
                  <h3 className="font-display text-lg text-background">{col.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-secondary/50 section-padding py-20 md:py-32">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Most Loved</p>
            <h2 className="editorial-subheading">Bestsellers</h2>
          </div>
          <Link to="/shop" className="btn-luxury-ghost text-xs hidden md:inline-flex">
            View All <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand strip */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="editorial-heading mb-6">The Art of Adornment</h2>
          <p className="body-elegant max-w-xl mx-auto mb-10">
            Every Ātelier piece is born from a dialogue between heritage craft and modern sensibility. 
            Our artisans spend weeks — sometimes months — bringing each design to life.
          </p>
          <Link to="/about" className="btn-luxury-outline">
            Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 section-padding py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Voices</p>
          <h2 className="editorial-subheading">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center p-8">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-5 italic">
                "{t.text}"
              </p>
              <p className="font-body text-xs tracking-[0.15em] uppercase">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
