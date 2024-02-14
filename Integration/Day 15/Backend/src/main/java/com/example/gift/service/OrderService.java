package com.example.gift.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gift.entity.OrderEntity;
import com.example.gift.repo.OrderRepo;

@Service
public class OrderService {
     @Autowired
     OrderRepo or;
     
     public boolean AddOrder(OrderEntity oe)
     {
          or.save(oe);
          return true;
     }
     public List<OrderEntity> getOrder()
     {
          return or.findAll();
     }
     public Optional<OrderEntity> getById(int id)
     {
    	 return or.findById(id);
     }
     
     public void deleteOrder(OrderEntity oe)
     {
    	 or.delete(oe);
     }
     public void deleteid(int id)
     {
    	 or.deleteById(id);
     }
}
