package com.nativi.backend.backenduserapp.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
//import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsurio;

    @NotEmpty(message = "No puede ser vacio")
    //@Size(min = 4, max = 8)
    @Column(unique = true, nullable = false)
    private String userName;

    @NotEmpty
    private String password;
    @Column(unique = true, nullable = false)

    @NotEmpty
    @Email
    private String email;

}