package com.evolveu.shape;

public class Rectangle extends Shape {

    private double length, width;

    public Rectangle (double length, double width) {
        System.out.println("In Rectangle Constructor");
        this.length = length;
        this.width = width;
    }

    @Override
    public double area() {
        return length * width;
    }

}
