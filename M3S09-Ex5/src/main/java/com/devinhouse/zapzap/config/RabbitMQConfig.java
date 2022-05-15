package com.devinhouse.zapzap.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

@Configuration
public class RabbitMQConfig {

    @Bean
    RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean
    MessageConverter jsonMessageConverter(Jackson2ObjectMapperBuilder builder) {
        ObjectMapper objectMapper = builder.createXmlMapper(false).build();
        objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, true);
        return new Jackson2JsonMessageConverter(objectMapper);
    }

    @Bean
    DirectExchange chatPrivado() {
        return new DirectExchange("chatprivado");
    }

    @Bean
    TopicExchange chatGrupo() {
        return new TopicExchange("grupodevin");
    }

    @Bean
    Queue queueChatPrivado() {
        return QueueBuilder.durable("devin.chat.danilo.queue").build();
    }

    @Bean
    Binding bindingChatPrivado(Queue queueChatPrivado, DirectExchange chatPrivado) {
        return BindingBuilder.bind(queueChatPrivado).to(chatPrivado)
                .with("devin.chat.danilo");
    }

    @Bean
    Binding bindingChatGrupo(Queue queueChatPrivado, TopicExchange chatGrupo) {
        return BindingBuilder.bind(queueChatPrivado).to(chatGrupo)
                .with("devin.chat.*");
    }
}
