# Movie-Ratings

## Overview
Movie-Ratings is a demo web application that allows a single user to track their personal written movie reviews and movie ratings, which range from 1 to 10. I created this application based on my long-standing enjoyment of keeping personal movie reviews.

> **This application is a work in progress.**

## User Interface Pages
- **Home Page**
  - Displays all movies in the personal movie collection, with a thumbnail cover art image for each movie.
  - Offers filtering options by genre and rating, or a combination of both, to limit the displayed movies.
  - Click a movie image to display detailed movie information, including the user's review and a larger cover art image.

- **Manage Reviews Page**
  - Shows a table of all movies in the user's personal movie collection.
    - The table supports multi-page navigation and sorting by column.
    - Includes a search function to find movies by title within the personal collection.
  - Provides CRUD operations to manage the movie review collection.

- **Add Review Page**
  - Enables users to search for movies by title and select a movie to write a review.
  - **Feature Implementation:**
    - **Third-Party API Integration:** Retrieves movie data from a third-party public movie database API.
    - **Automatic Genre Addition:** When a user adds a new movie, the application checks if any of the movie’s genres are missing from the local SQL Server database. If new genres are found, they are automatically added to ensure all genres can be used as search filters on the home page.

- **Movie Review Details Page**
  - Presents comprehensive details about a selected movie, including the user's review.

- **Edit Review Page**
  - Allows editing of an existing movie review.

## Technologies Used
- **Languages:** C#, JavaScript
- **Frameworks:** ASP.NET Core, Entity Framework Core (with migrations)
- **Database:** SQL Server
- **Frontend:** Razor Views, Bootstrap 5, HTML
- **Backend:** RESTful Web APIs for database access and secure access to a third-party movie API that provides movie data and images
- **Design Patterns:** Repository Pattern, Unit of Work Pattern
- **Third-Party Libraries:**
  - **DataTables:** Integrated DataTables from [datatables.net](https://datatables.net/) for advanced table features like pagination, sorting, and filtering
  - **Toastr:** Used for popup notifications.

# Key Limitations
- Single User Application: No support for multiple user accounts.
- No Authentication or Authorization
- Limited Error Handling
- No Unit Tests or Integration Tests
- Responsive Design: The UI is primarily for a desktop browser. While the UI was developed to be mostly responsive and has been tested on some viewport sizes, it will not look good on all devices, particularly smaller ones.


Copyright © Travis Dutchover. All rights reserved.