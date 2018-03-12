function showMenu() {
  document.getElementById("blue").style.display="none";
  document.getElementById("sel").style.display="inline";
  console.log("showed menu")
  //document.getElementById("blue").classList.add("blue");
  //document.getElementById("blue").classList.remove("white");
}

function showMenuTwo() {
  document.getElementById("bottomRight").style.display="none";
  document.getElementById("selTwo").style.display="inline";
  console.log("showed menu")
}

function showMenuThree() {
  document.getElementById("middle").style.display="none";
  document.getElementById("selThree").style.display="inline";
  console.log("showed menu")
}

function showMenuFour() {
  document.getElementById("topleft").style.display="none";
  document.getElementById("selFour").style.display="inline";
  console.log("showed menu")
}

function showMenuFive() {
  document.getElementById("topThree").style.display="none";
  document.getElementById("selFive").style.display="inline";
  console.log("showed menu")
}

function showMenuSix() {
  document.getElementById("topFour").style.display="none";
  document.getElementById("selSix").style.display="inline";
  console.log("showed menu")
}

function showMenuSeven() {
  document.getElementById("topFive").style.display="none";
  document.getElementById("selSeven").style.display="inline";
  console.log("showed menu")
}
// FOR BOTTOM LEFT BLOCK

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
  console.log("changed color to yellow");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("blue");
  document.getElementById("blue").classList.remove("white");
  document.getElementById("blue").classList.remove("red");
  document.getElementById("blue").classList.add("yellow");
}

function changeColorToWhite() {
  console.log("changed color to white");
  document.getElementById("sel").style.display="none";
  document.getElementById("blue").style.display="inline";
  document.getElementById("blue").classList.remove("yellow");
  document.getElementById("blue").classList.remove("blue");
  document.getElementById("blue").classList.remove("red");
  document.getElementById("blue").classList.add("white");
}

// FOR BOTTOM RIGHT BLOCK

function changeColorToRedTwo() {
  console.log("changed color to red");
  document.getElementById("selTwo").style.display="none";
  document.getElementById("bottomRight").style.display="inline";
  document.getElementById("bottomRight").classList.remove("yellow");
  document.getElementById("bottomRight").classList.remove("blue");
  document.getElementById("bottomRight").classList.remove("white")
  document.getElementById("bottomRight").classList.add("red");
}

function changeColorToBlueTwo() {
  console.log("changed color to blue");
  document.getElementById("selTwo").style.display="none";
  document.getElementById("bottomRight").style.display="inline";
  document.getElementById("bottomRight").classList.remove("yellow");
  document.getElementById("bottomRight").classList.remove("red");
  document.getElementById("bottomRight").classList.remove("white");
  document.getElementById("bottomRight").classList.add("blue");
}

function changeColorToYellowTwo() {
  console.log("changed color to yellow");
  document.getElementById("selTwo").style.display="none";
  document.getElementById("bottomRight").style.display="inline";
  document.getElementById("bottomRight").classList.remove("blue");
  document.getElementById("bottomRight").classList.remove("white");
  document.getElementById("bottomRight").classList.remove("red");
  document.getElementById("bottomRight").classList.add("yellow");
}

function changeColorToWhiteTwo() {
  console.log("changed color to white");
  document.getElementById("selTwo").style.display="none";
  document.getElementById("bottomRight").style.display="inline";
  document.getElementById("bottomRight").classList.remove("yellow");
  document.getElementById("bottomRight").classList.remove("blue");
  document.getElementById("bottomRight").classList.remove("red");
  document.getElementById("bottomRight").classList.add("white");
}

// FOR MIDDLE BLOCK

function changeColorToRedThree() {
  console.log("changed color to red");
  document.getElementById("selThree").style.display="none";
  document.getElementById("middle").style.display="inline";
  document.getElementById("middle").classList.remove("yellow2");
  document.getElementById("middle").classList.remove("blue2");
  document.getElementById("middle").classList.remove("white4")
  document.getElementById("middle").classList.add("redMiddle");
}

function changeColorToBlueThree() {
  console.log("changed color to blue");
  document.getElementById("selThree").style.display="none";
  document.getElementById("middle").style.display="inline";
  document.getElementById("middle").classList.remove("yellow2");
  document.getElementById("middle").classList.remove("redMiddle");
  document.getElementById("middle").classList.remove("white4");
  document.getElementById("middle").classList.add("blue2");
}

