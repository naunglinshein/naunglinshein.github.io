$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // $(".scroll-up-btn").click(function () {
  //   $("html").animate({ scrollTop: 0 });
  //   $("html").css("scrollBehavior", "smooth");
  // });

});

fetch("/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
