using System;

namespace DVP1
{
    public class CE1_Menu
    {
        private static string userSelection;

        // Our dislay method will allow us to display text to the user and greet them, asking for a input.
        public static void Display()
        {
            Console.Clear();
            Console.WriteLine("Project & Portfolio 1 \r\n--------------------- \r\nCoding Challenge Menu: \r\nPlease enter the number for the challenge you want to run... " +
                "\r\n \r\n[1] Swap Name \r\n[2] Backwards \r\n[3] Age Convert \r\n[4] Temp Convert \r\n[5] Big Blue Fish \r\n \r\n[0] Exit \r\n--------------------- \r\nMake your selection:");
            userSelection = Console.ReadLine();
            userSelection = Validation.MenuStringValidation(userSelection);
            Selection();
        }

        // Uses out Display() method to clear the screen and display the menu.
        public static void ReturnMenu()
        {
            Display();
        }

        // Switch statement to run programs from our menu list.
        public static void Selection()
        {
            switch (userSelection)
            {
                case "0":
                    Console.WriteLine("\r\nThank you for checking out this program I've made! I hope to see you soon!");
                    Environment.Exit(0);
                    break;

                case "1":
                    CE2_SwapName.Display();
                    break;

                case "2":
                    CE3_Backwards.Display();
                    break;

                case "3":
                    CE4_AgeConvert.Display();
                    break;

                case "4":
                    CE5_TempConvert.Display();
                    break;

                case "5":
                    CE6_BigBlueFish.Display();
                    break;
            }
        
        }
    }
}