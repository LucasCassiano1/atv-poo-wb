package com.wb.wbbackend.servicos;

import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.repositorios.RepositorioProduto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoServico {

    @Autowired
    private RepositorioProduto RepositorioProduto;

    // Método para listar todos os produtos
    public List<Produto> listarProdutos() {
        return RepositorioProduto.findAll(); // Método do Spring Data JPA
    }

    // Outros métodos de lógica de negócios, como filtrar por gênero, salvar produtos, etc.
}
