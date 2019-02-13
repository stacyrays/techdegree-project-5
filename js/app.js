//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
const form = $(".search-container").append(`<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
</form>`);

const $gallery = $("#gallery");
let $modalContainer = $('<div class="modal-container"/>').insertAfter($gallery);

let $modal = $('<div class="modal"/>').appendTo($modalContainer);
let $btnClose = $(
  '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>'
).appendTo($modal);
let $modalInfoContainer = $('<div class="modal-info-container" />').insertAfter(
  $btnClose
);
//Build modal
$modalImage = $(
  `<img class="modal-img" src="#" alt="profile picture">`
).appendTo($modalInfoContainer);

$modalName = $(`<h3 id="name" class="modal-name cap"></h3>`).appendTo(
  $modalInfoContainer
);

$modalEmail = $(`<p class="modal-text"></p>`).appendTo($modalInfoContainer);

$modalLocation = $(`<p class="modal-text cap"></p>`).appendTo(
  $modalInfoContainer
);

$hr = $(`<hr>`).appendTo($modalInfoContainer);

$modalPhone = $(`<p class="modal-text"></p>`).appendTo($modalInfoContainer);

$modalAddress = $(`<p class="modal-text"></p>`).appendTo($modalInfoContainer);

$modalBirthday = $(`<p class="modal-text"> Birthday: </p>`).appendTo(
  $modalInfoContainer
);

$.ajax({
  url: "https://randomuser.me/api/?results=12",
  dataType: "json",
  success: function(data) {
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
      let $cardEmail = $(`<p class="card-text">${item.email}</p>`).appendTo(
        $cardInfoContainer
      );
      let $cardLocation = $(
        `<p class="card-text cap">${item.location.city}</p>`
      ).appendTo($cardInfoContainer);

      let $medImageURL = item.picture.medium;
      let $firstName = item.name.first;
      let $lastName = item.name.last;
      let $email = item.email;
      let $location = item.location.city;
      let $phone = item.phone;
      let $street = item.location.street;
      let $city = item.location.city;
      let $state = item.location.state;
      let $postal = item.location.postcode;

      //Parse DOB
      let $dobToParse = item.dob.date;
      let $dobYearParsed = $dobToParse.substring(0, 4);
      let $dobMonthParsed = $dobToParse.substring(5, 7);
      let $dobDayParsed = $dobToParse.substring(8, 10);

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
          $(".modal-img").attr("src", $medImageURL);
          $(".modal-name").text($firstName + " " + $lastName);
          $(".modal-text:eq(0)").text($email);
          $(".modal-text:eq(1)").text($city);
          $(".modal-text:eq(2)").text($phone);
          $(".modal-text:eq(3)").text(
            $street + ", " + $city + ", " + $state + " " + $postal
          );
          $(".modal-text:eq(4)").text(
            "Birthday: " +
              $dobMonthParsed +
              "/" +
              $dobDayParsed +
              "/" +
              $dobYearParsed
          );

          /*$modalPhone = $(`<p class="modal-text">${$phone}</p>`).appendTo(
            $modalInfoContainer
          );
          $modalAddress = $(
            `<p class="modal-text">${$street}, ${$city}, ${$state} ${$postal}</p>`
          ).appendTo($modalInfoContainer);
          $modalBirthday = $(
            `<p class="modal-text"> Birthday: ${$dobMonthParsed}/${$dobDayParsed}/${$dobYearParsed} </p>`
          ).appendTo($modalInfoContainer);
          console.log($medImageURL);*/
        }
        //BTN CLOSE EVENT
        $btnClose.on("click", function() {
          $.each($(".modal"), function(i, item) {
            //item.style.display = "none";
            $modalContainer.css("display", "none");
          });
        });
      });
    });
  }
});
