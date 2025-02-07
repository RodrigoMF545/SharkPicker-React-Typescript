// Importação do React Query para mutações e gerenciamento do cache
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Shark {
  name: string;
  species: string;
}

// Função que realiza a chamada POST para a API
const addShark = async (newShark: Shark) => {
  const response = await fetch('http://localhost:4000/sharks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newShark),
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar o tubarão');
  }

  return response.json();
};

export const useAddShark = () => {
  // Instância do queryClient para gerenciar o cache
  const queryClient = useQueryClient();

  // Hook useMutation do React Query para operações de POST
  return useMutation({
    mutationFn: addShark,
    // Callback executado após sucesso da mutação
    onSuccess: () => {
      // Invalida o cache da query 'sharks' forçando uma nova busca dos dados
      queryClient.invalidateQueries({ queryKey: ['sharks'] });
    }
  });
};