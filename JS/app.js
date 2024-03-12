document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") {
    currentPage = "index.html";
  }
  // Query all navbar links
  var links = document.querySelectorAll(".navbar-nav .navbar-link");

  // Iterate through each link to find the active one
  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      // Add 'active' class to the parent '.navbar-link' of the SVG
      link.classList.add("active");
    }
  });
});
