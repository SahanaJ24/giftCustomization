package com.example.gift.service;

import com.example.gift.dto.request.LoginRequest;
import com.example.gift.dto.request.RegisterRequest;
import com.example.gift.dto.response.LoginResponse;
import com.example.gift.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
