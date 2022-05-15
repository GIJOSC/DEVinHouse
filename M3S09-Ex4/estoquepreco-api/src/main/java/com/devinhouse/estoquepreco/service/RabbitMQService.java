package com.devinhouse.estoquepreco.service;

import com.devinhouse.libestoque.constants.RabbitMQConstants;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQService {

    @Autowired
    private AmqpTemplate amqpTemplate;


    public void enviarMensagem(String routingKey, Object mensagem) {
        this.amqpTemplate.convertAndSend(RabbitMQConstants.EXCHANGE, routingKey, mensagem);
    }
}
