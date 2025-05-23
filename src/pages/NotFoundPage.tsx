import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-teal-500">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
          Desculpe, não conseguimos encontrar a página que você está procurando.
          Ela pode ter sido movida ou não existe.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
