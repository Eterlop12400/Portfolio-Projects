using System;
using System.IO;
using System.Collections.Generic;

namespace Movie_Library
{

    public class Library
    {
        // Field
        private List<Movie> _movieList = new List<Movie>();

        // Auto property
        public string Address { get; }

        // Class Constructor
        public Library(string address, List<Movie> movieList)
        {
            Address = address;
            _movieList = movieList;
        }




        // Class Methods

        // A class method that will add a movie to the list.
        public void AddMovie()
        {
            using (StreamWriter sw = File.AppendText("../../../Movies.txt"))
            {
                Console.Clear();
                UI.Header(" Add Movie");
                Console.WriteLine("");
                Console.Write("Title: ");
                string movieTitle = Validation.stringValidation(Console.ReadLine());
                Console.Write("Year: ");
                string movieYear = Validation.stringValidation(Console.ReadLine());
                int year = Validation.intValidation(movieYear);
                year = Validation.rangeValidation(1, 2020, year);
                Console.Write("Director: ");
                string movieDirector = Validation.stringValidation(Console.ReadLine());
                Console.Write("Summary: ");
                string movieSummary = Validation.stringValidation(Console.ReadLine());

                sw.Write($"{movieTitle}|{year.ToString()}|{movieDirector}|{movieSummary}\r\n");
            }

            UI.Separator();
            Console.Write("Press any key to return to the menu: ");
            Console.ReadKey();
            Program.Main(null);
        }

        // A class method that will remove a movie to the list.
        public void RemoveMovie(Movie selectedMovie)
        {
            _movieList.Remove(selectedMovie);

            using (StreamWriter sw = new StreamWriter("../../../Movies.txt"))
            {
                foreach (Movie movie in _movieList)
                {
                    sw.Write($"{movie.Title}|{movie.Year}|{movie.Director}|{movie.Summary}\r\n");

                }
            }
        }

            // A class method that will view a movie to the list. Asking if the user would like to rent the movie or return to the main menu.
            public void ViewMovie(Movie selectedMovie)
        {
            List<string> options = new List<string> {"Rent Movie", "Return to Library" };
            Menu optionsMenu = new Menu(options);

            Console.Clear();
            UI.Header(selectedMovie.Title);
            Console.WriteLine(" ");
            UI.DisplayColoredText("Year: ", ConsoleColor.DarkCyan);
            Console.WriteLine(selectedMovie.Year);
            UI.DisplayColoredText("Director: ", ConsoleColor.DarkCyan);
            Console.WriteLine(selectedMovie.Director);
            Console.WriteLine("\r\n");
            UI.DisplayColoredText("Summary: ", ConsoleColor.DarkCyan);
            Console.Write("\r\n");
            Console.WriteLine($"{selectedMovie.Summary}");
            Console.WriteLine(" ");
            UI.Separator();
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            optionsMenu.DisplayDec(1);
            Console.WriteLine(" ");
            UI.ResetConsoleToDefaultColors();
            UI.Separator();
            Console.Write("Select a Menu Option: ");
            string userInput = Validation.stringValidation(Console.ReadLine());
            int input = Validation.intValidation(userInput);
            input = Validation.rangeValidation(0, 1, input);

            if (input == 1)
            {
                RemoveMovie(selectedMovie);
                Program.Main(null);

            } else
            {
                Program.Main(null);

            }

        }


        // A method to display movie titles of the movie objects in the list, using a dynamic menu to do so.
        public void DisplayMovies()
        {
            List<string> movieTitle = new List<string>();

            foreach(Movie title in _movieList)
            {
                movieTitle.Add(title.Title);
            }

            Menu movieLibrary = new Menu(movieTitle);
            movieLibrary.DisplayItems(1);
            UI.ResetConsoleToDefaultColors();

        }

    }
}