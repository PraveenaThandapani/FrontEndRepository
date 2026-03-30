package com.example.auth_service;
import jakarta.persistence.*;
import lombok.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    String email;

    @Size(min=6, max=150)
    @Column(nullable = false)
    private String password;

    private String role;
}