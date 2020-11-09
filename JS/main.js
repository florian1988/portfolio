if(typeof jQuery == "undefined"){
    console.log("jQuery error");
}else{
    console.log("jQuery ready");
}

$(document).ready(function(){

	//start web site fadein
    $('body').fadeIn('slow');


    //header scroll  down button
    $("#headerButton").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#firstMain").offset().top //target
      },
      800 //speed
    );
    
  });

  $("#firstMain").waypoint(function(){

    $("#firstMain").animate({left: '0%'}, "slow");
    


  });  
    

  var i = true;
  $("#skillsBtn").click(function(){
    if(i){
      $("#skillsWindow").fadeIn("slow");
      i = false;
    }else{
      $("#skillsWindow").fadeOut("slow");
      i = true;
    }
  });

  $("#closeBtn").click(function(){
    $("#skillsWindow").fadeOut("slow");
    i = true;
  });    


});




