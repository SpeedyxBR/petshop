import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Button from "../ui/Button";

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();

  // Mostra apenas os 4 primeiros produtos na seção de destaque
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossos produtos mais vendidos que pets e donos adoram.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
            >
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  <Link
                    to={`/products/${product.id}`}
                    className="hover:text-teal-500"
                  >
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
                  <Button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        imageUrl: product.imageUrl,
                        type: "product",
                      })
                    }
                    variant="primary"
                    size="sm"
                  >
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
