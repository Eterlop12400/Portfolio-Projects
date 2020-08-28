using System;
namespace MovieAPI
{
    public class Validation
    {
        // String validation to ensure the input is not left blank.
        public static string StringValidation(string userInput)
        {
            while (string.IsNullOrEmpty(userInput))
            {
                UI.DisplayColoredText("Please do not leave blank. Try again: ", ConsoleColor.Red);
                userInput = Console.ReadLine();
            }
            return userInput;
        }

        // Int validation method. Makes sure the user input is a valid number.
        public static int IntValidation(string num)
        {

            while (!int.TryParse(num, out int convertedNum))
            {
                UI.DisplayColoredText("Please enter a valid number. Try again: ", ConsoleColor.Red);
                num = Console.ReadLine();
            }

            int.TryParse(num, out int finalNum);
            return finalNum;
        }

        // Range validation method. Makes sure the user input is in range of the low and high number.
        public static int rangeValidation(int lowNum, int highNum, int userNum)
        {

            while (!(userNum >= lowNum) || !(userNum <= highNum))
            {
                UI.DisplayColoredText($"Please enter a number that is in between {lowNum} - {highNum}: ", ConsoleColor.Red);
                string userNumString = Console.ReadLine();

                while (!int.TryParse(userNumString, out int convertedNum))
                {
                    UI.DisplayColoredText("Please enter a valid number. Try again: ", ConsoleColor.Red);
                    userNumString = Console.ReadLine();
                    userNum = convertedNum;
                }
                userNum = int.Parse(userNumString);
            }

            return userNum;
        }
    }
}
