import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Ração Premium para Cachorros",
    description:
      "Ração de alta qualidade com todos os nutrientes essenciais para o seu amigo peludo. Pacote de 3kg.",
    price: 39.99,
    imageUrl:
      "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "comida",
  },
  {
    id: 2,
    name: "Arranhador para Gatos",
    description:
      "Arranhador durável para manter seu gato entretido e seus móveis protegidos.",
    price: 29.99,
    imageUrl:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "brinquedos",
  },
  {
    id: 3,
    name: "Brinquedo de Mastigar para Cachorros",
    description: "Brinquedo resistente e durável para horas de diversão.",
    price: 12.99,
    imageUrl:
      "https://images.pexels.com/photos/14084428/pexels-photo-14084428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "brinquedos",
  },
  {
    id: 4,
    name: "Ração Premium para Gatos",
    description: "Ração nutritiva feita com ingredientes reais. Pacote de 2kg.",
    price: 34.99,
    imageUrl:
      "https://images.pexels.com/photos/9013079/pexels-photo-9013079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "comida",
  },
  {
    id: 5,
    name: "Transportador para Animais",
    description: "Transportador confortável e seguro para levar seu pet.",
    price: 49.99,
    imageUrl:
      "https://images.pexels.com/photos/241521/pexels-photo-241521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "acessórios",
  },
  {
    id: 6,
    name: "Coleira para Cachorros",
    description: "Coleira estilosa e confortável para o seu cachorro.",
    price: 18.99,
    imageUrl:
      "https://images.pexels.com/photos/6537922/pexels-photo-6537922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "acessórios",
  },
  {
    id: 7,
    name: "Cama para Pequenos Animais",
    description: "Cama macia e absorvente para pequenos pets.",
    price: 15.99,
    imageUrl:
      "https://images.pexels.com/photos/64284/cat-kitten-siamese-cat-cozy-64284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "acessórios",
  },
  {
    id: 8,
    name: "Ração para Peixes",
    description:
      "Nutrição balanceada para peixes de água doce e salgada. Pacote de 200g.",
    price: 8.99,
    imageUrl:
      "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "comida",
  },
];

export const categories = [
  { id: "all", name: "Todos os Produtos" },
  { id: "comida", name: "Comida" },
  { id: "brinquedos", name: "Brinquedos" },
  { id: "acessórios", name: "Acessórios" },
];
