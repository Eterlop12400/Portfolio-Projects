using System;

/*
 * Eric Terlop
 * 2004
 * Code Exercise 4 - Age Convert.
 *  A number excercise that will convert a user's age into days, hours, minutes, and seconds.
 */


namespace DVP1
{
    public class CE4_AgeConvert
    {
        public static void Display()
        {
            string userName;
            string userAge;
            int finalUserAge;

            Console.Clear();
            Console.WriteLine("     Age Convert \r\n--------------------- \r\nWelcome to Age Convert: \r\n \r\nTo begin, please enter your name...");
            userName = Console.ReadLine();
            userName = Validation.NameValidator(userName);
            Console.WriteLine($"\r\nThank you {userName}. Now I know this may be personal, but what's your age?");
            userAge = Console.ReadLine();
            finalUserAge = Validation.AgeConvertAgeValidator(userAge);
            Console.WriteLine($"\r\n{finalUserAge} years, Fantastic! Next time someone asks, try answering with:");
            AgeConversion(finalUserAge);
            Console.WriteLine("Press any key to return to the main menu:");
            Console.ReadKey();
            CE1_Menu.Display();

        }

        // Method used to convert age into days, hours, minutes, and seconds.
        public static void AgeConversion(int age)
        {
            int ageDays = (365 * age);
            int ageHours = (8760 * age);
            int ageMinutes = (525600 * age);
            int ageSeconds = (31536000 * age);

            string stringAgeDays = ageDays.ToString("N0");
            string stringAgeHours = ageHours.ToString("N0");
            string stringAgeMinutes = ageMinutes.ToString("N0");
            string stringAgeSeconds = ageSeconds.ToString("N0");

            Console.WriteLine($"{stringAgeDays} Days -OR- \r\n{stringAgeHours} Hours -OR- \r\n{stringAgeMinutes} Minutes -OR- \r\n{stringAgeSeconds} Seconds\r\n------------------------- \r\n");
        }

    }
}
    
