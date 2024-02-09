package com.example.gift.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gift.entity.CartEntity;
import com.example.gift.repo.CartRepo;

@Service
public class CartService {
    @Autowired
     CartRepo cr;
     
     
     public boolean AddProduct(CartEntity ce)
     {
          cr.save(ce);
          return true;
     }
     public List<CartEntity> getProduct()
     {
          return cr.findAll();
     }
     public void deleteid(int id)
     {
    	 cr.deleteById(id);
     }
}
