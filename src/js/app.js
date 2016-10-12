$(".menu-toggle").bind("click", function(e){
  e.preventDefault();
  $("#nav").toggle();
});

$("#nav").onePageNav({
  currentClass: 'active'
});

