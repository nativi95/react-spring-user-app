package com.nativi.backend.backenduserapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.nativi.backend.backenduserapp.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
