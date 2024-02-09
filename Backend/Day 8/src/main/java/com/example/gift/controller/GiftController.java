package com.example.gift.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.gift.entity.Gift;
import com.example.gift.service.GiftService;

@RestController
public class GiftController {
    @Autowired
	GiftService gs;
	
    @PostMapping("/gift/post")
	public boolean addGift(@RequestBody Gift ge)
	{
        return gs.AddGift(ge);
	}
    @GetMapping("/gift/get")
    public List<Gift> getAllGift()
    {
        return gs.getGift();
    }
	@GetMapping("gift/get/{id}")
	public Optional<Gift> getbyId(@PathVariable int id)
	{
		return gs.getById(id);
	}
    @PutMapping("gift/update")
	public Gift updategift(@RequestBody Gift ge)
	{
		return gs.updateGift(ge);
	}
	@GetMapping("/gift/startsWith/{name}")
		public List <Gift> getNameStartingwithletter(@PathVariable String name){
		return gs.getNameStartingwithletter(name);
	}
	@DeleteMapping("gift/delete")
	public String deletegift(@RequestBody Gift ge)
	{
		gs.deleteGift(ge);
		return "deleted Successfully";
	}
	
	@DeleteMapping("gift/delete/{id}")
	public String deletegiftid(@PathVariable int id)
	{
		gs.deleteid(id);
		return "id :"+id+" is deleted successfully";
	}
}
