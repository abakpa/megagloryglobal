import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHandshake, FaTag } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import { categories } from '../data/products';

const features = [
  {
    icon: <FaShieldAlt className="text-4xl text-secondary" />,
    title: 'Quality Assured',
    description: 'We source only genuine, high-quality products from trusted manufacturers.',
  },
  {
    icon: <FaHandshake className="text-4xl text-secondary" />,
    title: 'Trusted Since 2009',
    description: 'Over 15 years of serving Nigerian families with dedication and integrity.',
  },
  {
    icon: <FaTag className="text-4xl text-secondary" />,
    title: 'Affordable Prices',
    description: 'Premium products at competitive prices accessible to every family.',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Product Categories */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Our Product Categories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our wide range of quality products designed to meet your family's needs.
          </p>
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
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="text-center p-6 rounded-lg hover:bg-light transition-colors">
                <div className="flex justify-center mb-4">{feat.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About MEGA GLORY GLOBAL RESOURCES</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-green-100">
            From humble beginnings in 2009 to a fully registered company in 2022,
            we have been dedicated to providing quality healthcare products and
            baby essentials to families across Nigeria. With offices in Taraba
            and Imo States, we are always close to you.
          </p>
          <Link
            to="/about"
            className="inline-block bg-white text-secondary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
