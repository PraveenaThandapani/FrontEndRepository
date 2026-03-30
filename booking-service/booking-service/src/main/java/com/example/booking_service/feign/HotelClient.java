package com.example.booking_service.feign;



import com.example.booking_service.dto.Room;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "HOTEL-SERVICE")
public interface HotelClient {

    @GetMapping("/rooms/{id}")
    Room getRoom(@PathVariable Long id);

    @PutMapping("/rooms/reduce/{id}")
    void reduce(@PathVariable Long id);
}
