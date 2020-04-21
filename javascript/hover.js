function hovered() {
//    this.style.backgroundColor = "#0000ff";
  document.getElementById("teddyPng").style.opacity="0";
}

function off() {
//    this.style.backgroundColor = "#ff0000";
  document.getElementById("teddyPng").style.opacity="1";

}

document.getElementById("teddyImg").addEventListener("mouseover",hovered);
document.getElementById("teddyImg").addEventListener("mouseout",off);

//function userHover() {
//  document.getElementById("teddyImg").style.backgroundColor= "black";
//}