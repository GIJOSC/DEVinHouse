package com.devinhouse.estoquepreco.config;

import com.devinhouse.libestoque.constants.RabbitMQConstants;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean
    AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory, MessageConverter messageConverter) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter);
        return rabbitTemplate;
    }

    @Bean
    MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    DirectExchange directExchange() {
        return new DirectExchange(RabbitMQConstants.EXCHANGE);
    }

    @Bean
    Queue filaEstoque(DirectExchange directExchange) {
        return QueueBuilder.durable(RabbitMQConstants.FILA_ESTOQUE)
                .deadLetterExchange(directExchange.getName())
                .deadLetterRoutingKey("estoque-dead-letter")
                .build();
    }

    @Bean
    Queue filaEstoqueDeadLetter() {
        return QueueBuilder.durable(RabbitMQConstants.FILA_ESTOQUE + ".dead-letter").build();
    }

    @Bean
    Queue filaPreco() {
        return QueueBuilder.durable(RabbitMQConstants.FILA_PRECO).build();
    }

    @Bean
    Binding bindingFilaEstoque(Queue filaEstoque, DirectExchange directExchange) {
        return BindingBuilder.bind(filaEstoque).to(directExchange)
                .with(RabbitMQConstants.FILA_ESTOQUE);
    }

    @Bean
    Binding bindingFilaDeadLetter(Queue filaEstoqueDeadLetter, DirectExchange directExchange) {
        return BindingBuilder.bind(filaEstoqueDeadLetter).to(directExchange)
                .with("estoque-dead-letter");
    }

    @Bean
    Binding bindingFilaPreco(Queue filaPreco, DirectExchange directExchange) {
        return BindingBuilder.bind(filaPreco).to(directExchange)
                .with(RabbitMQConstants.FILA_PRECO);
    }

}
