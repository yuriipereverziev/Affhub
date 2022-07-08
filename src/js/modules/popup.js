export default function () {
// JavaScript Document
  $(document).ready(function () {
    // Open Popup Js
    $(".popupbtn").click(function () {
      $(".popup-wrapper, .overlay").fadeIn("200");
    });
    // Close Popup Js
    $(".close").click(function () {
      $(".popup-wrapper, .overlay").fadeOut("200");
    });
  });
}
