import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="section-padding py-32 text-center">
          <h1 className="editorial-heading mb-4">Your Bag is Empty</h1>
          <p className="body-elegant mb-8">Discover our curated collections and find something you love.</p>
          <Link to="/shop" className="btn-luxury-primary">
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="section-padding py-12 md:py-20">
        <h1 className="editorial-heading mb-12">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Items */}
          <div className="lg:col-span-2 space-y-0 divide-y divide-border">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-5 py-8 first:pt-0">
                <Link to={`/product/${item.product.slug}`} className="w-24 md:w-32 aspect-[3/4] bg-secondary shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover object-top" />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <Link to={`/product/${item.product.slug}`} className="font-display text-base hover:text-primary transition-colors">
                          {item.product.name}
                        </Link>
                        <p className="font-body text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="p-1 hover:text-primary transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 h-9 flex items-center justify-center font-body text-xs">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-body text-sm font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-secondary/60 p-8">
              <h2 className="font-body text-xs tracking-[0.2em] uppercase mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary text-xs">Complimentary</span>
                </div>
              </div>
              <div className="border-t border-border pt-4 mb-8">
                <div className="flex justify-between font-body text-base font-medium">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
              <button className="btn-luxury-primary w-full">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <Link to="/shop" className="block text-center font-body text-xs tracking-[0.1em] uppercase text-muted-foreground mt-4 hover:text-foreground transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
