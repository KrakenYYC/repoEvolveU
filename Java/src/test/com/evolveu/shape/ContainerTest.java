package test.com.evolveu.shape;

import com.evolveu.shape.Circle;
import com.evolveu.shape.Rectangle;
import com.evolveu.shape.Shape;
import org.junit.Test;

import java.util.ArrayList;

public class ContainerTest {

    @Test
    public void containerArea() {

        ArrayList<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(3));
        shapes.add(new Rectangle(2.0,3.0));
        shapes.add(new Circle(5.));

        System.out.println("The size is: " + shapes.size());

        Shape[] containers = shapes.toArray(new Shape[shapes.size()]);


        double area = 0.0;
        for(int i = 0; i < containers.length; i++ ) {

            System.out.println("i: " + i);
            area = area + containers[i].area();
            System.out.println("Area: " + area);
        }



//        Shape s = new Rectangle(3.,4.);
//        Assert.assertEquals(12,s.area(),.0001);
    }


}
