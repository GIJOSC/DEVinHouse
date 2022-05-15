package com.devinhouse.estoque.exceptions;

import org.springframework.amqp.rabbit.listener.ConditionalRejectingErrorHandler;

public class CustomErrorStrategy extends ConditionalRejectingErrorHandler.DefaultExceptionStrategy {

    @Override
    public boolean isFatal(Throwable t) {
        return t.getCause() instanceof IllegalArgumentException;
    }
}
