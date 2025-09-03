public class Main {
    public static void main(String[] args) {
        // Question 1: Type of type (Java doesn't have typeof, but getClass())
        // Object obj = 1;
        // System.out.println(obj.getClass().getClass());
        // Output: class java.lang.Class
        //Explanation: In Java, obj is an instance of Integer, and calling getClass() 
        // on it returns the Class object representing Integer. 
        // Calling getClass() again on that Class object returns the Class object 
        // representing Class itself.

        // Question 2: Array vs int comparison
        // int[] arr = {0};
        // int num = 0;
        // System.out.println(arr.equals(num));
        // Output: false
        // Explanation: In Java, an array is an object and does not equal a primitive type

        // Question 3: Empty array vs boolean
        int[] emptyArr = {};
        // System.out.println(emptyArr.equals(false));
        // Output: false
        // Explanation: In Java, an empty array is still an object and does not equal a boolean value.

        // // Question 4: Empty string vs zero
        // String s = "";
        // System.out.println(s.equals("0"));
        // Output: false
        // Explanation: In Java, an empty string is not equal to the string "0".


        // // Question 5: Double negation on strings
        // String str = "false";
        // String str2 = "true";
        // System.out.println(!str.isEmpty() == !str2.isEmpty());
        // Output: true
        // Explanation: In Java, both str and str2 are non-empty strings,

        // // Question 6: Array with null vs null
        // Object[] arrNull = {null};
        // System.out.println(arrNull.equals(null));
        // Output: false
        // Explanation: In Java, an array containing null is still an object and does not equal

        // // Question 7: false + true
        // System.out.println((false ? 1 : 0) + (true ? 1 : 0));
        // Output: 1
        // Explanation: In Java, false is treated as 0 and true as 1 when
        // performing arithmetic operations.

        // // Question 8: String + String + +String + String
        // String result = "b" + "a" + (+1) + "a";
        // System.out.println(result);
        // Output: ba1a
        // Explanation: In Java, the expression is evaluated from left to right.
        // +1 is treated as a numeric unary plus operator, resulting in the string "1".


        // // Question 9: 1 < 2 < 3
        // boolean res = 1 < 2 && 2 < 3;
        // System.out.println(res);
        // Output: true
        // Explanation: In Java, the expression is evaluated as (1 < 2) && (2 < 3),
        // which is true.

        // // Question 10: 3 > 2 > 1 (mimic JS behavior)
        int jsLike = (3 > 2) ? 1 : 0;
        System.out.println(jsLike > 1);
        // Output: false
        // Explanation: In Java, (3 > 2) evaluates to true, which is then compared to 1,
        // resulting in false.
    }
}