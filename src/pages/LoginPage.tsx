import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login, register: registerUser } = useAuth();

  const {
    register: registerLogin,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>();

  const {
    register: registerCadastro,
    handleSubmit: handleCadastro,
    formState: { errors: cadastroErrors },
    watch,
  } = useForm<RegisterFormData>();

  const password = watch("password", "");

  const onLoginSubmit = async (data: LoginFormData) => {
    setError(null);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        navigate("/");
      } else {
        setError("E-mail ou senha inválidos.");
      }
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.");
    }
  };

  const onRegisterSubmit = async (data: RegisterFormData) => {
    setError(null);
    try {
      const success = await registerUser(data.name, data.email, data.password);
      if (success) {
        navigate("/");
      } else {
        setError("Falha no cadastro. O e-mail pode já estar em uso.");
      }
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.");
    }
  };

  const alternarFormulario = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? "Entre na sua conta" : "Crie uma nova conta"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <button
            onClick={alternarFormulario}
            className="font-medium text-teal-600 hover:text-teal-500 focus:outline-none"
          >
            {isLogin ? "Cadastre-se" : "Entrar"}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {isLogin ? (
            <form className="space-y-6" onSubmit={handleLogin(onLoginSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`input ${loginErrors.email ? "border-red-500" : "border-gray-300"}`}
                  {...registerLogin("email", {
                    required: "O e-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                />
                {loginErrors.email && <p className="text-sm text-red-600">{loginErrors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className={`input ${loginErrors.password ? "border-red-500" : "border-gray-300"}`}
                  {...registerLogin("password", {
                    required: "A senha é obrigatória",
                  })}
                />
                {loginErrors.password && <p className="text-sm text-red-600">{loginErrors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-900">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                  <span className="ml-2">Lembrar de mim</span>
                </label>
                <a href="#" className="text-sm text-teal-600 hover:text-teal-500">
                  Esqueceu a senha?
                </a>
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Entrar
              </Button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleCadastro(onRegisterSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  className={`input ${cadastroErrors.name ? "border-red-500" : "border-gray-300"}`}
                  {...registerCadastro("name", {
                    required: "O nome é obrigatório",
                  })}
                />
                {cadastroErrors.name && <p className="text-sm text-red-600">{cadastroErrors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  id="reg-email"
                  type="email"
                  className={`input ${cadastroErrors.email ? "border-red-500" : "border-gray-300"}`}
                  {...registerCadastro("email", {
                    required: "O e-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                />
                {cadastroErrors.email && <p className="text-sm text-red-600">{cadastroErrors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  id="reg-password"
                  type="password"
                  className={`input ${cadastroErrors.password ? "border-red-500" : "border-gray-300"}`}
                  {...registerCadastro("password", {
                    required: "A senha é obrigatória",
                    minLength: {
                      value: 6,
                      message: "A senha deve ter pelo menos 6 caracteres",
                    },
                  })}
                />
                {cadastroErrors.password && <p className="text-sm text-red-600">{cadastroErrors.password.message}</p>}
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirmar senha
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className={`input ${cadastroErrors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                  {...registerCadastro("confirmPassword", {
                    required: "Confirme sua senha",
                    validate: (value) =>
                      value === password || "As senhas não coincidem",
                  })}
                />
                {cadastroErrors.confirmPassword && (
                  <p className="text-sm text-red-600">{cadastroErrors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Criar conta
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
