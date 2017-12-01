function next() {
    console.log("We're next");
    var choice = $("#choice").val().toLowerCase();
switch(choice) {
    case "go back to sleep":
        console.log("sleep");
        window.open("sleep.html","_self");
        break;
    case "get up":
        console.log("up");
        window.open("awake.html","_self");
        break;
    default:
        console.log("Not working");
                 }    
    
console.log('about to set button');
$('#button1').click(next);
};
//$(document).ready(function() {
//    $('#button1').click(next);    
//});