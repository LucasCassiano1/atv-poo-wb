package com.wb.wbbackend.repositorios;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wb.wbbackend.entidades.Cliente;

@Repository
public interface RepositorioCliente extends JpaRepository<Cliente, Long> {

    // Consulta para clientes que mais consumiram
    @Query("SELECT c FROM Cliente c ORDER BY c.consumo DESC")
    List<Cliente> findTopClientesPorConsumo(Pageable pageable);

    // Consulta para clientes que menos consumiram
    @Query("SELECT c FROM Cliente c ORDER BY c.consumo ASC")
    List<Cliente> findTopClientesPorMenorConsumo(Pageable pageable);
}
