import axios from "axios";

// Configuração da instância Axios
const api = axios.create({
  baseURL: "http://localhost:32832", // Porta configurada no backend
});

// Endpoints disponíveis
export const endpoints = {
  listarClientes: "/cliente/clientes",
  cadastrarCliente: "/cliente/cadastrar",
  atualizarCliente: "/cliente/atualizar",
  excluirCliente: "/cliente/excluir", // ID será passado como parâmetro
};

// Método para listar clientes
export const getClients = async () => {
  try {
    return await api.get(endpoints.listarClientes);
  } catch (error) {
    console.error("Erro ao listar clientes:", error);
    throw error;
  }
};

// Método para cadastrar cliente
export const createClient = async (data: { nome: string; email: string }) => {
  try {
    return await api.post(endpoints.cadastrarCliente, data);
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    throw error;
  }
};

// Método para atualizar cliente
export const updateClient = async (data: { id: number; nome?: string; email?: string }) => {
  try {
    return await api.put(endpoints.atualizarCliente, data);
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    throw error;
  }
};

// Método para excluir cliente
export const deleteClient = async (id: number) => {
  try {
    return await api.delete(`${endpoints.excluirCliente}/${id}`);
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
    throw error;
  }
};

export default api;
