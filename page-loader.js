// Page Loaders
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})

// Session storage for 1x pre-loader view
$(document).ready(function() {
  $(window).load(function() {
      function Preloader() {
          var preloader = $ ('.loader');
          preloader.delay(1000) .fadeOut (500);
          var preloader = $('.preloader');
          preloader.delay (1500) .slideUp(500);
      }
      if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
          sessionStorage.setItem( 'doNotShow', 'true' );
          Preloader();
      } else {
         $ ('.loader, .preloader').hide();
      }
  });
});
