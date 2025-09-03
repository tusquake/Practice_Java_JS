/**
 * Best practices demonstration in Java.
 */
public class Day1 {

    // Constant for magic number avoidance
    private static final int MAX_USERS = 100;

    // Private field with encapsulation
    private String name;

    /**
     * Constructor with parameter validation.
     * @param name Name of the user, must not be null or empty.
     */
    public Day1(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name must not be null or empty.");
        }
        this.name = name;
    }

    /**
     * Getter for name (encapsulation).
     * @return the name of the user.
     */
    public String getName() {
        return name;
    }

    /**
     * Setter for name with validation.
     * @param name New name to set.
     */
    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name must not be null or empty.");
        }
        this.name = name;
    }

    /**
     * Example method demonstrating single responsibility.
     * Prints a greeting message.
     */
    public void greet() {
        System.out.println("Hello, " + name + "!");
    }

    /**
     * Main method to demonstrate usage.
     */
    public static void main(String[] args) {
        // Use try-catch for exception handling
        try {
            Day1 user = new Day1("Tushar");
            user.greet();

            // Demonstrate constant usage
            System.out.println("Max users allowed: " + MAX_USERS);

            // Demonstrate setter validation
            user.setName("Seth");
            user.greet();
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}

/**
 Here are some best practices in Java:

Use meaningful variable and method names: Names should clearly describe their purpose.
Follow Java naming conventions: Classes start with uppercase, variables and methods with lowercase.
Keep methods short and focused: Each method should do one thing well.
Avoid magic numbers: Use constants with descriptive names.
Use access modifiers: Make fields private and provide public getters/setters if needed.
Prefer interfaces for abstraction: Program to interfaces, not implementations.
Handle exceptions properly: Catch only specific exceptions and avoid empty catch blocks.
Close resources: Use try-with-resources for streams, files, etc.
Write unit tests: Test your code to catch bugs early.
Document your code: Use Javadoc comments for classes and methods.
Avoid unnecessary object creation: Reuse objects where possible.
Use collections appropriately: Choose the right collection for your use case.
Keep code DRY (Don’t Repeat Yourself): Extract common logic into methods or classes. 
 */
