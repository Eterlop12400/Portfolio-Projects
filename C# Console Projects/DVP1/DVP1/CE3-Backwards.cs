using System;

/*
 * Eric Terlop
 * 2004
 * Code Exercise 3 - Backwards
 * A string exercise that completely reverses (mirrored) the order of user entered information.
 */


namespace DVP1
{
    public class CE3_Backwards
    {
        public static void Display()
        {
            string userText;
            string stringReversal;

            // Text display will ask the user to input at least a 6 word sentence.
            Console.Clear();
            Console.WriteLine("     Backwards \r\n--------------------- \r\nWelcome to Backwards: \r\n \r\nTo begin, please enter a sentence containing at least 6 words...");
            userText = Console.ReadLine();
            userText = Validation.BackwardsstringValidator(userText);

            // This will replace multiple spaces with just a single space making the input cleaner.
            string cleanedString = System.Text.RegularExpressions.Regex.Replace(userText, @"\s+", " ");

            Console.WriteLine($"\r\nThank you, you entered the sentence: \r\n{cleanedString} \r\n");
            stringReversal = Reverse(cleanedString);
            Console.WriteLine($"Backwards this sentence would read:\r\n{stringReversal} \r\n \r\nPress any key to return to the main menu:");
            Console.ReadKey();
            CE1_Menu.Display();
        }
        // Method used to reverse the sentence letter by letter and will return the reversed sentence.
        public static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
    }
}
