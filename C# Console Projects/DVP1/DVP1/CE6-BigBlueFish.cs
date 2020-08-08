using System;
using System.Collections.Generic;
using System.Linq;

namespace DVP1
{
    public class CE6_BigBlueFish
    {
        public static void Display()
        {
            string menuSelection;
            string fishColor;

            // Welcome message to the user, asking the user for input.
            Console.Clear();
            Console.WriteLine("    BigBlueFish \r\n--------------------- \r\nWelcome to BigBlueFish: \r\nLooking for the biggest fish matching a certain color ? " +
                              "\r\n \r\nPlease select a color of fish... \r\n \r\n[1] Blue \r\n[2] Gold \r\n[3] Red \r\n[4] Green \r\n");
            menuSelection = Console.ReadLine();
            menuSelection = Validation.BigBlueFishInputValidator(menuSelection);
            fishColor = FindColor(menuSelection);
            BiggestFish(fishColor);
            Console.WriteLine("\r\nPress any key to return to the main menu:");
            Console.ReadKey();
            CE1_Menu.Display();
        }

        // Method that will change variable from selection to a color.
        public static string FindColor(string number)
        {
            var menuIndex = Int16.Parse(number) - 1;
            string[] colors = { "Blue", "Gold", "Red", "Green" };
            return colors[menuIndex];
        }

            // Method to find the biggest fish based on color.
            public static void BiggestFish(string color)
            { 
            // String array for fish colors
            string[] fishColors = { "Blue", "Gold", "Red", "Green", "Green", "Gold", "Gold", "Blue", "Blue", "Green", "Red", "Red" };

            // Float array for fish length
            float[] fishLength = { 12.3f, 4.3f, 6.3f, 17.9f, 3.3f, 4f, 6f, 6.3f, 7.2f, 10.2f, 2f, 11.3f };

            List<float> numberList = new List<float>();

            for (int i = 0; i < fishColors.Length; i++)
            {
                if (fishColors[i] == color)
                {
                    numberList.Add(fishLength[i]);
                }
            }
            color = color.ToLower();
            float biggestFish = numberList.Max();
            Console.WriteLine($"\r\nWoah! Looks like the biggest {color} fish is {biggestFish} inches \r\n--------------------- \r\n");

            }   
    }
}
