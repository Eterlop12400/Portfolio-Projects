using System;
using System.Collections.Generic;

namespace Movie_Library
{

    public class Menu
    {
        // Fields
        private List<string> _menuItems = new List<string> { };


        // Constructor
        public Menu(List<string> menuItems)
        {
            _menuItems = menuItems;

        }
        // A method to display the menu items to the user.
        public void DisplayItems(int startingNum)
        {
            
            foreach (string item in _menuItems)
            {
                Console.WriteLine($" [{startingNum}] {item}");
                startingNum++;
            }

        }

        // A method to display the menu items to the user in a decending order for numbers.
        public void DisplayDec(int startingNum)
        {

            foreach (string item in _menuItems)
            {
                Console.WriteLine($" [{startingNum}] {item}");
                startingNum--;
            }

        }


    }
    // End of Class.
}
