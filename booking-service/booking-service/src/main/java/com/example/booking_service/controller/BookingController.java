package com.example.booking_service.controller;

import com.example.booking_service.model.Booking;
import com.example.booking_service.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public Booking book(@RequestBody Booking booking) {
        return service.book(booking);
    }

    @GetMapping
    public List<Booking> getAll() {
        return service.getAllBookings();
    }
}
