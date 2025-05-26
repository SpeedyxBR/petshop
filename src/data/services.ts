import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    name: 'Banho Básico para Cães',
    description: 'Banho completo, escovação, corte de unhas e limpeza de ouvidos para o seu amigo peludo.',
    price: 45.00,
    imageUrl: 'https://images.pexels.com/photos/6568537/pexels-photo-6568537.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1 hora'
  },
  {
    id: 2,
    name: 'Grooming Premium para Gatos',
    description: 'Serviço completo de grooming para o seu felino, incluindo banho, tosa e corte de unhas.',
    price: 55.00,
    imageUrl: 'https://images.pexels.com/photos/7210263/pexels-photo-7210263.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '45 minutos'
  },
  {
    id: 3,
    name: 'Check-up Veterinário',
    description: 'Exame básico de saúde, incluindo vacinas e avaliação de bem-estar.',
    price: 75.00,
    imageUrl: 'https://images.pexels.com/photos/6235112/pexels-photo-6235112.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '30 minutos'
  },
  {
    id: 4,
    name: 'Sessão de Treinamento para Pets',
    description: 'Treinamento individual para ensinar comandos e comportamentos básicos ao seu pet.',
    price: 60.00,
    imageUrl: 'https://images.pexels.com/photos/6131084/pexels-photo-6131084.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1 hora'
  },
  {
    id: 5,
    name: 'Hospedagem para Pets',
    description: 'Estadia segura e confortável durante a noite para o seu pet.',
    price: 40.00,
    imageUrl: 'https://images.pexels.com/photos/7210694/pexels-photo-7210694.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: 'por noite'
  },
  {
    id: 6,
    name: 'Limpeza Dental para Pets',
    description: 'Limpeza dental profissional para manter os dentes do seu pet saudáveis.',
    price: 85.00,
    imageUrl: 'https://www.pexels.com/pt-br/foto/homem-animal-bicho-cachorro-6234622/',
    duration: '45 minutos'
  }
];