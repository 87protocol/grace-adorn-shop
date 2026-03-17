import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  fabric: string;
  color: string;
  occasion: string;
  description: string;
  details: string[];
  images: string[];
  sizes: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "royal-crimson-bridal-lehenga",
    name: "Royal Crimson Bridal Lehenga",
    price: 185000,
    originalPrice: 225000,
    category: "Bridal Wear",
    subcategory: "Lehenga",
    fabric: "Raw Silk",
    color: "Red",
    occasion: "Wedding",
    description: "An opulent bridal lehenga in rich crimson, adorned with intricate zardozi and kundan work. Each motif is hand-embroidered by master artisans from Lucknow.",
    details: [
      "Hand-embroidered zardozi work",
      "Pure raw silk fabric",
      "Includes lehenga, blouse & dupatta",
      "Cancan lining for volume",
      "Dry clean only",
    ],
    images: [product1, product1],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "2",
    slug: "midnight-sapphire-anarkali",
    name: "Midnight Sapphire Anarkali",
    price: 78000,
    category: "Party Wear",
    subcategory: "Anarkali",
    fabric: "Georgette",
    color: "Navy",
    occasion: "Reception",
    description: "A floor-length anarkali in deep navy georgette with silver thread work. The flowing silhouette and intricate embroidery create a regal presence.",
    details: [
      "Silver zari thread embroidery",
      "Premium georgette fabric",
      "Includes kurta, sharara & dupatta",
      "Semi-stitched",
      "Dry clean only",
    ],
    images: [product2, product2],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    slug: "rose-garden-sharara-set",
    name: "Rose Garden Sharara Set",
    price: 62000,
    originalPrice: 74000,
    category: "Festive Wear",
    subcategory: "Sharara",
    fabric: "Organza",
    color: "Pink",
    occasion: "Sangeet",
    description: "A dreamy sharara set in blush pink organza with delicate gold sequin work. Perfect for mehendi and sangeet celebrations.",
    details: [
      "Hand-embroidered sequin work",
      "Pure organza fabric",
      "Includes top, sharara & dupatta",
      "Fully stitched",
      "Dry clean only",
    ],
    images: [product3, product3],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isBestseller: true,
  },
  {
    id: "4",
    slug: "emerald-banarasi-silk-saree",
    name: "Emerald Banarasi Silk Saree",
    price: 45000,
    category: "Festive Wear",
    subcategory: "Saree",
    fabric: "Banarasi Silk",
    color: "Green",
    occasion: "Festive",
    description: "A magnificent Banarasi silk saree in emerald green with traditional gold zari motifs. Handwoven by master weavers of Varanasi.",
    details: [
      "Handwoven Banarasi silk",
      "Pure gold zari border",
      "Includes saree & blouse piece",
      "6.3 meters length",
      "Dry clean recommended",
    ],
    images: [product4, product4],
    sizes: ["Free Size"],
    inStock: true,
  },
  {
    id: "5",
    slug: "imperial-red-bridal-lehenga",
    name: "Imperial Red Bridal Lehenga",
    price: 245000,
    category: "Bridal Wear",
    subcategory: "Lehenga",
    fabric: "Velvet",
    color: "Red",
    occasion: "Wedding",
    description: "The quintessential bridal lehenga in vermillion red with heavy zardozi, dabka, and kundan embellishments. A timeless masterpiece for your special day.",
    details: [
      "Heavy zardozi & kundan work",
      "Premium velvet fabric",
      "Includes lehenga, blouse & dupatta",
      "Heritage embroidery techniques",
      "Dry clean only",
    ],
    images: [product5, product5],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    slug: "ivory-chanderi-kurta-set",
    name: "Ivory Chanderi Kurta Set",
    price: 28000,
    category: "Ready to Wear",
    subcategory: "Kurta Set",
    fabric: "Chanderi",
    color: "Ivory",
    occasion: "Casual",
    description: "An elegant everyday kurta set in ivory chanderi cotton with subtle gold block prints. Effortless luxury for daily wear.",
    details: [
      "Hand block printed",
      "Pure chanderi cotton",
      "Includes kurta & palazzo",
      "Machine washable",
      "Pre-shrunk fabric",
    ],
    images: [product6, product6],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    isBestseller: true,
  },
];

export const categories = [
  { name: "Bridal Wear", slug: "bridal-wear" },
  { name: "Party Wear", slug: "party-wear" },
  { name: "Festive Wear", slug: "festive-wear" },
  { name: "Ready to Wear", slug: "ready-to-wear" },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === category);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
