import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(/images/hero/hero-bg.jpg)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner in{' '}
            <span className="text-accent">Health & Wellness</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Quality medicine, baby diapers, and baby foods — delivered with care
            since 2009. MEGA GLORY GLOBAL RESOURCES is committed to your
            family's well-being.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-block bg-accent hover:bg-accent-light text-primary font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
