package com.example.auth_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public User register(@RequestBody AuthDTO dto) {
        return service.register(dto.getUsername(), dto.getEmail(), dto.getPassword(), dto.getRole());
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return service.login(user.getEmail(), user.getPassword());
    }
}