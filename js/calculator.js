let screen = document.getElementById("result");
let result = ""; //eredmény


function addToScreen(value) {
  if (value === "+/-") {
    if (result.charAt(0) === "-") {
      result = result.slice(1);
    } else {
      result = "-" + result;
    }
  } else {
    result += value;
  }
  screen.innerHTML = result;
}

function calculate() {
  if (result === "") {
    screen.innerHTML = "";
  } else {
    try {
      screen.innerHTML = eval(result);
    } catch {
      screen.innerHTML = "Error!";
    }  
  }
  result = "";
}

function deleteLastNumber() {
  result = result.slice(0, -1);
  screen.innerHTML = result;
}

function clearTheNumber() {
  screen.innerHTML = "";
  result = "";
}

function plusOrMinus() {
  screen.innerHTML * -1;
  result = "";
}

