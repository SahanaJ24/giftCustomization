package com.example.gift.repo;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.gift.entity.Gift;

@Repository
public interface GiftRepo extends JpaRepository<Gift,Integer>{
    @Query(value="Select * from Gift where gname like ?1%",nativeQuery=true)
		public List <Gift> findBynamesStarttingwith(@Param("gname") String name);

}
