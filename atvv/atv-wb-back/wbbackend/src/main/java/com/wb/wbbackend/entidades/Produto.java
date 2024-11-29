package com.wb.wbbackend.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Produto {

    @Id
    private Long id; // Adicione o id, pois é necessário para a entidade JPA.

    private String nome;
    private String generoConsumidor;
    private int quantidadeConsumida;

    // Construtor
    public Produto(String nome, String generoConsumidor, int quantidadeConsumida) {
        this.nome = nome;
        this.generoConsumidor = generoConsumidor;
        this.quantidadeConsumida = quantidadeConsumida;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getGeneroConsumidor() {
        return generoConsumidor;
    }

    public void setGeneroConsumidor(String generoConsumidor) {
        this.generoConsumidor = generoConsumidor;
    }

    public int getQuantidadeConsumida() {
        return quantidadeConsumida;
    }

    public void setQuantidadeConsumida(int quantidadeConsumida) {
        this.quantidadeConsumida = quantidadeConsumida;
    }
}
