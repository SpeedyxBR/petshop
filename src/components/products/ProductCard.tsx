import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      type: "product",
    });
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full mb-2">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          <Link to={`/products/${product.id}`} className="hover:text-teal-500">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-500 mb-3 h-12 overflow-hidden">
          {product.description.length > 60
            ? `${product.description.substring(0, 60)}...`
            : product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            R${product.price.toFixed(2)}
          </span>
          <Button onClick={handleAddToCart} variant="primary" size="sm">
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
