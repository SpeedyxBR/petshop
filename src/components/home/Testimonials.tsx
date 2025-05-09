import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "O serviço de tosa foi excepcional! Meu cachorro está incrível e a equipe foi muito gentil com ele. Ele geralmente fica ansioso durante a tosa, mas ficou relaxado o tempo todo.",
    author: "Amanda Peters",
    petName: "Max",
    petType: "Golden Retriever",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    content:
      "Tenho comprado ração na PetPals há meses. A qualidade é excelente e a saúde da minha gata melhorou significativamente. Os preços também são razoáveis!",
    author: "Michael Johnson",
    petName: "Luna",
    petType: "Maine Coon",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    content:
      "O atendimento veterinário aqui é excepcional. A Dra. Wilson foi muito atenciosa com meu coelho e explicou tudo claramente. Agradeço pela abordagem cuidadosa e compassiva.",
    author: "Sarah Williams",
    petName: "Thumper",
    petType: "Coelho Holland Lop",
    rating: 5,
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-teal-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Não confie apenas na nossa palavra — ouça nossos clientes
            satisfeitos e seus pets.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500">
                    Tutor de {testimonial.petName} ({testimonial.petType})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
