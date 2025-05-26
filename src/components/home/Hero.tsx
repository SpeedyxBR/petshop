import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Cachorro feliz sendo acariciado"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg uppercase text-white stroke-white stroke-1">
                    <span className="block">SEU PET MERECE</span>
                    <span className="block text-primary">O MELHOR ❤️</span>
                  </h1>
                  <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/services">
                      <Button variant="primary" size="lg">
                        Agendar Agora
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button variant="outline" size="lg">
                        Ver Produtos
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
