// menu bar collapsed js start
$(".menu ul li a").on("click", function () {
  $(".menu .navbar-collapse").collapse("hide");
});
// menu bar collapsed js start

// menu bar sticy/fiexd js start
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 660) {
    $(".menu").addClass("fixed");
  } else {
    $(".menu").removeClass("fixed");
  }
});
// menu bar sticy/fiexd js start

// banner slider start

$("#banner-part").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// banner slider end

// about part venubox start
$(document).ready(function () {
  $(".venobox").venobox();
});

// about part venubox end

// team part slider start

$("#team-part .team-slider").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// team part slider end

// testi part slider start

$("#testi-part .testi-slider").slick({
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// testi part slider end

// counter part js start

$("#counter-part .card .digits").counterUp({
  delay: 10,
  time: 1000,
});

// counter part js end

// color tab jquary js start

$("#colorful").colorfulTab();

$("#colorful-elliptic").colorfulTab({
  theme: "elliptic",
});

$("#colorful-flatline").colorfulTab({
  theme: "flatline",
});

$("#colorful-background-image").colorfulTab({
  theme: "flatline",
  backgroundImage: "true",
  overlayColor: "#002F68",
  overlayOpacity: "0.8",
});

// color tab jquary js end

// partners part slick slider start

$("#partners-part .members").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-right prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-left next" aria-hidden="true"></i>',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// partners part slick slider end

// back-top-btn js start

$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 1050) {
    $(".back-top-btn").addClass("fixed-btn");
  } else {
    $(".back-top-btn").removeClass("fixed-btn");
  }
});

$(".back-top-btn i").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

// back-top-btn js end
