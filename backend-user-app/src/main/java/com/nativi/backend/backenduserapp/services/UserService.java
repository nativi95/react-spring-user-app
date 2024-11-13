package com.nativi.backend.backenduserapp.services;

import com.nativi.backend.backenduserapp.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();
    Optional<User> findById(Long id);
    User save(User user);
    void deleteById(Long id);
    Optional<User> update(Long id, User user);

}
