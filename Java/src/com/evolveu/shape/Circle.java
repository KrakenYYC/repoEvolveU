package com.evolveu.shape;

public class Circle extends Shape {

    private double radius;

    public Circle(double radius) {
        System.out.println("In Circle Constructor");
        this.radius = radius;
    }

    public String tryStuff() {
        return "Stuff";
    }

    public double area() {
        double area = Math.PI * (this.radius * this.radius);
        return area;
    }

}
