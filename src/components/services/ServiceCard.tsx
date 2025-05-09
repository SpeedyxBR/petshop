import React from "react";
import { Link } from "react-router-dom";
import { Service } from "../../types";
import Button from "../ui/Button";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
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
  );
};

export default ServiceCard;
