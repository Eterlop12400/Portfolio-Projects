using System;
namespace Movie_Library
{
    public static class Validation
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

        // Int validation method. Makes sure the user input is a valid number.
        public static int intValidation(string num)
        {

            while (!int.TryParse(num, out int convertedNum))
            {
                Console.Write("Please enter a valid number. Try again: ");
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
                Console.Write($"Please enter a number that is in between {lowNum} - {highNum}: ");
                string userNumString = Console.ReadLine();

                while (!int.TryParse(userNumString, out int convertedNum))
                {
                    Console.Write("Please enter a valid number. Try again: ");
                    userNumString = Console.ReadLine();
                    userNum = convertedNum;
                }
                userNum = int.Parse(userNumString);
            }

            return userNum;
        }
    }
    // End of Class.
}
