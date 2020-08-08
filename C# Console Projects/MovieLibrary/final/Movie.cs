using System;

namespace Movie_Library
{

    public class Movie
    {
        //Properties
        public string Title { get; set; }
        public string Year { get; set; }
        public string Director { get; set; }
        public string Summary { get; set; }

        // Class Constructor
        public Movie(string title, string year, string director, string summary)
        {
            Title = title;
            Year = year;
            Director = director;
            Summary = summary;
        }
    }
}
