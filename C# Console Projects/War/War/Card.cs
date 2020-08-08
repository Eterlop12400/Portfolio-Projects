using System;
namespace War
{
    public class Card
    {
        // Create a private field for the card's suit (This should be an integer)
        // It will eventually store a number from 0 to 3
        private int _cardSuit;


        // Create a public property for the value of the card. This will hold a
        // number from 1 to 13
        public int cardsValue;

        // Create a constructor that accepts suit and value in parameters and
        // sets the value and suit classmember variables accordingly
        public Card(int cardSuit, int cardValue)
        {
            _cardSuit = cardSuit;
            cardsValue = cardValue;

        }
        //Create a method to display the value of the card. This should return a string.
        // Assume a suit of 0 is Spades, 1 is Hearts, 2 is Diammonds & 3 is Clubs
        // If the card value is 12 and suit is 0 the card
        // then this method should return "The Queen of Spades"
        public void DisplayCardValue()
        {
            if(_cardSuit == 0)
            {
                if (cardsValue == 11)
                {
                    Console.WriteLine("the Jack of Spades");
                } else if (cardsValue == 12)
                {
                    Console.WriteLine("the Queen of Spades");

                } else if (cardsValue == 13)
                {
                    Console.WriteLine("the King of Spades");
                } else if (cardsValue == 1)
                {
                    Console.WriteLine("the Ace of Spades");
                } else
                {
                    Console.WriteLine($"the {cardsValue} of Spades");
                }
            }
            if (_cardSuit == 1)
            {
                if (cardsValue == 11)
                {
                    Console.WriteLine("the Jack of Hearts");
                }
                else if (cardsValue == 12)
                {
                    Console.WriteLine("the Queen of Hearts");
                }
                else if (cardsValue == 13)
                {
                    Console.WriteLine("the King of Hearts");
                } else if (cardsValue == 1)
                {
                    Console.WriteLine("the Ace of Hearts");
                } else
                {
                    Console.WriteLine($"the {cardsValue} of Hearts");
                }
            }
            if (_cardSuit == 2)
            {
                if (cardsValue == 11)
                {
                    Console.WriteLine("the Jack of Diamonds");
                }
                else if (cardsValue == 12)
                {
                    Console.WriteLine("the Queen of Diamonds");

                }
                else if (cardsValue == 13)
                {
                    Console.WriteLine("the King of Diamonds");
                }
                else if (cardsValue == 1)
                {
                    Console.WriteLine("the Ace of Diamonds");
                } else
                {
                    Console.WriteLine($"the {cardsValue} of Diamonds");
                }
            }
            if (_cardSuit == 3)
            {
                if (cardsValue == 11)
                {
                    Console.WriteLine("the Jack of Clubs");
                }
                else if (cardsValue == 12)
                {
                    Console.WriteLine("the Queen of Clubs");
                }
                else if (cardsValue == 13)
                {
                    Console.WriteLine("the King of Clubs");
                } else if (cardsValue == 1)
                {
                    Console.WriteLine("the Ace of Clubs");
                } else
                {
                    Console.WriteLine($"the {cardsValue} of Clubs");
                }
            }
        }

    }
}
