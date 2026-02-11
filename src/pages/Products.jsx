import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our range of quality medicine, baby diapers, and baby foods.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-primary mb-3">{cat.name}</h2>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  <span className="text-secondary font-semibold hover:text-secondary-light transition-colors">
                    View Products &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
