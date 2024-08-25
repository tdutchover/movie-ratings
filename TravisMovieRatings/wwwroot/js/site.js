// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

function isNewTab() {
    const SINGLE_PAGE_HISTORY_LENGTH = 1;
    return window.history.length <= SINGLE_PAGE_HISTORY_LENGTH;
}

function goBackToPreviousPage() {
    if (isNewTab()) {
        // Redirect to the home page if there's no previous page in the history.
        // This catch-all case can happen when the user opens the page in a new browser tab or window.
        window.location.href = "/";
    } else {
        // This is the typical case where the user navigated to the page from another page.
        window.history.back();
    }
}


