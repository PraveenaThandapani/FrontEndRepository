package com.example.hotel_service.controller;

import com.example.hotel_service.model.Room;
import com.example.hotel_service.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    RoomService service;

    @PostMapping("/addroom/{hotelId}")
    public Room addRoom(@PathVariable Long hotelId, @RequestBody Room room) {
        return service.addRoom(hotelId, room);
    }

    @GetMapping("/hotel/{hotelId}")
    public List<Room> getRooms(@PathVariable Long hotelId) {
        return service.getRoomsByHotel(hotelId);
    }

    @GetMapping("/{id}")
    public Room getRoom(@PathVariable Long id) {
        return service.getRoom(id);
    }

    @PutMapping("/reduce/{id}")
    public void reduce(@PathVariable Long id) {
        service.reduceAvailability(id);
    }
}




