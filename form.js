function myFunction() {
  const lbl = document.createElement("h2");
  const element = prompt("Write a Title:");
  lbl.id = "fa";
  lbl.style = "display:inline-block";
  lbl.innerText = element;
  document.body.appendChild(lbl);
  const lbl2 = document.createElement("br");
  lbl2.id = "fb";
  const btn = document.createElement("button");
  btn.style =
    "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  btn.id = "b1";
  document.body.appendChild(btn);
  document.body.appendChild(lbl2);
  btn.onclick = function () {
    var element = document.getElementById("fa");
    var element1 = document.getElementById("fb");
    element.remove();
    element1.remove();
    btn.remove();
  };
}

function myFunction1() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  lbl.id = "f1a";
  const lbl1 = document.createElement("input");
  lbl1.id = "f1b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f1c";
  const lbl3 = document.createElement("br");
  lbl3.id = "f1d";
  document.body.appendChild(lbl);
  document.body.appendChild(lbl3);
  document.body.appendChild(lbl1);
  document.body.appendChild(lbl2);
  const btn = document.createElement("button");
  btn.style =
    "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  document.body.appendChild(btn);
  document.body.appendChild(lbl2);
  btn.onclick = function () {
    var element1 = document.getElementById("f1a");
    var element2 = document.getElementById("f1b");
    var element3 = document.getElementById("f1c");
    var element4 = document.getElementById("f1d");
    element1.remove();
    element2.remove();
    element3.remove();
    element4.remove();
    btn.remove();
  };
}

function myFunction2() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  lbl.id = "f2a";
  const lbl1 = document.createElement("textarea");
  lbl1.id = "f2b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f2c";
  const lbl3 = document.createElement("br");
  lbl3.id = "f2d";
  document.body.appendChild(lbl);
  document.body.appendChild(lbl2);
  document.body.appendChild(lbl1);
  const btn = document.createElement("button");
  btn.style =
  "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  document.body.appendChild(btn);
  document.body.appendChild(lbl3);
  btn.onclick = function () {
    var element1 = document.getElementById("f2a");
    var element2 = document.getElementById("f2b");
    var element3 = document.getElementById("f2c");
    var element4 = document.getElementById("f2d");
    element1.remove();
    element2.remove();
    element3.remove();
    element4.remove();
    btn.remove();
  };
}

function myFunction3() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  lbl.id = "f3a";
  const lbl2 = document.createElement("br");
  lbl2.id = "f3b";
  const option1 = document.createElement("label");
  const op1 = prompt("Write first option:");
  option1.innerText = op1;
  option1.id = "f3c";
  var lbl1 = document.createElement("input");
  lbl1.type = "radio";
  lbl1.name = "name";
  lbl1.id = "f3d";
  const option2 = document.createElement("label");
  const op2 = prompt("Write second Option:");
  option2.innerText = op2;
  option2.id = "f3e";
  var lbl4 = document.createElement("input");
  lbl4.type = "radio";
  lbl4.name = "name";
  lbl4.id = "f3f";
  const lbl3 = document.createElement("br");
  const lbl5 = document.createElement("br");
  document.body.appendChild(lbl);
  document.body.appendChild(lbl2);
  document.body.appendChild(lbl1);
  document.body.appendChild(option1);
  document.body.appendChild(lbl3);
  document.body.appendChild(lbl4);
  document.body.appendChild(option2);
  const btn = document.createElement("button");
  btn.style =
  "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  document.body.appendChild(btn);
  document.body.appendChild(lbl5);
  btn.onclick = function () {
    var element1 = document.getElementById("f3a");
    var element2 = document.getElementById("f3b");
    var element3 = document.getElementById("f3c");
    var element4 = document.getElementById("f3d");
    var element5 = document.getElementById("f3e");
    var element6 = document.getElementById("f3f");
    element1.remove();
    element2.remove();
    element3.remove();
    element4.remove();
    element5.remove();
    element6.remove();
    btn.remove();
  };
}

function myFunction4() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  lbl.id = "f4a";
  var lbl1 = document.createElement("input");
  lbl1.type = "checkbox";
  lbl1.id = "f4b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f4c";
  document.body.appendChild(lbl);
  document.body.appendChild(lbl1);
  document.body.appendChild(lbl2);
  const btn = document.createElement("button");
  btn.style =
  "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  btn.id = "b1";
  document.body.appendChild(btn);
  document.body.appendChild(lbl2);
  btn.onclick = function () {
    var element = document.getElementById("f4a");
    var element1 = document.getElementById("f4b");
    var element2 = document.getElementById("f4c");
    element.remove();
    element1.remove();
    element2.remove();
    btn.remove();
  };
}

function myFunction5() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  lbl.id = "f5a";
  var lbl1 = document.createElement("select");
  lbl1.id = "f5b";
  var op1 = document.createElement("option");
  const option1 = prompt("First Option");
  op1.innerText = option1;
  lbl1.append(op1);
  var op2 = document.createElement("option");
  const option2 = prompt("second Option");
  op2.innerText = option2;
  lbl1.append(op2);
  var op3 = document.createElement("option");
  const option3 = prompt("Third Option");
  op3.innerText = option3;
  lbl1.append(op3);
  document.body.appendChild(lbl);
  document.body.appendChild(lbl1);
  const btn = document.createElement("button");
  btn.style =
  "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  btn.id = "b1";
  document.body.appendChild(btn);
  btn.onclick = function () {
    var element = document.getElementById("f5a");
    var element1 = document.getElementById("f5b");
    element.remove();
    element1.remove();
    btn.remove();
  };
}

function myFunction6() {
  const lbl = document.createElement("input");
  lbl.id="f6a";
  const lbl2 = document.createElement("br");
  lbl2.id="f6b";
  lbl.type = "submit";
  lbl.value = "Submit";
  document.body.appendChild(lbl);
  const btn = document.createElement("button");
  btn.style =
  "color:red; background-color:white ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  btn.id = "b1";
  document.body.appendChild(btn);
  document.body.appendChild(lbl2);
  btn.onclick = function () {
    var element = document.getElementById("f6a");
    var element1 = document.getElementById("f6b");
    element.remove();
    element1.remove();
    btn.remove();
  };
  
}
