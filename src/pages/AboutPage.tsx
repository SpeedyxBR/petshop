import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre a PetPals
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicados a fornecer cuidados excepcionais e produtos para seus pets
            desde 2010.
          </p>
        </div>

        {/* Nossa História Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/7210747/pexels-photo-7210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Pet store interior"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa História
              </h2>
              <p className="text-gray-600 mb-6">
                A PetPals começou com uma missão simples: criar um lugar onde
                pets e seus donos se sintam valorizados, compreendidos e
                cuidados. Fundada pela Dra. Lisa Chen, uma veterinária com mais
                de 15 anos de experiência, nossa jornada começou em uma pequena
                loja em 2010.
              </p>
              <p className="text-gray-600 mb-6">
                O que começou como uma pequena loja de suprimentos para pets
                cresceu e se tornou um centro abrangente de cuidados para pets,
                oferecendo uma ampla gama de produtos e serviços. Ao longo dos
                anos, mantivemos nosso compromisso com qualidade, expertise e
                cuidado compassivo.
              </p>
              <p className="text-gray-600">
                Hoje, a PetPals tem orgulho de atender milhares de donos de pets
                e seus amados companheiros, continuando nossa tradição de
                excelência em tudo o que fazemos.
              </p>
            </div>
          </div>
        </div>

        {/* Nossos Valores Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-teal-600 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Compaixão
              </h3>
              <p className="text-gray-600 text-center">
                Tratamos cada pet com o mesmo cuidado e atenção que daríamos aos
                nossos próprios, garantindo que eles se sintam seguros e amados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Qualidade
              </h3>
              <p className="text-gray-600 text-center">
                Nunca comprometemos a qualidade de nossos produtos e serviços,
                oferecendo apenas o melhor para seus companheiros queridos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Expertise
              </h3>
              <p className="text-gray-600 text-center">
                Nossa equipe de profissionais de cuidados com pets traz anos de
                experiência e educação contínua para fornecer conselhos e
                cuidados especializados.
              </p>
            </div>
          </div>
        </div>

        {/* Conheça Nossa Equipe Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Conheça Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dra. Lisa Chen"
              />
              <h3 className="text-xl font-semibold text-center mb-1">
                Dra. Lisa Chen
              </h3>
              <p className="text-teal-600 text-center mb-2">
                Fundadora & Veterinária
              </p>
              <p className="text-gray-600 text-center text-sm">
                Com mais de 15 anos de experiência, a Dra. Chen lidera nossos
                serviços veterinários com compaixão e expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mark Johnson"
              />
              <h3 className="text-xl font-semibold text-center mb-1">
                Mark Johnson
              </h3>
              <p className="text-teal-600 text-center mb-2">Groomer Líder</p>
              <p className="text-gray-600 text-center text-sm">
                A abordagem gentil e atenção aos detalhes de Mark o tornam um
                favorito entre nossos clientes peludos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah Williams"
              />
              <h3 className="text-xl font-semibold text-center mb-1">
                Sarah Williams
              </h3>
              <p className="text-teal-600 text-center mb-2">
                Nutricionista de Pets
              </p>
              <p className="text-gray-600 text-center text-sm">
                Sarah ajuda os donos de pets a encontrar a dieta perfeita para
                as necessidades específicas e condições de saúde de seus pets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                src="https://images.pexels.com/photos/6326399/pexels-photo-6326399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Carlos Rodriguez"
              />
              <h3 className="text-xl font-semibold text-center mb-1">
                Carlos Rodriguez
              </h3>
              <p className="text-teal-600 text-center mb-2">
                Treinador de Cães
              </p>
              <p className="text-gray-600 text-center text-sm">
                Carlos é especializado em treinamento com reforço positivo para
                ajudar os cães a se tornarem membros bem-comportados da família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
