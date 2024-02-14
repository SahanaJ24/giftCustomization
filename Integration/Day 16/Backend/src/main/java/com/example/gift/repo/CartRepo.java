package com.example.gift.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gift.entity.CartEntity;

public interface CartRepo extends JpaRepository<CartEntity,Integer>{

}
