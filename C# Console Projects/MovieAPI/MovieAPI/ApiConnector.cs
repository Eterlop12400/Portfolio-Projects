using System;
using Newtonsoft.Json.Linq;
using System.Net;
using System.Collections.Generic;

namespace MovieAPI
{
    public class ApiConnector
    {
        public dynamic Connect(string url)
        {
            dynamic jo;

            using (WebClient wc = new WebClient())
            {
                // This will make sure we can connect to our API and if we cannot it will give the user an error message to the user and exit the program.
                try
                {
                    string results = wc.DownloadString(url);
                    jo = JObject.Parse(results);

                }
                catch (System.Net.WebException)
                {
                    UI.DisplayColoredText("The API is currently unavalible right now, please check back later...", ConsoleColor.Red);
                    UI.Footer("Please press any key to exit the program...");
                    Console.ReadKey();
                    Environment.Exit(0);
                }
                finally
                {
                    string results = wc.DownloadString(url);
                    jo = JObject.Parse(results);
                }
            }
            return jo;
        }

        public List<Season> GetSeasons()
        {
            List<Season> seasons = new List<Season>();
            string url = "https://api.themoviedb.org/3/tv/46261?api_key=e09f7e263b35e3f1d1c4b952cdfd8de0";
            dynamic jo = Connect(url);

            foreach(dynamic s in jo.seasons)
            {
                string name = s.name;

                Season season = new Season(name);
                seasons.Add(season);
            }
            return seasons;
        }

        public List<Episode> GetEpisode(int selection)
        {
            List<Episode> episodes = new List<Episode>();
            string url = "https://api.themoviedb.org/3/tv/46261/season/" + selection + "?api_key=e09f7e263b35e3f1d1c4b952cdfd8de0";
            dynamic jo = Connect(url);

            foreach(dynamic e in jo.episodes)
            {
                string name = e.name;

                Episode episode = new Episode(name);
                episodes.Add(episode);
            }
            return episodes;
        }
    }
}
