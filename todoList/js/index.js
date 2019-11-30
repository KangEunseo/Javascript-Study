var checkList = document.querySelectorAll("li");

for (var i=0; i<checkList.length; i++){
    checkList[i].addEventListener("click", changeColor);
}

function changeColor(){
    this.style.color = "#ccc";
}