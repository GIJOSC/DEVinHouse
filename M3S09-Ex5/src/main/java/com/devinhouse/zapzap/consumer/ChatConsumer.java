package com.devinhouse.zapzap.consumer;

import com.devinhouse.zapzap.dto.ChatMessage;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ChatConsumer {

    @RabbitListener(queues = "devin.chat.danilo.queue")
    public void getPrivateMessage(ChatMessage chatMessage) {

        System.out.println(chatMessage);
    }
}
