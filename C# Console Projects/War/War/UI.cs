using System;
namespace War
{
    public class UI
    {
            // A header method used to display name in all caps.
            public static void Header(string e)
            {
                Console.WriteLine("=======================================");
                Console.WriteLine($" {e.ToUpper()}");
                Console.WriteLine("=======================================\r\n");
            }

            // A footer method used to display information with a double line on top.
            public static void Footer(string e)
            {
                Console.WriteLine("\r\n=======================================\r\n");
                Console.Write(e);
            }

            // A separator method used to space out content with a single line.
            public static void Separator()
            {
                Console.WriteLine("\r\n----------------------");
            }
    }
}
