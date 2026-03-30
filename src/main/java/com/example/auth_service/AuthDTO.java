package com.example.auth_service;
import lombok.Data;

@Data
public class AuthDTO {
    public Long id;
    public String username;
    public String email;
    public String password;
    public String role= "USER";
}
