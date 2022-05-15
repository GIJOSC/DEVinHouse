package com.devinhouse.estoque.consumer;

import com.devinhouse.libestoque.constants.RabbitMQConstants;
import com.devinhouse.libestoque.dto.EstoqueDto;
import org.springframework.amqp.AmqpRejectAndDontRequeueException;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class EstoqueConsumer {

    @RabbitListener(queues = RabbitMQConstants.FILA_ESTOQUE)
    private void consumidor(EstoqueDto estoqueDto) {
        System.out.println(estoqueDto.codigoProduto);
        System.out.println(estoqueDto.quantidade);
        System.out.println("--------------------");

        throw new AmqpRejectAndDontRequeueException("Não jogue na fila novamente");
    }
}
