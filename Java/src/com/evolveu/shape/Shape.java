package com.evolveu.shape;

public abstract class Shape extends Line {

    private static int count = 0;

    public Shape() {
        System.out.println("In Shape Constructor");
        count++;
    }

    public abstract double area();

//    public abstract double perimeter();

    public String doSomething() {
        return "stuff";
    }

    public static int getCount() {
        return count;
    }

    public static void setCount(int count) {
        Shape.count = count;
    }

}
