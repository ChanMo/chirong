$(".menu-toggle").bind("click", function(e){
  e.preventDefault();
  $("#nav").toggle();
});

$("#nav").onePageNav({
  currentClass: 'active',
  begin: function(){
    if($(".small-header").is(":visible")){
      $("#nav").hide();
    }
  }
});

var map = new AMap.Map('map', {
  resizeEnable: false,
  zoom:15,
  center: [117.122692,36.687315],
  mapStyle: 'dark',
  dragEnable: false,
  zoomEnable: false,
  touchZoom: false,
  scrollWheel: false
});

var marker = new AMap.Marker({
  position: [117.122692,36.687315],
  map:map
});

$(".animated").viewportChecker({
  classToAdd: 'fadeInUp',
  repeat: true
});

