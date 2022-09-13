package com.monolith.cardatabase.controllerTest;

import com.monolith.cardatabase.web.LoginController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class LoginControllerTest {
    @Autowired
    private LoginController loginController;

    @Test
    void testLogin(){
        assertThat(loginController).isNotNull();
    }
}
