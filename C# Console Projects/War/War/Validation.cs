using System;
namespace War
{
    public class Validation
    {

        // String validation method. Makes sure user input isn't left blank.
        public static string stringValidation(string userInput)
        {
            while (string.IsNullOrEmpty(userInput))
            {
                Console.Write("Please do not leave blank. Try again: ");
                userInput = Console.ReadLine();
            }
            return userInput;
        }

        // String validation method. Makes sure user input isn't left blank and answer is yes.
        public static string answerValidation(string userInput)
        {
            while (string.IsNullOrEmpty(userInput) || userInput.ToLower() != "y")
            {
                Console.Write("Please enter a valid answer. Try again: ");
                userInput = Console.ReadLine();
            }
            return userInput;
        }
    }
        // End of class.
}

