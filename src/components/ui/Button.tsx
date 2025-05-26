import React, { ButtonHTMLAttributes, ReactNode } from "react";

// Propriedades aceitas pelo componente Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Conteúdo do botão
  variant?: "primary" | "secondary" | "outline" | "ghost"; // Tipos de visual do botão
  size?: "sm" | "md" | "lg"; // Tamanhos do botão
  fullWidth?: boolean; // Se o botão deve ocupar toda a largura
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // Valor padrão: primário
  size = "md", // Valor padrão: médio
  fullWidth = false, // Valor padrão: não ocupa toda a largura
  className = "",
  ...props
}) => {
  // Estilos base aplicados a todos os botões
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Estilos para cada variante de botão
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    outline:
      "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
  };

  // Estilos para cada tamanho de botão
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  // Define se o botão ocupa toda a largura
  const widthStyles = fullWidth ? "w-full" : "";

  // Junta todas as classes CSS em uma única string
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  // Renderiza o botão com as propriedades e estilos definidos
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
