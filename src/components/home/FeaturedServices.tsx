import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import Button from "../ui/Button";

const FeaturedServices: React.FC = () => {
  // Mostra apenas os 3 primeiros serviços na seção de destaque
  const featuredServices = services.slice(0, 3);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços Premium
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Serviços profissionais de cuidados para pets, personalizados para
            atender às necessidades do seu pet.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={service.imageUrl}
                  alt={service.name}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-600 mr-2">Duração:</span>
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900">
                      R${service.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to={`/appointment/${service.id}`}>
                    <Button variant="primary" fullWidth>
                      Agendar Consulta
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">
              Ver Todos os Serviços
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
