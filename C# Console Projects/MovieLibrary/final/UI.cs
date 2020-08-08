using System;
namespace Movie_Library
{
    public static class UI
    {
        // A header method used to display name in all caps.
        public static void Header(string e)
        {
            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("=======================================");
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine($" {e.ToUpper()}");
            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("=======================================");
            Console.ForegroundColor = ConsoleColor.White;
        }

        // A footer method used to display information with a double line on top.
        public static void Footer(string e)
        {

            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("\r\n=======================================\r\n");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine(e);
        }

        // A separator method used to space out content with a single line.
        public static void Separator()
        {
            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("----------------------");
            Console.ForegroundColor = ConsoleColor.White;
        }

        public static void ResetConsoleToDefaultColors()
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.BackgroundColor = ConsoleColor.Black;
        }

        public static void DisplayColoredText(string text, ConsoleColor color)
        {
            Console.ForegroundColor = color;
            Console.Write(text);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
    // End of Class.
}
