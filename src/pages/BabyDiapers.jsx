import ProductCard from '../components/ProductCard';
import { babyDiapers } from '../data/products';

export default function BabyDiapers() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Baby Diapers</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comfortable, absorbent, and reliable diapers to keep your little ones happy and dry.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {babyDiapers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
