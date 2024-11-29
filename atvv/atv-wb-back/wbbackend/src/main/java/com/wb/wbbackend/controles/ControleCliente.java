package com.wb.wbbackend.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wb.wbbackend.atualizadores.AtualizadorCliente;
import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.hateoas.HateoasCliente;
import com.wb.wbbackend.repositorios.RepositorioCliente;
import com.wb.wbbackend.repositorios.RepositorioProduto;

@CrossOrigin(origins = "*") // Permitir requisições de qualquer origem
@RestController
@RequestMapping("/cliente")
public class ControleCliente {

    @Autowired
    private RepositorioCliente repositorioCliente;

    @Autowired
    private RepositorioProduto repositorioProduto;

    @Autowired
    private HateoasCliente hateoas;

    @Autowired
    private AtualizadorCliente atualizador;

    @GetMapping("/")
    public ResponseEntity<String> home() {
        String mensagem = "Bem-vindo à API WB Backend! Endpoints disponíveis: /clientes, /cliente/{id}, /cadastrar, etc.";
        return ResponseEntity.ok(mensagem);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obterCliente(@PathVariable Long id) {
        return repositorioCliente.findById(id)
                .map(cliente -> {
                    hateoas.adicionarLink(cliente);
                    return ResponseEntity.ok(cliente);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/clientes")
    public ResponseEntity<List<Cliente>> obterClientes() {
        List<Cliente> clientes = repositorioCliente.findAll();
        hateoas.adicionarLink(clientes);
        return ResponseEntity.ok(clientes);
    }

    @PutMapping("/atualizar")
    public ResponseEntity<String> atualizarCliente(@RequestBody Cliente atualizacao) {
        return repositorioCliente.findById(atualizacao.getId())
                .map(cliente -> {
                    atualizador.atualizar(cliente, atualizacao);
                    repositorioCliente.save(cliente);
                    return ResponseEntity.ok("Cliente atualizado com sucesso!");
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!"));
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<RespostaCadastro> cadastrarCliente(@RequestBody Cliente novo) {
        Cliente salvo = repositorioCliente.save(novo);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new RespostaCadastro("Cliente cadastrado com sucesso!", salvo.getId()));
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<String> excluirCliente(@PathVariable Long id) {
        return repositorioCliente.findById(id)
                .map(cliente -> {
                    repositorioCliente.delete(cliente);
                    return ResponseEntity.ok("Cliente excluído com sucesso!");
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado!"));
    }

    @GetMapping("/top-consumo")
    public ResponseEntity<List<Cliente>> listarClientesPorConsumo() {
        List<Cliente> clientes = repositorioCliente.findTopClientesPorConsumo(PageRequest.of(0, 10));
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/bottom-consumo")
    public ResponseEntity<List<Cliente>> listarClientesPorMenorConsumo() {
        List<Cliente> clientes = repositorioCliente.findTopClientesPorMenorConsumo(PageRequest.of(0, 10));
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/produtos-mais-consumidos")
    public ResponseEntity<List<Produto>> listarProdutosMaisConsumidos() {
        List<Produto> produtosMaisConsumidos = repositorioProduto.findTopProdutosPorConsumo(PageRequest.of(0, 10));
        return ResponseEntity.ok(produtosMaisConsumidos);
    }
}

class RespostaCadastro {
    private String mensagem;
    private Long id;

    public RespostaCadastro(String mensagem, Long id) {
        this.mensagem = mensagem;
        this.id = id;
    }

    public String getMensagem() {
        return mensagem;
    }

    public Long getId() {
        return id;
    }
}
