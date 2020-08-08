using System;
using System.Collections.Generic;

namespace War
{
    public class WarApp
    {

        //create a private list that holds your Players.
        private List<Player> _playerList = new List<Player>();

        public WarApp()
        {

            // Create a variable to store a deck and get the deck from the
            // DeckUtility class's CreateDeck method

            List<Card> newDeck = new List<Card>();
            newDeck = DeckUtility.CreateDeck();

            // Welcome the user
            // Ask the user for the name of player 1 and player 2. Be sure to validate.
            UI.Header("Welcome to the game of War!");
            Console.Write("Who is player One? ");
            string playerOneName = Console.ReadLine();
            playerOneName = Validation.stringValidation(playerOneName);
            Console.Write("Who is player Two? ");
            string playerTwoName = Console.ReadLine();
            playerTwoName = Validation.stringValidation(playerTwoName);



            // Create two player objects using the info from the user and store
            // them in the players list you created earlier.
            // Give each player half of the deck using the DivideDeck method

            Player playerOne = new Player(playerOneName);
            Player playerTwo = new Player(playerTwoName);

            _playerList.Add(playerOne);
            _playerList.Add(playerTwo);

            Dictionary<string, List<Card>> newestDeck = new Dictionary<string, List<Card>>();
            newestDeck = DeckUtility.DivideDeck(newDeck);


            foreach (KeyValuePair<string, List<Card>> deckOfCards in newestDeck)
            {
                foreach(Card cardInDeck in deckOfCards.Value)
                {
                    if(playerOne.playerHand.Count != 26)
                    {
                        playerOne.playerHand.Add(cardInDeck);
                        playerOne.playerHand = DeckUtility.ShuffleDeck(playerOne.playerHand);
                    } else
                    {
                        playerTwo.playerHand.Add(cardInDeck);
                        playerTwo.playerHand = DeckUtility.ShuffleDeck(playerTwo.playerHand);
                    }
                }
            }

            Play();
        }
        public void Play()
        {
            Console.Clear();
            // Announce the two players by name
            UI.Header("The Game of War");
            Console.WriteLine($"We have two players! Welcome {_playerList[0].playerName} and {_playerList[1].playerName}!");

            // Ask the user if they would like to see a round

            UI.Footer("Shall we play a round of War? [y/n]: ");
            string playerAnswer = Validation.answerValidation(Console.ReadLine().ToLower());
            Console.Clear();

            // Loop as long as the users have cards in their hands and the user
            // answers "yes" to this question

            while(playerAnswer == "y" && _playerList[0].playerHand.Count > 0)
            {
                Round();
            }


            EndGame();

            // When this loop is over you should call the EndGame() method.
        }
        public void Round()
        {
            UI.Header("The Game of War");
            foreach(Player player in _playerList)
            {
                Console.Write($"{player.playerName} has ");
                player.playerHand[0].DisplayCardValue();
            }

            if (_playerList[0].playerHand[0].cardsValue > _playerList[1].playerHand[0].cardsValue)
            {
                _playerList[0].playerScore++;
                Console.WriteLine($"\r\n{_playerList[0].playerName} wins this round!");
                DisplayScore();
            }
            else if (_playerList[0].playerHand[0].cardsValue < _playerList[1].playerHand[0].cardsValue)
            {
                _playerList[1].playerScore++;
                Console.WriteLine($"\r\n{_playerList[1].playerName} wins this round!");
                DisplayScore();
            }
            else if (_playerList[0].playerHand[0].cardsValue == _playerList[1].playerHand[0].cardsValue)
            {
                Console.WriteLine("\r\nIt's a Tie!!!");
                DisplayScore();
            }
            _playerList[0].playerHand.RemoveAt(0);
            _playerList[1].playerHand.RemoveAt(0);

            UI.Footer("Shall we play a round of War? [y/n]: ");
            string playerAnswer = Validation.answerValidation(Console.ReadLine().ToLower());
            Console.Clear();


            // Draw a card from each player's hand. Be sure to remove it entirely.
            // Evaluate who won the round using the cards, adjust the score, and
            // display it using the DisplayScore method

        }
        public void DisplayScore()
        {
            UI.Separator();
            Console.WriteLine($"{_playerList[0].playerName}: {_playerList[0].playerScore}     {_playerList[1].playerName}: {_playerList[1].playerScore}");
            Console.WriteLine($"Each player has {_playerList[0].playerHand.Count} cards left in their hand!");
            // Display each player's name and score and how many cards are left in
            // each player's hand
        }
        public void EndGame()
        {
            UI.Header("The Game of War");
            Console.WriteLine("It's the end of the game!!!\r\n");

            if(_playerList[0].playerScore > _playerList[1].playerScore)
            {
                Console.WriteLine($"The winner is...{_playerList[0].playerName}!!!");
            } else if(_playerList[0].playerScore < _playerList[1].playerScore)
            {
                Console.WriteLine($"The winner is...{_playerList[1].playerName}!!!");
            } else
            {
                Console.WriteLine($"The winner is...{_playerList[0].playerName} & {_playerList[1].playerName}!!! A tie game!!!");
            }
            // Announce the end of the game
            // User the player's score to determine who has won the game
            // Announce the winner or if the game was a tie.
        }
    }
}
