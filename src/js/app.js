// $("#fullpage").fullpage({
//   anchors: ['mainpage', 'aboutpage', 'profilepage', 'servicepage', 'friendpage', 'contactpage'],
//   menu: '#nav'
//   //navigation: true
// });

// $("#nav li").click(function(){
//   if($(".small-header").is(":visible")){
//     $("#nav").hide();
//   }
// });

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
  repeat: true
});

function is_mobile(){
  if($(window).width() < 640){
    console.log('is mobile');
    var list = $(".animated");
    list.each(function(){
      var for_small = $(this).data("vp-add-class-small");
      console.log(for_small);
      if(for_small){
        $(this).data("vp-add-class", for_small);
        console.log('ok');
      }
    });
  }else{
    console.log('is medium or large');
  }
}
