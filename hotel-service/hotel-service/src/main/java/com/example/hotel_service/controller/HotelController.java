package com.example.hotel_service.controller;

import com.example.hotel_service.model.Hotel;
import com.example.hotel_service.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    HotelService service;

    @PostMapping("/addhotel")
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return service.addHotel(hotel);
    }

    @GetMapping("/gethotels")
    public List<Hotel> getHotels() {
        return service.getAllHotels();
    }

    @GetMapping("/{id}")
    public Hotel getHotel(@PathVariable Long id) {
        return service.getHotel(id);
    }
}