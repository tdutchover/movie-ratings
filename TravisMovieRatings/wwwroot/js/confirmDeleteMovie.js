function confirmDeleteMovie(e, deleteMovieUrl, movieName, movieThumbnailUrl) {
    e.preventDefault();

    Swal.fire({
        title: 'Are you sure?',
        html: `
            <p>You are about to delete:</p>
            <h3>${movieName}</h3>
            <img src="${movieThumbnailUrl}" alt="Movie Thumbnail" style="width: 100px; height: auto;"/>
            <p>This action cannot be undone!</p>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        focusCancel: true
    }).then((alertResult) => {
        if (alertResult.isConfirmed) {
            $.ajax({
                url: deleteMovieUrl,
                type: 'DELETE',
                success: function (response) {

                },
                error: function (request, msg, error) {

                }
            }).always(function (response) {
                window.location.href = response.redirectUrl;
            });
        }
    })
}
