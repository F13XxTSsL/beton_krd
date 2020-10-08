$(document).ready(function () {
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $(".owl-carousel").owlCarousel({
    margin: 0,
    loop: true,
    center: true,
    autoWidth: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    touchDrag: true,
    responsive: {
      768: {
        items: 1,
      },
    },
  });

  $(".ham").click(function () {
    $(".header__nav").toggleClass("active");
    $(".header__logo-link").toggleClass("active");
    $(this).toggleClass("active");
    setTimeout(function () {
      $(".header__nav-lists").toggleClass("active");
    }, 100);
  });

  $(".header__nav-link").click(function () {
    $(".header__nav").removeClass("active");
    $(".header__logo-link").removeClass("active");
    $(".header__nav-lists").removeClass("active");
    $(".ham").removeClass("active");
  });


  
  $('.shape__items-card').on('click', 'button', function(event) {

    let sizeActive = $(event.delegateTarget.firstElementChild.lastElementChild)
    $(sizeActive[0]).toggleClass('active')
    $(this).toggleClass('active')
})

});
