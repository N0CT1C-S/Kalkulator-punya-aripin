function appendValue(value){
  document.getElementById("display").value += value;
}

function displayclear(){
  document.getElementById("display").value ="";
}

function calculate(){
  const display = document.getElementById("display");
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error"
  }
}


function akar() {
  const display = document.getElementById("display");
  const value = parseFloat(display.value);

  if (isNaN(value) || value < 0) {
    display.value = "Error";
    return;
  }

  display.value = Math.sqrt(value);
}
