package com.example.hotel_service.service;

import com.example.hotel_service.model.Hotel;
import com.example.hotel_service.repository.HotelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HotelService {

    @Autowired
    HotelRepo hotelrepo;

    public Hotel addHotel(Hotel hotel) {
        return hotelrepo.save(hotel);
    }

    public List<Hotel> getAllHotels() {
        return hotelrepo.findAll();
    }

    public Hotel getHotel(Long id) {
        return hotelrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found: " + id));
    }
}