
function hovered1(){
    document.getElementById("teddyPng").style.opacity = "0";
    document.getElementById("hov1").style.background="black";
    document.getElementById("hov1").style.opacity = "60%";
    document.getElementById("Kin").style.opacity = "1";
}
function done1(){
    document.getElementById("teddyPng").style.opacity = "1";
    document.getElementById("Kin").style.opacity = "0";
    document.getElementById("hov1").style.background="none";
}

function hovered2(){
    document.getElementById("VMFAPng").style.opacity = "0";
    document.getElementById("hov2").style.background="black";
    document.getElementById("hov2").style.opacity = "60%";
    document.getElementById("Ani").style.opacity = "1";
    console.log("Hover Over Ani");
}
function done2(){
    document.getElementById("VMFAPng").style.opacity = "1";
    document.getElementById("Ani").style.opacity = "0";
    document.getElementById("hov2").style.background="none";
}

function hovered3(){    
    document.getElementById("hov3").style.background="black";
    document.getElementById("hov3").style.opacity = "60%";
    document.getElementById("pro").style.opacity = "1";
  console.log("Working");
//  document.getElementById("proPng").offsetWidth = "400px";
  //this is to check if working properly.
  console.log("SizeChanged!!");
}
function done3(){
//    document.getElementById("ProPng").offsetWidth = "330px";
    document.getElementById("pro").style.opacity = "0";
    document.getElementById("hov3").style.background="none";
}

function hovered4(){
    document.getElementById("hov4").style.background="black";
    document.getElementById("hov4").style.opacity = "60%";
    document.getElementById("VMF").style.opacity = "1";
}
function done4(){
    document.getElementById("VMF").style.opacity = "0";
    document.getElementById("hov4").style.background="none";
}

function hovered5(){
    document.getElementById("hov5").style.background="black";
  document.getElementById("hov5").style.opacity="60%";
    document.getElementById("VMFW").style.opacity = "1";
}
function done5(){
    document.getElementById("VMFW").style.opacity = "0";
    document.getElementById("hov5").style.background="none";
}

