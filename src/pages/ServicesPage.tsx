import React from "react";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Serviços profissionais de cuidado com pets entregues com amor e
            expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
