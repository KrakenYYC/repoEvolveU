package test.com.evolveu.shape;

import com.evolveu.shape.Rectangle;
import com.evolveu.shape.Shape;
import org.junit.Assert;
import org.junit.Test;

public class RectangleTest {

    @Test
    public void area() {
//        Shape s = new Rectangle(3.,4.);
//        Assert.assertEquals(12,s.area(),.0001);
        Shape s = new Rectangle(6.,2.);
        Assert.assertEquals(12,s.area(),.0001);
    }


}