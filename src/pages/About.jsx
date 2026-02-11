import { FaBullseye, FaEye, FaHeart, FaStar, FaUsers, FaCheckCircle } from 'react-icons/fa';

const values = [
  { icon: <FaHeart className="text-3xl text-accent" />, title: 'Integrity', description: 'We conduct our business with honesty and transparency.' },
  { icon: <FaStar className="text-3xl text-accent" />, title: 'Excellence', description: 'We strive for the highest quality in every product we offer.' },
  { icon: <FaUsers className="text-3xl text-accent" />, title: 'Customer Focus', description: 'Our customers are at the heart of everything we do.' },
  { icon: <FaCheckCircle className="text-3xl text-accent" />, title: 'Reliability', description: 'Consistent quality and service you can always count on.' },
];

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn about our journey, mission, and the values that drive us.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong className="text-primary">MEGA GLORY GLOBAL RESOURCES</strong> began its
                journey in <strong>2009</strong> with a simple mission: to make quality healthcare
                products and baby essentials accessible and affordable to Nigerian families.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a small venture grew steadily over the years, driven by our
                unwavering commitment to quality and customer satisfaction. In{' '}
                <strong>2022</strong>, we officially registered as a company, marking a significant
                milestone in our growth journey.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, with offices in <strong>Taraba State</strong> and{' '}
                <strong>Imo State</strong>, we serve customers across Nigeria, providing them with
                trusted medicine, baby diapers, and baby foods from reputable brands.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&h=400&fit=crop"
                alt="Customers shopping at our store"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-3xl text-secondary" />
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide affordable, high-quality medicine, baby diapers, and baby foods to
                families across Nigeria, ensuring that every home has access to trusted healthcare
                and baby care products.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-3xl text-secondary" />
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become Nigeria's most trusted and preferred distributor of pharmaceutical
                products and baby essentials, known for quality, affordability, and exceptional
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="text-center p-6 bg-light rounded-lg">
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
