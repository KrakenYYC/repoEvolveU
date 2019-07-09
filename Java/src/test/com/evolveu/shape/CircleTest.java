package test.com.evolveu.shape;

import com.evolveu.shape.Circle;
import com.evolveu.shape.Shape;
import org.junit.Assert;
import org.junit.Test;

public class CircleTest {

    @Test
    public void area() {
        Shape c = new Circle(3.);
        Assert.assertEquals(28.2743,c.area(),.0001);
    }

}