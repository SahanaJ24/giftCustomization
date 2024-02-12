package com.example.gift.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CartEntity {
    @Id
    private int userId;
    private int giftId;
    private int total_cart_items;
}
