//cd Desktop/LZ/Tutorials/Treehouse/TechDegree/techdegree-project-5
//python -m SimpleHTTPServer
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function(data) {
    console.log(data);
  }
});
