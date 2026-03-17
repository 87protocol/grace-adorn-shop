import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filtered = useMemo(() => {
    if (!categoryFilter) return products;
    return products.filter(
      (p) => p.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter
    );
  }, [categoryFilter]);

  const activeCategory = categories.find(
    (c) => c.slug === categoryFilter
  );

  return (
    <Layout>
      <div className="section-padding py-12 md:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-body text-xs tracking-wide text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">
              {activeCategory ? activeCategory.name : "All Products"}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="editorial-heading mb-3">
            {activeCategory ? activeCategory.name : "Shop All"}
          </h1>
          <p className="body-elegant">{filtered.length} pieces</p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Link
            to="/shop"
            className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-500 ${
              !categoryFilter
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:border-foreground"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-500 ${
                categoryFilter === cat.slug
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="body-elegant">No products found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
