package com.devinhouse.estoquepreco.controller;

import com.devinhouse.estoquepreco.service.RabbitMQService;
import com.devinhouse.libestoque.constants.RabbitMQConstants;
import com.devinhouse.libestoque.dto.PrecoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/precos")
public class PrecoController {

    @Autowired
    private RabbitMQService rabbitMQService;

    @PutMapping
    public ResponseEntity alterarPreco(@RequestBody PrecoDto precoDto) {
        rabbitMQService.enviarMensagem(RabbitMQConstants.FILA_PRECO, precoDto);
        return ResponseEntity.ok().build();
    }
}
