package com.example.gift.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.gift.entity.Gift;
import com.example.gift.repo.GiftRepo;

@Service
@CrossOrigin
public class GiftService {
     @Autowired
     GiftRepo gr;
     
     
     public boolean AddGift(Gift ge)
     {
          gr.save(ge);
          return true;
     }
     public List<Gift> getGift()
     {
          return gr.findAll();
     }
     public Optional<Gift> getById(int id)
     {
    	 return gr.findById(id);
     }
     public Gift updateGift(Gift ge)
     {
    	 return gr.saveAndFlush(ge);
     }
     
     public void deleteGift(Gift ge)
     {
    	 gr.delete(ge);
     }
     public void deleteid(int id)
     {
    	 gr.deleteById(id);
     }
     public List <Gift> getNameStartingwithletter(String name){
		return gr.findBynamesStarttingwith(name);
	}
}
