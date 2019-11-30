var sum = 24000;
var boxes = document.querySelectorAll("[name=chk_menu]");

for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("click", addSum);
}

function addSum() {
    if (this.checked) {
        sum += Number(this.value);
    } else {
        sum -= Number(this.value);
    }
    showSum();
}

function showSum(){
    document.querySelector("#sum").innerHTML = sum + "원";
}