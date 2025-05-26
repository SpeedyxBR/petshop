import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const { isAuthenticated } = useAuth();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(true);

      // Reset success state after a delay
      setTimeout(() => {
        setCheckoutSuccess(false);
      }, 5000);
    }, 1500);
  };

  if (checkoutSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Pedido Realizado com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Obrigado pelo seu pedido. Enviamos um e-mail de confirmação com
              todos os detalhes.
            </p>
            <div className="space-x-4">
              <Link to="/">
                <Button variant="primary">Voltar para o Início</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline">Continuar Comprando</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Seu Carrinho Está Vazio
            </h2>
            <p className="text-gray-600 mb-6">
              Parece que você ainda não adicionou nenhum produto ou serviço ao
              seu carrinho.
            </p>
            <Link to="/products">
              <Button variant="primary">Ver Produtos</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Seu Carrinho
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Revise seus itens antes de finalizar a compra
          </p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.type}`} className="p-6 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            {item.type}
                          </p>
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex-1 flex items-end justify-between">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 text-gray-600 hover:text-gray-900"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 text-gray-600 hover:text-gray-900"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 size={18} className="mr-1" />
                          Remover
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <Link to="/products">
                    <Button variant="outline">Continuar Comprando</Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => clearCart()}
                    className="text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    Esvaziar Carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-base font-medium text-gray-600">
                    Subtotal
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    ${getCartTotal().toFixed(2)}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="text-base font-medium text-gray-600">
                    Frete
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    $0.00
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="text-base font-medium text-gray-600">
                    Imposto
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    ${(getCartTotal() * 0.1).toFixed(2)}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <div className="text-lg font-bold text-gray-900">Total</div>
                  <div className="text-lg font-bold text-gray-900">
                    ${(getCartTotal() + getCartTotal() * 0.1).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {isAuthenticated ? (
                  <Button onClick={handleCheckout} variant="primary" fullWidth>
                    Finalizar Compra
                  </Button>
                ) : (
                  <div>
                    <Link to="/login">
                      <Button variant="primary" fullWidth>
                        Entrar para Finalizar Compra
                      </Button>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500 text-center">
                      Você precisa estar logado para concluir sua compra
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