function changeColorToYellowThree() {
  console.log("changed color to yellow");
  document.getElementById("selThree").style.display="none";
  document.getElementById("middle").style.display="inline";
  document.getElementById("middle").classList.remove("blue2");
  document.getElementById("middle").classList.remove("white4");
  document.getElementById("middle").classList.remove("redMiddle");
  document.getElementById("middle").classList.add("yellow2");
}

function changeColorToWhiteThree() {
  console.log("changed color to white");
  document.getElementById("selThree").style.display="none";
  document.getElementById("middle").style.display="inline";
  document.getElementById("middle").classList.remove("yellow2");
  document.getElementById("middle").classList.remove("blue2");
  document.getElementById("middle").classList.remove("redMiddle");
  document.getElementById("middle").classList.add("white4");
}

//FOR TOP left

function changeColorToRedFour() {
  console.log("changed color to red");
  document.getElementById("selFour").style.display="none";
  document.getElementById("topleft").style.display="inline";
  document.getElementById("topleft").classList.remove("yellow");
  document.getElementById("topleft").classList.remove("blue");
  document.getElementById("topleft").classList.remove("white")
  document.getElementById("topleftTwo").classList.remove("yellow7");
  document.getElementById("topleftTwo").classList.remove("blue7");
  document.getElementById("topleftTwo").classList.remove("white7")
  document.getElementById("topleftThree").classList.remove("yellow2");
  document.getElementById("topleftThree").classList.remove("blue2");
  document.getElementById("topleftThree").classList.remove("white3")
  document.getElementById("topleft").classList.add("red");
  document.getElementById("topleftTwo").classList.add("red7");
  document.getElementById("topleftThree").classList.add("redMiddle");
}

function changeColorToBlueFour() {
  console.log("changed color to blue");
  document.getElementById("selFour").style.display="none";
  document.getElementById("topleft").style.display="inline";
  document.getElementById("topleft").classList.remove("yellow");
  document.getElementById("topleft").classList.remove("red");
  document.getElementById("topleft").classList.remove("white");
  document.getElementById("topleft").classList.add("blue");
  document.getElementById("topleftTwo").classList.remove("yellow7");
  document.getElementById("topleftTwo").classList.remove("red7");
  document.getElementById("topleftTwo").classList.remove("white7");
  document.getElementById("topleftTwo").classList.add("blue7");
  document.getElementById("topleftThree").classList.remove("yellow2");
  document.getElementById("topleftThree").classList.remove("redMiddle");
  document.getElementById("topleftThree").classList.remove("white3");
  document.getElementById("topleftThree").classList.add("blue2");
}

function changeColorToYellowFour() {
  console.log("changed color to yellow");
  document.getElementById("selFour").style.display="none";
  document.getElementById("topleft").style.display="inline";
  document.getElementById("topleft").classList.remove("blue");
  document.getElementById("topleft").classList.remove("white");
  document.getElementById("topleft").classList.remove("red");
  document.getElementById("topleft").classList.add("yellow");
  document.getElementById("topleftTwo").classList.remove("blue7");
  document.getElementById("topleftTwo").classList.remove("white7");
  document.getElementById("topleftTwo").classList.remove("red7");
  document.getElementById("topleftTwo").classList.add("yellow7");
  document.getElementById("topleftThree").classList.remove("blue2");
  document.getElementById("topleftThree").classList.remove("white3");
  document.getElementById("topleftThree").classList.remove("redMiddle");
  document.getElementById("topleftThree").classList.add("yellow2");
}

function changeColorToWhiteFour() {
  console.log("changed color to white");
  document.getElementById("selFour").style.display="none";
  document.getElementById("topleft").style.display="inline";
  document.getElementById("topleft").classList.remove("yellow");
  document.getElementById("topleft").classList.remove("blue");
  document.getElementById("topleft").classList.remove("red");
  document.getElementById("topleft").classList.add("white");
  document.getElementById("topleftTwo").classList.remove("yellow7");
  document.getElementById("topleftTwo").classList.remove("blue7");
  document.getElementById("topleftTwo").classList.remove("red7");
  document.getElementById("topleftTwo").classList.add("white7");
  document.getElementById("topleftThree").classList.remove("yellow");
  document.getElementById("topleftThree").classList.remove("blue2");
  document.getElementById("topleftThree").classList.remove("red");
  document.getElementById("topleftThree").classList.add("white3");
}

// FOR THIRD FROM RIGHT BLOCK

function changeColorToRedFive() {
  console.log("changed color to red");
  document.getElementById("selFive").style.display="none";
  document.getElementById("topThree").style.display="inline";
  document.getElementById("topThree").classList.remove("yellow");
  document.getElementById("topThree").classList.remove("blue");
  document.getElementById("topThree").classList.remove("white")
  document.getElementById("topThree").classList.add("red");
}

