$(document).ready(function () {
    // Array of Sitcoms
    var topics = ["Friends", "That 70's Show", "Fresh Prince", "Everybody Loves Raymond", "Home Improvment", "Full House", "Simpsons", "Seinfeld", "Will & Grace", "Mash"];

   // Function for displaying movie data
    function renderButtons() {

     $("#sitcoms-view").empty();
      $.each(topics, function (index,value) {
        var b = $("<button>")
          b.addClass("button2")
          b.attr("data-name",topics[index])
          b.text(topics[index]),
          $("#sitcoms-view").append(b);
      });

     // This function handles events where one button is clicked
      $("#add-sitcom").on("click", function () {

       event.preventDefault();

       var newSitcom = $("#sitcom-input").val().trim();
       

       topics.push(newSitcom);
        $("#sitcoms-input").val("");
        $("#sitcoms-view").empty();
        renderButtons();
        $("#sitcoms-input").val("");

     });
    }

   // Calling the renderButtons function to display the initial list of sitcoms
  
   renderButtons();

});

// trying to fix bug.  Everytime I type something into the form, the number of buttons multiply by 2