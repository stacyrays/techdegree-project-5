//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
const $gallery = $("#gallery");

$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    //console.log(data);
    $.each(data.results, function(i) {
      console.log("Here is a name " + data.results[i].name.first);
      $('<div class="card"/>').appendTo($gallery);
      $('<div class="card-img-container"/>').appendTo(".card");
      $('<img class="card-img" src="#" alt="profile picture">').appendTo(
        ".card-img-container"
      );
      $(".card-img").attr("src", data.results[i].picture.large);
    });
  }
});

/*$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    console.log(data);

    $('<div class="card"/>').appendTo($gallery);
    $('<div class="card-img-container"/>').appendTo(".card");
    $('<img class="card-img" src="#" alt="profile picture">').appendTo(
      ".card-img-container"
    );

    $(".card-img").attr("src", data.results[0].picture.large);

    $('<div class="card-info-container">').insertAfter(".card-img-container");

    $('<h3 id="name" class="card-name cap" />').appendTo(
      ".card-info-container"
    );
    $("h3#name").text(
      data.results[0].name.first + " " + data.results[0].name.last
    );
    $('<p class="card-text">email</p>').insertAfter(".card-name");

    $(".card-text").text(data.results[0].email);

    $('<p class="card-text cap">city, state</p>').insertAfter(".card-text");

    $(".cap").text(
      data.results[0].location.city + ", " + data.results[0].location.state
    );
  }
});*/
