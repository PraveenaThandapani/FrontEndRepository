package com.example.booking_service.dto;


public class Room {
    private Long id;
    private Long hotelId;
    private String type;
    private double price;
    private int availableRooms;

    public int getAvailableRooms() {
        return availableRooms;
    }

    public void setAvailableRooms(int availableRooms) {
        this.availableRooms = availableRooms;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Room() {
    }

    public Room(int availableRooms, Long hotelId, Long id, double price, String type) {
        this.availableRooms = availableRooms;
        this.hotelId = hotelId;
        this.id = id;
        this.price = price;
        this.type = type;
    }
}
