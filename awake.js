function next() {
    console.log("We're next");
    var choice = $("#choice").val().toLowerCase();
switch(choice) {
    case "close window":
        console.log("");
        window.open(".html","_self");
        break;
    case "go downstairs":
        console.log("");
        window.open(".html","_self");
        break;
    default:
        console.log("Not working");
                 }    
    
console.log('about to set button');
$('#button1').click(next);
};