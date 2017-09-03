$(document).ready(function () {
    // Array of Sitcoms
    var topics = ["Friends", "That 70's Show", "Fresh Prince", "Everybody Loves Raymond", "Home Improvment", "Full House", "Simpsons", "Seinfeld", "Will & Grace", "Mash"];

    // Function for displaying movie data
    function renderButtons() {

        $("#sitcoms-view").empty();
        $.each(topics, function (index, value) {
            var b = $("<button>")
            b.addClass("button2")
            b.attr("data-name", topics[index])
            b.text(topics[index]),
                $("#sitcoms-view").append(b);
        });

    }

    // This function handles events where one button is clicked
    $("#add-sitcom").on("click", function () {

        event.preventDefault();

        var newSitcom = $("#sitcom-input").val().trim();

        topics.push(newSitcom);

        renderButtons();
        $("#sitcom-input").val("");

    });

    // Calling the renderButtons function to display the initial list of sitcoms

    renderButtons();

});


    // Here I am going to add the API and ajax the way we did in our homework to bring in the gifs
    $("button").on("click", function() {
        var sitcom = $(this).attr("data-sitcom");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          sitcom + "&api_key=6e575d67725e411280acd5e1a3c802a6";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var sitcomDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var sitcomImage = $("<img>");
          sitcomImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(sitcomImage);

          $("#gifs-appear-here").append(gifDiv);
        }
      });
  });