import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:32832",
});

export const endpoints = {
  listarClientes: "/clientes",
  cadastrarCliente: "/cliente/cadastrar",
  atualizarCliente: "/cliente/atualizar",
  excluirCliente: "/cliente/excluir",
};

// Método para cadastrar cliente
export const createClient = async (data: { nome: string; email: string }) => {
  return await api.post(endpoints.cadastrarCliente, data);
};

// Método para excluir cliente
export const deleteClient = async (id: number) => {
  return await api.delete(`${endpoints.excluirCliente}/${id}`);
};

// Método para listar clientes
export const getClients = async () => {
  return await api.get(endpoints.listarClientes);
};


export default api;
