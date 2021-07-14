var mytabes = document.querySelectorAll(".info-list li");
var classeslist = [];
for(var i=0; i < mytabes.length; i++){
mytabes[i].addEventListener(
"click",
function(){
    document.body.classList.remove('selected');
   
},
false
);
}