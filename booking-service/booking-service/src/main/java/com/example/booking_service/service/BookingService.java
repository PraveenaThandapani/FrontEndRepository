package com.example.booking_service.service;

import com.example.booking_service.dto.Room;
import com.example.booking_service.feign.HotelClient;
import com.example.booking_service.model.Booking;
import com.example.booking_service.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    @Autowired
    private HotelClient hotelClient;

    public Booking book(Booking booking) {

        // 1. Get room from hotel service
        Room room = hotelClient.getRoom(booking.getRoomId());

        // 2. Check availability
        if (room.getAvailableRooms() <= 0) {
            throw new RuntimeException("Room not available");
        }

        // 3. Reduce availability
        hotelClient.reduce(booking.getRoomId());

        // 4. Save booking
        booking.setStatus("CONFIRMED");

        return repo.save(booking);
    }

    public List<Booking> getAllBookings() {

    }
}