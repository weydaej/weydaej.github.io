$(document).ready(function() {
  $(".h1-primary").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');
  
  $(".h1-recommendations").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".portrait").delay(250).animate({
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".intro-p").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".btns").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  650).removeClass('hidden');

  $(".buttons-div").delay(250).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  650).removeClass('hidden');

  $(".primary-footer").delay(250).animate({
    opacity: "1.0",
  },
  750).removeClass('hidden');

  $(".contact-footer").delay(650).animate({
    opacity: "1.0",
  },
  750).removeClass('hidden');

  $(".back-button").delay(1).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $(".comment-container-delay").delay(350).animate({
    marginTop: "1rem",
    opacity: "1.0",
  },
  550).removeClass('hidden');

  $("#fcf-form").delay(650).animate({
    marginTop: "-1rem",
    opacity: "1.0",
  },
  750).removeClass('hidden');
});

// Copy text to clipboard
function copyText() {
  navigator.clipboard.writeText
      ("emily.weyda@gmail.com");
}

// hover(cursor enter, cursor exit)
// setTimeout delays func exec
// clearTimeout resets setTimeout upon hover cursor exit

// var timer;

// $(".contact-button").hover(
//   function() {
//     timer = setTimeout(function() {
//         $(".far").animate({
//             opacity: "1.0"
//           },
//           100).addClass("moveright");
//       },
//     225);
//   },
//   function() {
//     clearTimeout(timer);
//     $(".far").animate({
//         opacity: "0"
//       },
//     1);
//   }
// );
