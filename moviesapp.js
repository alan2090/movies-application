let currNum = 0;
let movieList = [];

$('#movie-form').on("submit", function(event){
    event.preventDefault();
    let movie = $("#movie").val();
    let rating = $("#rating").val();
    let movieData = {movie, rating, currNum};
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currNum++
    movieList.push(movieData);

    $("#table-body").append(HTMLtoAppend);
    $("#movie-form").trigger("reset");
});

$("tbody").on("click", ".btn.btn-delete", function(event){
    let indexToRemoveAt = movieList.findIndex(movie => movie.currNum === +$(event.target).data("deleteId"))

    movieList.splice(indexToRemoveAt, 1)

    $(event.target).closest("tr").remove();
})

function createMovieDataHTML(data) {
    return `
    <tr>
    <td>${data.movie}</td>
    <td>${data.rating}</td>
    <td> <button class="btn btn-delete" data-delete-id=${data.currNum}>Delete</button></td>
    </tr>
    `;
}