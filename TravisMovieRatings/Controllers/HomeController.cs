using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TravisMovieRatings.Models;
using TravisMovieRatings.Services;

namespace TravisMovieRatings.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> logger;

    public HomeController(ILogger<HomeController> logger)
    {
        this.logger = logger;
    }

    public IActionResult Index()
    {
        // TODO Implement first-time landing page
        // IF this is the user's first time visiting my site THEN
        //      Display splash screen landing page.
        // ELSE
        //      Reroute to view movie reviews (i.e. Movies/Reviews.cshtml)

        // Use a cookie to determine if this is the user's first time visiting this movie rating site.
        // How to read/write cookies with .net core:   https://www.c-sharpcorner.com/article/asp-net-core-working-with-cookie/

        return this.View();
    }

    public IActionResult About()
    {
        return this.View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return this.View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
    }
}