function confirmDeleteMovie(e, deleteMovieUrl) {
    e.preventDefault();
    //var deleteUrl = e.target.getAttribute('data-url');

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        focusCancel: true
    }).then((alertResult) => {
        if (alertResult.isConfirmed) {
            // Disable all buttons on the page
            //$('button').prop('disabled', true);
            //$('a').prop('disabled', true);

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
