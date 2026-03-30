package com.example.auth_service;
import com.example.auth_service.User;
import com.example.auth_service.AuthRepository;
import com.example.auth_service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private  AuthRepository repo;
    @Autowired
    private  PasswordEncoder encoder;
    @Autowired
    private  JwtService jwtService;
    @Autowired
    private  AuthenticationManager authenticationManager;


    public User register(String username , String email, String password, String role) {



        if (username == null || username.isBlank() ||
                email == null || email.isBlank() ||
                password == null || password.isBlank()) {

            throw new EmptyValueException("Fields cannot be empty");
        }
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(encoder.encode(password));
        user.setRole(role);

        return repo.save(user);
    }

    public String login(String email, String password) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );
        return jwtService.generateToken(email);
    }
}