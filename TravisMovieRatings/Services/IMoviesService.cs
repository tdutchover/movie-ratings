namespace TravisMovieRatings.Services;

using TravisMovieRatings.Models;

public interface IMoviesService
{
    Task<MoviesViewModel> FetchAllMovieViewModelsAsync();

    Task<MoviesViewModel> FetchFilteredMovieViewModelsAsync(MovieFilterFormModel filterCriteria);
}
