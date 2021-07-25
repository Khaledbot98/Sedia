// $(document).ready(function () {
//   var stickyNavTop = $(".nav").offset().top;

//   var stickyNav = function () {
//     var scrollTop = $(window).scrollTop();

//     if (scrollTop > stickyNavTop) {
//       $(".nav").addClass("sticky");
//     } else {
//       $(".nav").removeClass("sticky");
//     }
//   };

//   stickyNav();

//   $(window).scroll(function () {
//     stickyNav();
//   });
// });

// $(window).scroll(function () {
//   $("nav").toggleClass("color", $(this).scrollTop() > 50);
// });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 400);
  });
});

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "All") {
      $(".item-box").show("1000");
    } else {
      $(".item-box")
        .not("." + value)
        .hide("1000");
      $(".item-box")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

let span = document.querySelector(".back-top");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const counters = document.querySelectorAll(".count");
const speed = 400;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
