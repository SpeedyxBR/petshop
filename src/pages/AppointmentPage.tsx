import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { services } from "../data/services";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

interface AppointmentFormData {
  petName: string;
  ownerName: string;
  date: string;
  time: string;
  notes: string;
}

const AppointmentPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AppointmentFormData>();

  const service = services.find((s) => s.id === Number(serviceId));

  useEffect(() => {
    if (isAuthenticated && user) {
      setValue("ownerName", user.name);
    }

    // Set min date to today
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("date") as HTMLInputElement;
    if (dateInput) {
      dateInput.min = today;
    }
  }, [isAuthenticated, user, setValue]);

  const onSubmit = (data: AppointmentFormData) => {
    setIsSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Redirect after showing success message
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1500);
  };

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Serviço não encontrado
          </h1>
          <p className="mt-2 text-gray-600">
            O serviço que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Agendamento Realizado!
          </h2>
          <p className="text-green-600 mb-4">
            Seu agendamento para {service.name} foi realizado com sucesso. Você
            receberá um e-mail de confirmação em breve.
          </p>
          <Button onClick={() => navigate("/")} variant="primary">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Agendar um Horário
              </h1>
              <p className="mt-2 text-gray-600">
                Agende seu serviço de {service.name}
              </p>
            </div>

            <div className="flex flex-col md:flex-row mb-8 gap-6">
              <div className="md:w-1/3">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-xl font-semibold">{service.name}</h2>
                <p className="text-gray-600 my-2">{service.description}</p>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Duration:</span>
                  <span className="font-semibold">{service.duration}</span>
                </div>
                <div className="mt-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${service.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="petName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome do Pet *
                  </label>
                  <input
                    type="text"
                    id="petName"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.petName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("petName", {
                      required: "Pet name is required",
                    })}
                  />
                  {errors.petName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.petName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.ownerName ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("ownerName", {
                      required: "Your name is required",
                    })}
                  />
                  {errors.ownerName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.ownerName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Data *
                  </label>
                  <input
                    type="date"
                    id="date"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.date ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("date", { required: "Date is required" })}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Horário *
                  </label>
                  <select
                    id="time"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500 ${
                      errors.time ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("time", { required: "Time is required" })}
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Instruções Especiais (Opcional)
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Any special needs or instructions for your pet..."
                  {...register("notes")}
                ></textarea>
              </div>

              {!isAuthenticated && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <p className="text-yellow-700 text-sm">
                    <strong>Atenção:</strong> Você está agendando como
                    convidado.
                    <br />
                    <a
                      href="/login"
                      className="text-teal-600 hover:text-teal-800 underline"
                    >
                      Faça login ou crie uma conta
                    </a>{" "}
                    para gerenciar seus agendamentos com mais facilidade.
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[200px]"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
