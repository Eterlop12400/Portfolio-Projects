using System;

/*
 * Eric Terlop
 * 2004
 * Code Exercise 2 - Swap Name
 * A string exercise that reverses the order of user entered information.
 */




namespace DVP1
{
    public class CE2_SwapName
    {
        private static string firstName;
        private static string lastName;
        private static string reverseName;

        // Text display to the user as well as asking for a name input.
        public static void Display()
        {

            Console.Clear();
            Console.WriteLine($"     Swap Name \r\n--------------------- \r\nWelcome to Swap Name: \r\nTo begin, please enter your first name...");
            firstName = Console.ReadLine();
            firstName = Validation.NameValidator(firstName);
            Console.WriteLine($"\r\nThank you {firstName}, now I will need your last name...");
            lastName = Console.ReadLine();
            lastName = Validation.NameValidator(lastName);
            string fullName = firstName + ' ' + lastName;
            SwapName();
            Console.WriteLine($"\r\nExcellent! Your name {fullName} reversed would be {reverseName}. \r\n--------------------- \r\nPress any key to return to the main menu: ");
            Console.ReadKey();
            CE1_Menu.Display();

        }
        // Method used to reverse the full name entered by the user.
        public static void SwapName()
        {
            reverseName = ($"{lastName}, {firstName}");
        }
    }
}
