package com.example.gift.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Gift {   
@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int gid;
    private String gname;
    private String gdesc;
    private int gprice;
}
