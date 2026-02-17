export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  );
}
