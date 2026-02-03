import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">
          Tobiez Sneaker Page
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest sneaker drops from top brands including Nike, Adidas, Puma, and more.
          Limited stock available!
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}