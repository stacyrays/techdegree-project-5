//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
let $gallery = $("div#gallery.gallery");
let $images = [];
let $firstName = [];
console.log($gallery);

$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    console.log(data.results);
    $.each(data.results, function(i, img, name) {
      $images.push(img.picture.thumbnail);
      console.log(img.picture.thumbnail);
      $firstName.push(data.results[i].name.first);

      let card = $('<div class="card"/>').appendTo($gallery);
      let imgContainer = $('<div class="card-img-container"/>').appendTo(card);
      let image = $(
        '<img class="card-img" src="#" alt="profile picture">'
      ).appendTo(imgContainer);
      let imageSource = $(".card-img").attr("src", $images[i]);
    });
  }
});
