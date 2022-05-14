package com.devinhouse.consumer.consumers;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class TestConsumer {

    @RabbitListener(queues = "test")
    public void receiveMessage(String msg) throws InterruptedException {
        System.out.println("[x] Received '" + msg + "'");
        doWork(msg);
    }

    private void doWork(String msg) throws InterruptedException {
        for (char ch: msg.toCharArray()) {
            if(ch == '.') {
                Thread.sleep(1000);
            }
        }
    }


}
