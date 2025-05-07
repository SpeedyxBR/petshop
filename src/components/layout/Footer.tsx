import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">PetPals</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all pet needs. Quality products and
              premium services for your furry friends.
            </p>
            <div className="flex space-x-4">
              {/* Links para redes sociais */}
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* Navegação para páginas principais */}
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços Oferecidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {/* Navegação para serviços */}
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Pet Grooming
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Veterinary Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Pet Training
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Pet Boarding
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Pet Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              {/* Informações de contato */}
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-teal-400 flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">
                  123 Avenida dos Pets, Petsville, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">info@petpals.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé com direitos autorais e links adicionais */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PetPals. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {/* Links para políticas e termos */}
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    Política de Envio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
