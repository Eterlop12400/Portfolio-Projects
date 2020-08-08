using System;

namespace DVP1
{
    public class Validation
    {
        // String validation for menu
        public static string MenuStringValidation(string userInput)
        {
            while (!int.TryParse(userInput, out int newUsersInput) || (newUsersInput > 5 || newUsersInput < 0))
            {
                Console.WriteLine("Please enter a vaild selection from the menu.");
                userInput = Console.ReadLine();
            }

            return userInput;
        }

        // Validation used in SwapName CE & AgeConvert CE
        // Validation method to ensure the input isn't left blank, also removes empty space left by the user.
        public static string NameValidator(string name)
        {
            while (string.IsNullOrEmpty(name))
            {
                // Message to display when user does not enter a valid name, user enters a new value.
                Console.WriteLine("Input invalid! Please enter a valid name! (ex. John)");
                name = Console.ReadLine();
            }
            return name.Trim();
        }

        // Validation used in Backwards CE
        // Validation method to ensure the input isn't left blank, also checks to make sure the sentence is at least 6 words long.
        public static string BackwardsstringValidator(string userInput)
        {
            while (userInput.Split(' ').Length < 6 || (string.IsNullOrEmpty(userInput)))
            {
                Console.WriteLine("The sentence entered isn't valid. Must have a least six words! \r\nPlease enter a sentence with at least 6 words.");
                userInput = Console.ReadLine();
            }
            return userInput.Trim();
        }

        // Validation used in AgeConvert CE
        // A method to validate the information can be converted into an int and then converts it.
        public static int AgeConvertAgeValidator(string newUserAge)
        {
            while (!int.TryParse((string)newUserAge, out int userAge) || (userAge <= 0))
            {
                Console.WriteLine("Please enter a valid age..");
                newUserAge = Console.ReadLine();
            }
            int.TryParse(newUserAge, out int finalUserAge);

            return finalUserAge;
        }

        // Validation used in TempConvert CE
        // Our validator method to ensure the input can be a number that is on the menu.
        public static string TempConvertInputValidator(string userInput)
        {
            while (!double.TryParse(userInput, out double newUsersInput) || (newUsersInput > 2 || newUsersInput < 1))
            {
                Console.WriteLine("Please enter a vaild selection from the menu.");
                userInput = Console.ReadLine();

            }
            return userInput;
        }

        // Validation used in TempConvert CE
        // A method to validate the information can be converted into an int and then converts it.
        public static double TempConvertNumValidator(string numToConvert)
        {
            while (!double.TryParse((string)numToConvert, out double numConvert) || (numConvert <= 0))
            {
                Console.WriteLine("Please enter a valid number..");
                numToConvert = Console.ReadLine();
            }
            double.TryParse(numToConvert, out double numConverts);
            return numConverts;
        }
        // Validation used in BigBlueFish CE
        // Our validator method to ensure the input can be a number that is on the menu.
        public static string BigBlueFishInputValidator(string userInput)
        {
            while (!int.TryParse(userInput, out int newUsersInput) || (newUsersInput > 4 || newUsersInput <= 0))
            {
                Console.WriteLine("Please enter a vaild selection from the menu.");
                userInput = Console.ReadLine();
            }
            return userInput;
        }
    }
}
