using System;
using System.Collections.Generic;

namespace War
{
    public class Player
    {
        // Create a List that will hold the player's hand of cards.
        // This should be a list of card objects.

        public List<Card> playerHand = new List<Card>();


        // Create a property to store the player's name
        // Create a property to store the player's score

        public string playerName { get; set; }
        public int playerScore { get; set; }


        // Create a constructor method that accepts the name
        // and stores the name in the Name Property

        public Player(string name)
        {
            playerName = name;
        }
    }
}