function changeColorToBlueFive() {
  console.log("changed color to blue");
  document.getElementById("selFive").style.display="none";
  document.getElementById("topThree").style.display="inline";
  document.getElementById("topThree").classList.remove("yellow");
  document.getElementById("topThree").classList.remove("red");
  document.getElementById("topThree").classList.remove("white");
  document.getElementById("topThree").classList.add("blue");
}

function changeColorToYellowFive() {
  console.log("changed color to yellow");
  document.getElementById("selFive").style.display="none";
  document.getElementById("topThree").style.display="inline";
  document.getElementById("topThree").classList.remove("blue");
  document.getElementById("topThree").classList.remove("white");
  document.getElementById("topThree").classList.remove("red");
  document.getElementById("topThree").classList.add("yellow");
}

function changeColorToWhiteFive() {
  console.log("changed color to white");
  document.getElementById("selFive").style.display="none";
  document.getElementById("topThree").style.display="inline";
  document.getElementById("topThree").classList.remove("yellow");
  document.getElementById("topThree").classList.remove("blue");
  document.getElementById("topThree").classList.remove("red");
  document.getElementById("topThree").classList.add("white");
}

// FOR SECOND FROM RIGHT BLOCK

function changeColorToRedSix() {
  console.log("changed color to red");
  document.getElementById("selSix").style.display="none";
  document.getElementById("topFour").style.display="inline";
  document.getElementById("topFour").classList.remove("yellow");
  document.getElementById("topFour").classList.remove("blue");
  document.getElementById("topFour").classList.remove("white")
  document.getElementById("topFour").classList.add("red");
}

function changeColorToBlueSix() {
  console.log("changed color to blue");
  document.getElementById("selSix").style.display="none";
  document.getElementById("topFour").style.display="inline";
  document.getElementById("topFour").classList.remove("yellow");
  document.getElementById("topFour").classList.remove("red");
  document.getElementById("topFour").classList.remove("white");
  document.getElementById("topFour").classList.add("blue");
}

function changeColorToYellowSix() {
  console.log("changed color to yellow");
  document.getElementById("selSix").style.display="none";
  document.getElementById("topFour").style.display="inline";
  document.getElementById("topFour").classList.remove("blue");
  document.getElementById("topFour").classList.remove("white");
  document.getElementById("topFour").classList.remove("red");
  document.getElementById("topFour").classList.add("yellow");
}

function changeColorToWhiteSix() {
  console.log("changed color to white");
  document.getElementById("selSix").style.display="none";
  document.getElementById("topFour").style.display="inline";
  document.getElementById("topFour").classList.remove("yellow");
  document.getElementById("topFour").classList.remove("blue");
  document.getElementById("topFour").classList.remove("red");
  document.getElementById("topFour").classList.add("white");
}

// FOR TOP RIGHT BLOCK

function changeColorToRedSeven() {
  console.log("changed color to red");
  document.getElementById("selSeven").style.display="none";
  document.getElementById("topFive").style.display="inline";
  document.getElementById("topFive").classList.remove("yellow");
  document.getElementById("topFive").classList.remove("blue");
  document.getElementById("topFive").classList.remove("white")
  document.getElementById("topFive").classList.add("red");
}

function changeColorToBlueSeven() {
  console.log("changed color to blue");
  document.getElementById("selSeven").style.display="none";
  document.getElementById("topFive").style.display="inline";
  document.getElementById("topFive").classList.remove("yellow");
  document.getElementById("topFive").classList.remove("red");
  document.getElementById("topFive").classList.remove("white");
  document.getElementById("topFive").classList.add("blue");
}

function changeColorToYellowSeven() {
  console.log("changed color to yellow");
  document.getElementById("selSeven").style.display="none";
  document.getElementById("topFive").style.display="inline";
  document.getElementById("topFive").classList.remove("blue");
  document.getElementById("topFive").classList.remove("white");
  document.getElementById("topFive").classList.remove("red");
  document.getElementById("topFive").classList.add("yellow");
}

function changeColorToWhiteSeven() {
  console.log("changed color to white");
  document.getElementById("selSeven").style.display="none";
  document.getElementById("topFive").style.display="inline";
  document.getElementById("topFive").classList.remove("yellow");
  document.getElementById("topFive").classList.remove("blue");
  document.getElementById("topFive").classList.remove("red");
  document.getElementById("topFive").classList.add("white");
}
