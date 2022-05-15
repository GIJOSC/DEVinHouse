package com.devinhouse.controller;

import com.devinhouse.dto.ChatMessage;
import com.devinhouse.dto.CreateChatQueueDTO;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RabbitAdmin rabbitAdmin;

    @Autowired
    private DirectExchange chatPrivado;

    @PostMapping("/private")
    public ResponseEntity enviarMensagemPrivada(@RequestBody ChatMessage chatMessage) {
        chatMessage.setSender("Gesiel");
        chatMessage.setDateTime(LocalDateTime.now());
        String routingKey = "devin.chat." + chatMessage.getTarget();
        rabbitTemplate.convertAndSend("grupodevin", "devin.chat", chatMessage);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/grupo")
    public ResponseEntity enviarMensagemGrupo(@RequestBody ChatMessage chatMessage) {
        chatMessage.setSender("Gesiel");
        chatMessage.setDateTime(LocalDateTime.now());
        rabbitTemplate.convertAndSend("grupodevin", "devin.chat", chatMessage);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/queue")
    public ResponseEntity createQueue(@RequestBody CreateChatQueueDTO createChatQueueDTO) {
        Queue queue = QueueBuilder
                .durable("devin.chat" + createChatQueueDTO.getName() + ".queue").build();

        Binding binding = BindingBuilder.bind(queue)
                .to(chatPrivado).with("devin.chat." + createChatQueueDTO.getName());

        rabbitAdmin.declareQueue(queue);
        rabbitAdmin.declareBinding(binding);

        return  ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
