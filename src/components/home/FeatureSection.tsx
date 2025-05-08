import React from "react";
import { Heart, Store, Users, Truck, Star, Clock } from "lucide-react";

const features = [
  {
    name: "Produtos de Qualidade",
    description:
      "Selecionamos apenas os melhores produtos para seus pets, garantindo qualidade e segurança.",
    icon: Star,
  },
  {
    name: "Cuidado Especializado",
    description:
      "Nossos profissionais treinados oferecem cuidados de alta qualidade para todos os tipos de pets.",
    icon: Heart,
  },
  {
    name: "Ampla Seleção",
    description:
      "Encontre tudo o que seu pet precisa em um só lugar conveniente.",
    icon: Store,
  },
  {
    name: "Entrega Rápida",
    description:
      "Receba os itens essenciais para seu pet entregues rapidamente na sua porta.",
    icon: Truck,
  },
  {
    name: "Comunidade Pet",
    description:
      "Junte-se à nossa comunidade de amantes de pets para dicas, eventos e suporte.",
    icon: Users,
  },
  {
    name: "Suporte 24/7",
    description:
      "Nossa equipe dedicada está sempre pronta para ajudar com suas dúvidas sobre cuidados com pets.",
    icon: Clock,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Por que nos escolher
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que seu pet precisa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Na PetPals, estamos comprometidos em oferecer os melhores produtos e
            serviços para seus companheiros peludos, com penas ou escamas.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full transition-transform hover:scale-105">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-primary tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
