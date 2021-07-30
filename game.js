var ans;
p1n = localStorage.getItem("p1n");
p2n = localStorage.getItem("p2n");
p1s = 0;
p2s = 0;
qst = false;
ans = true;
document.getElementById("p1n").innerHTML = p1n + ": ";
document.getElementById("p2n").innerHTML = p2n + ": ";
document.getElementById("p1s").innerHTML = p1s;
document.getElementById("p2s").innerHTML = p2s;
document.getElementById("quest").innerHTML = p1n;
document.getElementById("answr").innerHTML = p2n;

function sendQuest() {
      document.getElementById("b1").style.visibility = "hidden";
      document.getElementById("b2").style.visibility = "initial";
      n1 = document.getElementById("num1").value;
      n2 = document.getElementById("num2").value;
      ans = parseInt(n1) * parseInt(n2);
      question = "<h4 class='header'>" + n1 + " x " + n2 + "</h4><br>";
      input = "<input type='text' class='form-control' id='ans'><br><br>";
      button = "<br><button class='btn btn-info' onclick='checkAns()'";
      all = question + input + button;
      document.getElementById("output").innerHTML = all;
      document.getElementById("num1").innerHTML = "";
      document.getElementById("num1").innerHTML = "";
}

function checkAns() {
      getans = document.getElementById("ans").value;
      if (ans == getans) {
            if (ans == true) {
                  p2s++;
                  document.getElementById("p1s").innerHTML = p2s;
            } else {
                  p1s++;
                  document.getElementById("p2s").innerHTML = p1s;
            }
      }

      if (qst == true) {
            qst = false;
            document.getElementById("quest").innerHTML = "Question Turn: " + p1n;
      } else {
            qst = true;
            document.getElementById("quest").innerHTML = "Question Turn: " + p2n;
      }
      if (ans == true) {
            ans = false;
            document.getElementById("answr").innerHTML = "Answer Turn: " + p1n;
      } else {
            ans = true;
            document.getElementById("quest").innerHTML = "Answer Turn: " + p2n;
      }
}