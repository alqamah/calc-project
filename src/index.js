var str = "";
var dbox = document.getElementById("display-box");
var er = 0;
var p = 0;
var n1 = 0,
  res = 0;
document.getElementById("per").addEventListener("click", perc);
document.getElementById("acl").addEventListener("click", clr);
document.getElementById("del").addEventListener("click", del);
document.getElementById("div").addEventListener("click", function () {
  disp("/");
});
document.getElementById("7").addEventListener("click", function () {
  disp("7");
});
document.getElementById("8").addEventListener("click", function () {
  disp("8");
});
document.getElementById("9").addEventListener("click", function () {
  disp("9");
});
document.getElementById("mul").addEventListener("click", function () {
  disp("*");
});
document.getElementById("4").addEventListener("click", function () {
  disp("4");
});
document.getElementById("5").addEventListener("click", function () {
  disp("5");
});
document.getElementById("6").addEventListener("click", function () {
  disp("6");
});
document.getElementById("min").addEventListener("click", function () {
  disp("-");
});
document.getElementById("1").addEventListener("click", function () {
  disp("1");
});
document.getElementById("2").addEventListener("click", function () {
  disp("2");
});
document.getElementById("3").addEventListener("click", function () {
  disp("3");
});
document.getElementById("plu").addEventListener("click", function () {
  disp("+");
});
document.getElementById("dot").addEventListener("click", function () {
  disp(".");
});
document.getElementById("0").addEventListener("click", function () {
  disp("0");
});
document.getElementById("eq").addEventListener("click", equal);

function perc() {
  p = 1;
  n1 = str;
  dbox.style.textAlign = "left";
  dbox.style.fontSize = "30px";
  console.log("perc");
  dbox.value = str + "% of";
  str = "";
}

function disp(key) {
  res = 0;
  if (er === 1) {
    er = 0;
    clr();
  }
  console.log(key);
  dbox.style.textAlign = "left";
  dbox.style.fontSize = "30px";
  console.log(key);
  str += key;
  dbox.value = str;
}

function clr() {
  console.log("clear");
  str = "";
  dbox.value = "";
}

function del() {
  console.log("del");
  str = str.substring(0, str.length - 1);
  disp("");
}

function equal() {
  try {
    if (p === 1) {
      res = eval((n1 / 100) * str);
      p = 0;
    } else {
      res = eval(str);
    }
    clr();
    console.log(res);
    dbox.style.fontSize = "50px";
    dbox.style.textAlign = "right";
    dbox.value = res;
  } catch (err) {
    clr();
    console.log("err");
    dbox.style.fontSize = "30px";
    dbox.style.textAlign = "right";
    dbox.value = "Invalid Syntax";
    er = 1;
  }
}

//Author: Alqama Hasnain
