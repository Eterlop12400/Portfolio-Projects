using System;
using System.IO;
using System.Collections.Generic;

namespace Movie_Library
{

    class Program
    {
        // Property
        private static List<Movie> _movieList = new List<Movie>();

        public static void Main(string[] args)
        {
            // Menu option to add a movie
            List<string> addMovieOption = new List<string> { "Add Movie" };
            Menu addMovieMenu = new Menu(addMovieOption);

            // Clearing the list and loading it up with current movies from the txt file.
            _movieList.Clear();
            _movieList = LoadMovies();

            // Create a Library Object that will hold our list of movies and address of the library.
            Library movieLibrary = new Library(" 123 Main St.", _movieList);


            // Displaying menu to the user using console color.
            UI.ResetConsoleToDefaultColors();
            Console.Clear();
            UI.Header(" Movie Library");
            Console.ForegroundColor = ConsoleColor.DarkCyan;
            Console.WriteLine($" {movieLibrary.Address} : ");
            UI.ResetConsoleToDefaultColors();
            UI.Separator();
            Console.WriteLine(" ");
            movieLibrary.DisplayMovies();
            Console.WriteLine(" ");
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            addMovieMenu.DisplayItems(0);
            UI.ResetConsoleToDefaultColors();
            Console.WriteLine(" ");
            UI.Separator();
            Console.Write("Select a menu option: ");
            string userAnswerString = Console.ReadLine();
            int validatedAnswer = Validation.intValidation(userAnswerString);
            validatedAnswer = Validation.rangeValidation(0, _movieList.Count, validatedAnswer);

            // If condition based on what the user inputed.
            if(validatedAnswer == 0)
            {
                movieLibrary.AddMovie();

            } else
            {
                movieLibrary.ViewMovie(_movieList[validatedAnswer - 1]);

            }
        }

        // A method that will read movie information and create movie objects to be passed into a List of movie objects.
        private static List<Movie> LoadMovies()
        {
            using (StreamReader sr = new StreamReader("../../../Movies.txt"))
            {
                string line;
                while ((line = sr.ReadLine()) != null)
                {
                    string[] data = line.Split('|');
                    Movie newMovie = new Movie(data[0], data[1], data[2], data[3]);
                    _movieList.Add(newMovie);
                }
                return _movieList;
            }
        }
    }
    // End of Class.
}
