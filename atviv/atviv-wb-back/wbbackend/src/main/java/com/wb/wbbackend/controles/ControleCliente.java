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
@RequestMapping("/cliente") // Mapeia todos os endpoints desta classe para "/cliente"
public class ControleCliente {

    @Autowired
    private RepositorioCliente repositorioCliente;

    @Autowired
    private RepositorioProduto repositorioProduto; // Repositório para Produtos

    @Autowired
    private HateoasCliente hateoas;

    @Autowired
    private AtualizadorCliente atualizador;

    @GetMapping("/")
    public ResponseEntity<String> home() {
        String mensagem = "Bem-vindo à API WB Backend! Os seguintes endpoints estão disponíveis: "
                        + "/clientes, /cliente/{id}, /cadastrar, etc.";
        return new ResponseEntity<>(mensagem, HttpStatus.OK);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obterCliente(@PathVariable Long id) {
        Cliente cliente = repositorioCliente.findById(id).orElse(null);
        if (cliente != null) {
            hateoas.adicionarLink(cliente);
            return new ResponseEntity<>(cliente, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/clientes")
    public ResponseEntity<List<Cliente>> obterClientes() {
        List<Cliente> clientes = repositorioCliente.findAll();
        hateoas.adicionarLink(clientes);
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }

    @PutMapping("/atualizar")
    public ResponseEntity<?> atualizarCliente(@RequestBody Cliente atualizacao) {
        Cliente cliente = repositorioCliente.findById(atualizacao.getId()).orElse(null);
        if (cliente == null) {
            return new ResponseEntity<>("Cliente não encontrado", HttpStatus.NOT_FOUND);
        } else {
            atualizador.atualizar(cliente, atualizacao);
            repositorioCliente.save(cliente);
            return new ResponseEntity<>(cliente, HttpStatus.OK);
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente novo) {
        if (novo == null) {
            return new ResponseEntity<>("Erro ao cadastrar cliente: Dados inválidos", HttpStatus.BAD_REQUEST);
        }
        repositorioCliente.save(novo);
        return new ResponseEntity<>(
                new RespostaCadastro("Cliente cadastrado com sucesso", novo.getId()),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/excluir")
    public ResponseEntity<?> excluirCliente(@RequestBody Cliente exclusao) {
        Cliente cliente = repositorioCliente.findById(exclusao.getId()).orElse(null);
        if (cliente == null) {
            return new ResponseEntity<>("Cliente não encontrado", HttpStatus.NOT_FOUND);
        } else {
            repositorioCliente.delete(cliente);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/top-consumo")
    public ResponseEntity<List<Cliente>> listarClientesPorConsumo() {
        List<Cliente> clientes = repositorioCliente.findTopClientesPorConsumo(PageRequest.of(0, 10));
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }

    @GetMapping("/bottom-consumo")
    public ResponseEntity<List<Cliente>> listarClientesPorMenorConsumo() {
        List<Cliente> clientes = repositorioCliente.findTopClientesPorMenorConsumo(PageRequest.of(0, 10));
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }

    @GetMapping("/produtos-mais-consumidos")
    public ResponseEntity<List<Produto>> listarProdutosMaisConsumidos() {
        List<Produto> produtosMaisConsumidos = repositorioProduto.findTopProdutosPorConsumo(PageRequest.of(0, 10));
        return new ResponseEntity<>(produtosMaisConsumidos, HttpStatus.OK);
    }
}

// Classe auxiliar para resposta do cadastro
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
