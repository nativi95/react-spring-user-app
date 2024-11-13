package com.nativi.backend.backenduserapp.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsurio;

    @Column(unique = true, nullable = false)
    private String userName;
    private String password;
    @Column(unique = true, nullable = false)
    private String email;

}