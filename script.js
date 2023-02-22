function generate() {
    var number = document.getElementById("no").value;
    var output = "";
    for (let i = 1; i < 11; i++) {
      output = output + number + " x " + i + " = " + number * i + "<br>";
    }
    document.getElementById("generator").innerHTML = output;
  }