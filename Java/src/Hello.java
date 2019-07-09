public class Hello {

    /**
     *
     * From the command line it always looks for this method.
     *
     * @param args
     *
     */
    public static void main(String[] args) {

        System.out.println("Hello Carrie!");

        Hello h = new Hello();
        String s = h.sayHello();

        System.out.println("Returned from sayHello: " + s);

    }

    /**
     *
     * The object must be instantiated in order to run this method.
     * @return
     *
     */
    public String sayHello() {

        System.out.println("This is from sayHello");
        return "some value";

    }

}
