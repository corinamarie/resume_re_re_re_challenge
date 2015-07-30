$(document).ready(function() {

    $("body").prepend("<button id='clickyButton'>click here</button>");

    $("#main").hide();

    $("body").on('click', '#clickyButton', function(){
        $('#clickyButton').hide();
        $("#main").slideDown();
    });

    $("body").on('click', '#main', function(){
        $("#main").slideUp();
        $('#clickyButton').show();
    });
});