package com.wb.wbbackend.configuration;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ConexaoControlador {

    @GetMapping("/conectar")
    public ResponseEntity<String> conectar() {
        return new ResponseEntity<>("Parabéns, você se conectou!", HttpStatus.OK);
    }
}
