function showMenu() {
  document.getElementById("blue").style.display="none";
  document.getElementById("sel").style.display="inline";
  console.log("showed menu")
  //document.getElementById("blue").classList.add("blue");
  //document.getElementById("blue").classList.remove("white");
}


function changeColorToRed() {
  console.log("changed color to red");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("yellow");
  document.getElementById("blue").classList.remove("blue");
  document.getElementById("blue").classList.remove("white")
  document.getElementById("blue").classList.add("red");
}

function changeColorToBlue() {
  console.log("changed color to blue");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("yellow");
  document.getElementById("blue").classList.remove("red");
  document.getElementById("blue").classList.remove("white");
  document.getElementById("blue").classList.add("blue");
}

function changeColorToYellow() {
  console.log("changed color to red");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("yellow");
  document.getElementById("blue").classList.add("red");
}

function changeColorToRed() {
  console.log("changed color to red");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("yellow");
  document.getElementById("blue").classList.add("red");
}
