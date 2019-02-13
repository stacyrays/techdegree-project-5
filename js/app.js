//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
const form = $(".search-container").append(`<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
</form>`);

const $gallery = $("#gallery");
const $modalContainer = $('<div class="modal-container"/>').insertAfter(
  $gallery
);

//Build modal
const $modal = $('<div class="modal"/>').appendTo($modalContainer);
const $btnClose = $(
  '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>'
).appendTo($modal);
const $modalInfoContainer = $(
  '<div class="modal-info-container" />'
).insertAfter($btnClose);

const $modalImage = $(
  `<img class="modal-img" src="#" alt="profile picture">`
).appendTo($modalInfoContainer);

const $modalName = $(`<h3 id="name" class="modal-name cap"></h3>`).appendTo(
  $modalInfoContainer
);

const $modalEmail = $(`<p class="modal-text"></p>`).appendTo(
  $modalInfoContainer
);

const $modalLocation = $(`<p class="modal-text cap"></p>`).appendTo(
  $modalInfoContainer
);

const $hr = $(`<hr>`).appendTo($modalInfoContainer);

const $modalPhone = $(`<p class="modal-text"></p>`).appendTo(
  $modalInfoContainer
);

const $modalAddress = $(`<p class="modal-text"></p>`).appendTo(
  $modalInfoContainer
);

const $modalBirthday = $(`<p class="modal-text"> Birthday: </p>`).appendTo(
  $modalInfoContainer
);

$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
    //BUILD CARD GRID
    $.each(data.results, function(i, item) {
      const $card = $('<div class="card"/>').appendTo($gallery);
      const $imgContainer = $('<div class="card-img-container"/>').appendTo(
        $card
      );
      const $image = $(
        `<img class="card-img" src="${
          item.picture.thumbnail
        }" alt="profile picture">`
      ).appendTo($imgContainer);
      const $cardInfoContainer = $(
        '<div class="card-info-container">'
      ).appendTo($card);
      const $name = $(
        `<h3 id="name" class="card-name cap">${item.name.first} ${
          item.name.last
        } </h3>`
      ).appendTo($cardInfoContainer);
      const $cardEmail = $(`<p class="card-text">${item.email}</p>`).appendTo(
        $cardInfoContainer
      );
      const $cardLocation = $(
        `<p class="card-text cap">${item.location.city}</p>`
      ).appendTo($cardInfoContainer);

      const $medImageURL = item.picture.medium;
      const $firstName = item.name.first;
      const $lastName = item.name.last;
      const $email = item.email;
      const $location = item.location.city;
      const $phone = item.phone;
      const $street = item.location.street;
      const $city = item.location.city;
      const $state = item.location.state;
      const $postal = item.location.postcode;

      //Parse DOB
      const $dobToParse = item.dob.date;
      const $dobYearParsed = $dobToParse.substring(0, 4);
      const $dobMonthParsed = $dobToParse.substring(5, 7);
      const $dobDayParsed = $dobToParse.substring(8, 10);

      //CLICK CARD
      $card.on("click", function() {
        console.log($(this));
        if (
          event.target.parentNode.parentNode === $(".card")[i] ||
          event.target.parentNode === $(".card")[i] ||
          event.target === $(".card")[i]
        ) {
          //Show modal:
          $modalContainer.css("display", "block");
          $modal.css("display", "block");

          //Build modal with data
          $modalImage.attr("src", $medImageURL);
          $modalName.text($firstName + " " + $lastName);
          $modalEmail.text($email);
          $modalLocation.text($city);
          $modalPhone.text($phone);
          $modalAddress.text(
            $street + ", " + $city + ", " + $state + " " + $postal
          );
          $modalBirthday.text(
            "Birthday: " +
              $dobMonthParsed +
              "/" +
              $dobDayParsed +
              "/" +
              $dobYearParsed
          );
        }
        //BTN CLOSE EVENT
        $btnClose.on("click", function() {
          $modalContainer.css("display", "none");
        });
      });
    });
  }
});
