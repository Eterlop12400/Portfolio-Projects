using System;
using System.Collections.Generic;

namespace MovieAPI
{
    public class Application
    {
        ApiConnector api = new ApiConnector();

    
        public Application()
        {
            GetSeasonProgram();
        }

        // A method used to show the list of epsiodes using the variable from the user to call the API changing it to the proper episodes from that season
        private void EpisodeDisplay(int userSelection)
        {
            List<string> episodeTitleList = new List<string>();

            Console.Clear();

            // This is will use the api connector to gather information and save that object list to this episodes list
            List<Episode> episodes = api.GetEpisode(userSelection);


            // Foreach loop to add episode names into a list
            foreach (Episode e in episodes)
            {
                episodeTitleList.Add(e.Name);
            }

            Menu episodeMenu = new Menu(episodeTitleList);

            UI.Header($"Fairy Tail");
            UI.DisplayColoredText(" Episodes: \r\n", ConsoleColor.Green);
            UI.Separator();


            episodeMenu.DisplayItems(1);

            UI.Footer("Please press any key to return to the seasons menu: ");
            Console.ReadKey();
            GetSeasonProgram();
        }

        // A method that will show you a list of seasons and will ask the user which season they would like to view the episode of.
        private void GetSeasonProgram()
        {
            List<string> seasonTitleList = new List<string>();

            // This is will use the api connector to gather information and save that object list to this seasons list
            List<Season> seasons = api.GetSeasons();

            Console.Clear();

            UI.Header("Fairy Tail");
            UI.DisplayColoredText(" Seasons: \r\n", ConsoleColor.Green);
            UI.Separator();

            // Foreach loop to add season names into a list
            foreach (Season s in seasons)
            {
                seasonTitleList.Add(s.Name);
            }

            Menu seasonMenu = new Menu(seasonTitleList);

            seasonMenu.DisplayItems(0);

            UI.Footer("Please select a season you wish to view the episode list of: ");
            string userSelectionString = Validation.StringValidation(Console.ReadLine());
            int userSelection = Validation.IntValidation(userSelectionString);
            userSelection = Validation.rangeValidation(0, seasonTitleList.Count - 1, userSelection);

            // This will call the EpisodeDisplay method passing in the user input to add that variable to the URL when calling the API
            EpisodeDisplay(userSelection);
        }
    }
}
