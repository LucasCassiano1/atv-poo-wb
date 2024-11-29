package com.wb.wbbackend.repositorios;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wb.wbbackend.entidades.Produto;

@Repository
public interface RepositorioProduto extends JpaRepository<Produto, Long> {

    // Atualize a consulta para corresponder ao campo correto
    @Query("SELECT p FROM Produto p ORDER BY p.quantidadeConsumida DESC")
    List<Produto> findTopProdutosPorConsumo(Pageable pageable);
}
