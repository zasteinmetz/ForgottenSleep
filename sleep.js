function next() {
    console.log("We're next");
var choice = $("#choice").val().toLowerCase();
switch(choice) {
    case "go to tree":
        console.log("tree");
        window.open("tree.html","_self");
        break;
    case "go to village":
        console.log("village");
        window.open("village.html","_self");
        break;
    default:
        console.log("Not working");
                 }
}