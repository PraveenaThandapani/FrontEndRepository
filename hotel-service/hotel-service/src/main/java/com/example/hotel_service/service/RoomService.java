package com.example.hotel_service.service;

import com.example.hotel_service.model.Hotel;
import com.example.hotel_service.model.Room;
import com.example.hotel_service.repository.HotelRepo;
import com.example.hotel_service.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    RoomRepo roomrepo;

    @Autowired
    HotelRepo hotelrepo;

    public Room addRoom(Long hotelId, Room room) {
        Hotel hotel = hotelrepo.findById(hotelId)
                .orElseThrow(() -> new RuntimeException("Hotel not found: " + hotelId));
        room.setHotel(hotel);
        return roomrepo.save(room);
    }

    public List<Room> getRoomsByHotel(Long hotelId) {
        return roomrepo.findByHotelId(hotelId);
    }

    public Room getRoom(Long id) {
        return roomrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found: " + id));
    }

    public void reduceAvailability(Long roomId) {
        Room room = getRoom(roomId);
        if (room.getAvailableRooms() <= 0) {
            throw new RuntimeException("No rooms available");
        }
        room.setAvailableRooms(room.getAvailableRooms() - 1);
        roomrepo.save(room);
    }
}