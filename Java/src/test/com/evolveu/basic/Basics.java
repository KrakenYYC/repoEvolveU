package test.com.evolveu.basic;

import org.junit.Assert;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Basics {

    /**
     *
     * The Constructor. Same name as the class.
     * Each Class is in it's own file with the same name.
     *
     */
    public Basics() {

        System.out.println("In Basics Constructor");

    }

    /**
     *
     * Not an exhaustive list but see:
     * https://www.baeldung.com/java-primitives
     *
     */
    @Test
    public void variables() {

        int ii = 5;
        long ll = 123456789;
        double dd = 1.23456;
        boolean bb = true;
        byte by = 12;

        String ss = "A String";         // This is not a primitive

        String val = "Value is: " + ii + ll + dd + bb + by + ss;

        Assert.assertEquals("Value is: 51234567891.23456true12A Stringasdf", val);

    }

    /**
     *
     * Basic data structure are still variables, arrays, and dictionaries. Languages may name
     * them differently but...
     *
     */
    @Test
    public void dataStructures() {

        int[] bunchOfI = new int[3];
        bunchOfI[0] = 123;
        bunchOfI[1] = 124;
        bunchOfI[2] = 125;
        for(int i = 0; i < bunchOfI.length; i++) {
            System.out.println("--Loop: " + i + " " + bunchOfI[i]);
        }

        Map<String, String> map = new HashMap<>();
        map.put("ab", "Alberta");
        map.put("sk", "Saskatchewan");

        Assert.assertEquals("Alberta", map.get("ab"));

    }

/**
 *
 * Introduction to Java Logging:
 *
 *  Review the following:
 *
 *  https://docs.oracle.com/en/java/javase/11/docs/api/java.logging/java/util/logging/package-summary.html
 *
 *  Select the "Level" Class Summary to see the levels available
 *
 *  Select the "SimpleFormatter" Class to see the formatting options. Take specific note of:
 *          String.format(format, date, source, logger, level, message, thrown);
 *
 *  The formatting string are a little wild but review here:
 *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html
 *
 *  Best of all here are a few examples.
 *
 */
@Test
    public void logging() {

        System.out.println("In logging");


//        String f1 = "%4$s: %5$s [%1$tc]%n";
        String f1 = "[%1$tF %1$tT %1$tL] [%4$-7s] %5$s %n";
        System.setProperty("java.util.logging.SimpleFormatter.format", f1);

        Logger logger = Logger.getLogger("");
        logger.setLevel(Level.ALL);
        for (Handler handler : logger.getHandlers()) {
            handler.setLevel(Level.ALL);
        }
        logStuff(logger);

        logger.info("---- Level set to warning ----");

        logger.setLevel(Level.WARNING);
        logStuff(logger);

    }

    private void logStuff(Logger log) {

        log.finest("Finest log");
        log.finer("Finer Log");
        log.fine("Fine Log");
        log.config("Config Log");
        log.info("Info Log");
        log.warning("Warning Log");
        log.severe("Severe Log");

    }

}
