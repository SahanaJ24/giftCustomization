package com.example.gift.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.gift.entity.OrderEntity;
import com.example.gift.service.OrderService;

@RestController
@CrossOrigin(origins="*")
public class OrderController {
    @Autowired
	OrderService os;
	
    @PostMapping("order/post")
	public boolean addOrder(@RequestBody OrderEntity oe)
	{
        return os.AddOrder(oe);
	}
    @GetMapping("order/get")
    public List<OrderEntity> getAllOrder()
    {
        return os.getOrder();
    }
	@GetMapping("order/get/{id}")
	public Optional<OrderEntity> getbyId(@PathVariable int id)
	{
		return os.getById(id);
	}
    
	@DeleteMapping("order/delete")
	public String DeleteOrder(@RequestBody OrderEntity oe)
	{
		os.deleteOrder(oe);
		return "deleted Successfully";
	}
	
	@DeleteMapping("order/delete/{id}")
	public String deleteOrderid(@PathVariable int id)
	{
		os.deleteid(id);
		return "id :"+id+" is deleted successfully";
	}
}
