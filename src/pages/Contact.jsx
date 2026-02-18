import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-vertical"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Office Cards */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Taraba State Office</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                    No. 1 Hospital Road, Takum Taraba State, Nigeria

                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-accent shrink-0" />
                    <a href="tel:+2347035792936" className="hover:text-primary">+234 703 579 2936</a>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">Imo State Office</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                    No. 25 Timber Market Road, Naze Owerri North, Imo State, Nigeria

                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-accent shrink-0" />
                    <a href="tel:+2347069060982" className="hover:text-primary">+234 706 906 0982</a>
                  </p>
                </div>
              </div>

              {/* General Contact */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">General Inquiries</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-accent shrink-0" />
                    <a href="mailto:info@megagloryglobal.com" className="hover:text-primary">info@megagloryglobal.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaWhatsapp className="text-green-500 shrink-0" />
                    <a href="https://wa.me/2347035792936" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              {/* Map - Takum, Taraba State */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe
                  title="Office Location - Takum, Taraba State"
                  src="https://maps.google.com/maps?q=Hospital+Road+Takum+Taraba+State+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
