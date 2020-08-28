using System;
using System.Collections.Generic;

namespace MovieAPI
{
    public class Menu
    {
        private readonly List<string> _menuItems = new List<string> { };


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
    }
}
