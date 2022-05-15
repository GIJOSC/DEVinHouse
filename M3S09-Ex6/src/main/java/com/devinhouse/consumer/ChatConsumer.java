package com.devinhouse.consumer;

import com.devinhouse.dto.ChatMessage;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ChatConsumer {

    @RabbitListener(queues = "devin.chat.gesiel.queue")
    public void getPrivateMessage(ChatMessage chatMessage) {
        System.out.println(chatMessage);
    }
}
