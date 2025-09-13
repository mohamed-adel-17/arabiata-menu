let group1 = document.querySelector(".group-1")
let group2 = document.querySelector(".group-2")
let group3 = document.querySelector(".group-3")

$(document).ready(function () {
  $("#category-2").click(function () {
    $(group1).hide(300);
    $(group3).hide(300);
    $(group2).show(200);
  });
  $("#category-3").click(function () {
    $(group1).hide(300);
    $(group2).hide(300);
    $(group3).show(200);
  });
  $("#category-1").click(function () {
    $(group2).hide(300);
    $(group3).hide(300);
    $(group1).show(200);
  });
});
