$(document).ready(function () {
    $('#green').css({"background-color": "green", "color": "white"});
    $('#red').css({"background-color": "red", "color": "white"});
    $('#blue').css({"background-color": "blue", "color": "white"});
    
    $('#green').mouseover(function () {
        $('#text').css("color", "green"); 
    });
    $('#red').mouseover(function () {
        $('#text').css("color", "red"); 
    });
    $('#blue').mouseover(function () {
        $('#text').css("color", "blue"); 
    });
    $('#green, #red, #blue').mouseout(function () {
        $('#text').css("color", "black");         
    });
});