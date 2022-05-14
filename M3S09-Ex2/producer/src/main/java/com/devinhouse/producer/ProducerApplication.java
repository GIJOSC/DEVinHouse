package com.devinhouse.producer;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.concurrent.atomic.AtomicInteger;

@SpringBootApplication
@EnableScheduling
public class ProducerApplication implements CommandLineRunner {

	@Autowired
	private RabbitTemplate rabbitTemplate;


	AtomicInteger dots = new AtomicInteger(0);

	AtomicInteger count = new AtomicInteger(0);

	public static void main(String[] args) {
		SpringApplication.run(ProducerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		for(int i = 0; i < 20; i++) {
			rabbitTemplate.convertAndSend("test", "Hello " + i);
		}
	}

	@Scheduled(fixedDelay = 1000, initialDelay = 500)
	public void send() {
		StringBuilder builder = new StringBuilder();
		if(dots.getAndIncrement() == 4) {
			dots.set(1);
		}
		for(int i = 0; i < dots.get(); i++) {
			builder.append(".");
		}
		builder.append(count.incrementAndGet());
		String message = builder.toString();
		rabbitTemplate.convertAndSend("test", message);
		System.out.println("[x] Sent'" + message + "'");
	}
}
