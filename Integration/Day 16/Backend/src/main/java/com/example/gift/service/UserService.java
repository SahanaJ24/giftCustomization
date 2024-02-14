package com.example.gift.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gift.dto.response.UserdetailsResponse;
import com.example.gift.entity.Users;
import com.example.gift.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo ur;
     
     
     public boolean AddUser(Users ue)
     {
          ur.save(ue);
          return true;
     }
     public List<Users> getUser()
     {
          return ur.findAll();
     }
     public UserdetailsResponse getById(String id)
     {
          Users user=ur.findById(id).get();
		UserdetailsResponse userData=new UserdetailsResponse();
		userData.setAddress(user.getAddress());
		userData.setEmailId(user.getEmail());
		userData.setImage(user.getImage());
		userData.setPhoneNumber(user.getPhoneNumber());
		userData.setId(user.getId());
		userData.setName(user.getName());
    	     return userData;
     }
}
