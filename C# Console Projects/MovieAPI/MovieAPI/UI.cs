using System;
namespace MovieAPI
{
    public class UI
    {
        public static void Header(string e)
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("=======================================");
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.WriteLine($" {e.ToUpper()}");
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("=======================================\r\n");
            Console.ForegroundColor = ConsoleColor.White;
        }

        // A footer method used to display information with a double line on top.
        public static void Footer(string e)
        {

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("\r\n\r\n=======================================");
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.Write(e);
        }

        // A separator method used to space out content with a single line.
        public static void Separator()
        {
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("----------------------\r\n");
            Console.ForegroundColor = ConsoleColor.White;
        }

        // Used to change color of the text we want.
        public static void DisplayColoredText(string text, ConsoleColor color)
        {
            Console.ForegroundColor = color;
            Console.Write(text);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}
