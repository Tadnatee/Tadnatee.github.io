var width = $(window).width(); 
$("#logo").hide();
window.onscroll = function () {
    if (width >= 1000) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            // Scrolled down
            $("#header").css({
                "background": "#fff",
                "color": "#000",
                "box-shadow": "0px 0px 20px rgba(0,0,0,0.09)",
                "padding": "4vh 4vw"
            });
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
            // Show the logo
            $("#logo").show();
        } else {
            // Not scrolled down
            $("#header").css({
                "background": "transparent",
                "color": "#fff",
                "box-shadow": "0px 0px 0px rgba(0,0,0,0)",
                "padding": "6vh 4vw"
            });
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid #fff");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
            // Show the logo
            $("#logo").hide();
        }
    }
};

function magnifyImage(imglink, description) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#photo-description").text(description);
    $("#magnify-image").css("display", "flex");
    $("#magnify-image").addClass("animated fadeIn");
    setTimeout(function () {
        $("#magnify-image").removeClass("animated fadeIn");
    }, 800);
}


function playYouTubeVideo(videoId, description) {
    // Hide image container and clear description
    $("#img_here").css("display", "none");
    $("#video-description").text("");

    // Show video container and set YouTube video source
    $("#video_here").html(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`);
    
    // Set and display video description
    $("#video-description").text(description);

    // Show magnify container
    $("#magnify-video").css("display", "flex");
    $("#magnify-video").addClass("animated fadeIn");
    
    setTimeout(function () {
        $("#magnify-video").removeClass("animated fadeIn");
    }, 800);
}
function closeMagnifyImage() {
    // Reset image container
    $("#img_here").css("display", "block");
    $("#img_here").css("background", `url('') center center`);

    // Remove video container and reset description
    $("#video_here").html("");
    $("#photo-description").text("");

    // Hide magnify container
    $("#magnify-image").addClass("animated fadeOut");
    setTimeout(function () {
        $("#magnify-image").css("display", "none");
        $("#magnify-image").removeClass("animated fadeOut");
    }, 800);
}

function closeMagnifyVideo() {
    // Reset image container
    $("#img_here").css("display", "block");
    $("#img_here").css("background", `url('') center center`);

    // Remove video container and reset description
    $("#video_here").html("");
    $("#video-description").text("");

    // Hide magnify container
    $("#magnify-video").addClass("animated fadeOut");
    setTimeout(function () {
        $("#magnify-video").css("display", "none");
        $("#magnify-video").removeClass("animated fadeOut");
    }, 800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  