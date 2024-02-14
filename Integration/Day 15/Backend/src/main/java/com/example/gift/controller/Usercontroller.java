package com.example.gift.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.gift.dto.response.UserdetailsResponse;
import com.example.gift.entity.Users;
import com.example.gift.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins="*")
public class Usercontroller {
    @Autowired
	UserService us;
	
    @PostMapping("user/post")
	public boolean addUser(@RequestBody Users ue)
	{
        return us.AddUser(ue);
	}
    @GetMapping("user/get")
    public List<Users> getAllUser()
    {
        return us.getUser();
    }
	@GetMapping("user/get/{id}")
	public UserdetailsResponse getbyId(@PathVariable String id)
	{
		return us.getById(id);
	}
    
}
