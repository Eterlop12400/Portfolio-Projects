using System;

/*
 * Eric Terlop
 * 2004
 * Code Exercise 5 - Temperature Convert
 * A number excercise that converts between temperature scales.
 */


namespace DVP1
{
    public class CE5_TempConvert
    {

        public static void Display()
        {

            string menuSelection;

            Console.Clear();
            Console.WriteLine("Temperature Convert \r\n--------------------- \r\nWelcome to Temperature Convert. Would you like to...");
            Console.WriteLine("\r\n[1] Convert temperature from Fahrenheit to Celsius \r\n[2] Convert temperature from Celsius to Fahrenheit");
            menuSelection = Console.ReadLine();
            menuSelection = Validation.TempConvertInputValidator(menuSelection);
            Selection(menuSelection);
            Console.WriteLine("\r\nPress any key to return to the main menu:");
            Console.ReadKey();
            CE1_Menu.Display();

        }

        // A switch statement that will convert input based on menu selection and display information to the user.
        public static void Selection(string userSelection)
        {
            string numToConvert;
            double intConvert;
            double convertTempFinal;


            switch (userSelection)
            {
                // This will convert input from Fahrenheit to Celsius and display information to the user.
                case "1":
                    Console.WriteLine("\r\nOk, what temperature in Fahrenheit would you like to convert?");
                    numToConvert = Console.ReadLine();
                    intConvert = Validation.TempConvertNumValidator(numToConvert);
                    convertTempFinal = FahrenheitConversion(intConvert);
                    intConvert = (double)System.Math.Round(intConvert, 1);
                    Console.WriteLine($"\r\nExcellent! {intConvert}˚F would be {convertTempFinal}˚C \r\n---------------------");
                    break;


                // This will convert input from Celsius to Fahrenheit and display information to the user.
                case "2":
                    Console.WriteLine("\r\nOk, what temperature in Celsius would you like to convert?");
                    numToConvert = Console.ReadLine();
                    intConvert = Validation.TempConvertNumValidator(numToConvert);
                    convertTempFinal = CelsiusConversion(intConvert);
                    intConvert = (double)System.Math.Round(intConvert, 1);
                    Console.WriteLine($"\r\nExcellent! {intConvert}˚C would be {convertTempFinal}˚F \r\n---------------------");
                    break;
            }

        }

        //Convert input from Fahrenheit to Celsius.
        public static double FahrenheitConversion(double temp)
        {
            double newTemp = Math.Floor(temp - 32) * 5 / 9;
            newTemp = (double)System.Math.Round(newTemp, 1);
            return newTemp;
        }

        //Convert input from Celsius to Fahrenheit.
        public static double CelsiusConversion(double temp)
        {
            double newTemp = Math.Floor(temp * 9) / 5 + 32;
            newTemp = (double)System.Math.Round(newTemp, 1);
            return newTemp;
        }

    }
}
