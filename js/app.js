//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
const $gallery = $("#gallery");
$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    console.log(data);
    console.log(data.results[0].picture.large);
    console.log(data.results[0].name.first);
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
    $('<p class="card-text cap">city, state</p>').insertAfter(".card-text");
  }
});
