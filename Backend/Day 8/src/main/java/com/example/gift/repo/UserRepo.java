package com.example.gift.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gift.entity.Users;

@Repository
public interface UserRepo extends JpaRepository<Users,String>{
    Optional<Users> findByEmail(String email);
}
