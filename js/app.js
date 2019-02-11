//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
let $gallery = $("div#gallery.gallery");
let $modalContainer = $('<div class="modal-container"/>').insertAfter($gallery);

$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    console.log(data.results);

    //BUILD CARD GRID
    $.each(data.results, function(i, item) {
      let $card = $('<div class="card"/>').appendTo($gallery);
      let $imgContainer = $('<div class="card-img-container"/>').appendTo(
        $card
      );
      let $image = $(
        `<img class="card-img" src="${
          item.picture.thumbnail
        }" alt="profile picture">`
      ).appendTo($imgContainer);
      let $cardInfoContainer = $('<div class="card-info-container">').appendTo(
        $card
      );
      let $name = $(
        `<h3 id="name" class="card-name cap">${item.name.first} ${
          item.name.last
        } </h3>`
      ).appendTo($cardInfoContainer);
      let $email = $(`<p class="card-text">${item.email}</p>`).appendTo(
        $cardInfoContainer
      );
      let $location = $(
        `<p class="card-text cap">${item.location.city}</p>`
      ).appendTo($cardInfoContainer);

      //BUILD MODAL
      let $modal = $('<div class="modal"/>').appendTo($modalContainer);
      let $btnClose = $(
        '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>'
      ).appendTo($modal);
      let $modalInfoContainer = $(
        '<div class="modal-info-container">'
      ).insertAfter($btnClose);
      let $modalImage = $(
        `<img class="modal-img" src="${
          item.picture.medium
        }" alt="profile picture">`
      ).appendTo($modalInfoContainer);
      let $modalName = $(
        `<h3 id="name" class="modal-name cap">${item.name.first} ${
          item.name.last
        }
  </h3>`
      ).appendTo($modalInfoContainer);
      let $modalEmail = $(`<p class="modal-text">${item.email}</p>`).appendTo(
        $modalInfoContainer
      );
      let $modalLocation = $(
        `<p class="card-text cap">${item.location.city}</p>`
      ).appendTo($modalInfoContainer);
      let $hr = $(`<hr>`).appendTo($modalInfoContainer);
      let $modalPhone = $(`<p class="modal-text">${item.phone}</p>`).appendTo(
        $modalInfoContainer
      );
      let $modalAddress = $(
        `<p class="modal-text">${item.location.street}, ${
          item.location.city
        }, ${item.location.state} ${item.location.postcode}</p>`
      ).appendTo($modalInfoContainer);

      //Parse DOB
      let $dobToParse = item.dob.date;
      let $dobYearParsed = $dobToParse.substring(0, 4);
      let $dobMonthParsed = $dobToParse.substring(5, 7);
      let $dobDayParsed = $dobToParse.substring(8, 10);
      console.log($dobDayParsed);

      let $modalBirthday = $(
        `<p class="modal-text"> Birthday: ${$dobMonthParsed}/${$dobDayParsed}/${$dobYearParsed}</p>`
      ).appendTo($modalInfoContainer);

      //BTN CLOSE EVENT
      $btnClose.on("click", function() {
        $.each($(".modal"), function(i, item) {
          item.style.display = "none";
          $modalContainer.css("display", "none");
        });
      });

      //CLICK CARD
      $card.on("click", function() {
        if (event.target.parentNode.parentNode === $(".card")[i]) {
          $modalContainer.css("display", "block");
          document.getElementsByClassName("modal")[i].style.display = "block";
        }
      });
    });
  }
});
