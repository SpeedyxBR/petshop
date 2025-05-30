import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/ui/Button";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simular chamada de API
    setTimeout(() => {
      console.log("Dados do formulário:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contate-nos
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas ou precisa de ajuda? Estamos aqui para você e seus pets.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Formulário de Contato */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie-nos uma Mensagem
              </h2>

              {isSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                  Sua mensagem foi enviada com sucesso! Entraremos em contato
                  com você em breve.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("name", { required: "Nome é obrigatório" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Endereço de E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Endereço de e-mail inválido",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Número de Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Como podemos ajudar você e seu pet?"
                    {...register("message", {
                      required: "Mensagem é obrigatória",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="md:w-1/3 bg-teal-500 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Nossa Localização</h3>
                    <p>
                      Rua dos Animais, 123 <br /> São Paulo, SP 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p>info@petpals.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-3">Horário de Funcionamento</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span>9:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Encontre-nos
            </h2>
          </div>
          <div className="h-96 bg-gray-300 w-full">
            {/* Placeholder para Google Maps */}
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500 text-center px-4">
                Carregando mapa... <br />
                <span className="text-sm">
                  (Em um aplicativo real, isso seria um mapa do Google Maps
                  mostrando a localização do pet shop)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
