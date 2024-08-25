namespace TravisMovieRatings.Shared;

public static class Constants
{
    /// <summary>
    /// Contains constants for name tags associated with HttpClient instances.
    /// These name tags are used to identify and configure HttpClient instances
    /// throughout the application, facilitating their management and reuse.
    /// </summary>
    public static class HttpClientNameTags
    {
        /// <summary>
        /// The name tag for HttpClient instances used for backend movie API calls.
        /// </summary>
        public const string BackendMovieApiClientName = "BackendMovieApiClient";
    }
}
