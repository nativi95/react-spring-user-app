package com.nativi.backend.backenduserapp.Controllers;

import com.nativi.backend.backenduserapp.entities.User;
import com.nativi.backend.backenduserapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/User")
public class UserControllers {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> List(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<User> UserOptional = userService.findById(id);
        if(UserOptional.isPresent()){
            return ResponseEntity.ok(UserOptional.orElse(new User()));//ok devuelve 200
        }
        return ResponseEntity.notFound().build();//norFound devuelve 400
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody User user){
        Optional<User> userOptional = userService.update(id, user);
        if(userOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(userOptional.orElseThrow()); //201
        }
        return ResponseEntity.notFound().build();//404
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<User> userOptional = userService.findById(id);
        if(userOptional.isPresent()){
            userService.deleteById(id);
            return ResponseEntity.noContent().build(); //204
        }else{
            return ResponseEntity.notFound().build();//404
        }


    }
}


