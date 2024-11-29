package com.wb.wbbackend.controles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.servicos.ProdutoServico;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoServico produtoServico;

    // Rota para listar todos os produtos
    @GetMapping
    public List<Produto> listarTodosProdutos() {
        return produtoServico.listarProdutos();
    }

    // Rota para listar produtos por gênero
    @GetMapping("/generos")
    public List<Produto> listarProdutosPorGenero() {
        return produtoServico.listarProdutos();
    }
}
