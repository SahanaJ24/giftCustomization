package com.example.gift.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.entity.CartEntity;
import com.example.gift.service.CartService;

@RestController
@CrossOrigin(origins="*")
public class CartController {
    @Autowired
	CartService cs;
	
    @PostMapping("/cart/post")
	public boolean addCart(@RequestBody CartEntity ce)
	{
        return cs.AddProduct(ce);
	}
    @GetMapping("/cart/get")
    public List<CartEntity> getAllCart()
    {
        return cs.getProduct();
    }
    @DeleteMapping("cart/delete/{id}")
	public String deleteCartid(@PathVariable int id)
	{
		cs.deleteid(id);
		return "id :"+id+" is deleted successfully";
	}
}
