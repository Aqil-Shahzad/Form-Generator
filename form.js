function myFunction() {
  // const e2 = document.getElementById("s1");
  const e1 = document.createElement("div");
  e1.id = "l1";
  const lbl = document.createElement("h2");
  const element = prompt("Write a Title:");
  if (element == null) {
    return null;
  }
  lbl.id = "fa";
  lbl.style = "display:inline-block";
  lbl.innerText = element;
  e1.append(lbl);
  const lbl2 = document.createElement("br");
  lbl2.id = "fb";
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:70% ;width:2% ;margin-left:10px";
  btn.innerText = "x";
  btn.id = "b";
  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";
  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";
  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl2);
  document.body.append(e1);
  // e2.append(e1);
  btn.onclick = function () {
    e1.remove();
    // var element = document.getElementById("fa");
    // var element1 = document.getElementById("fb");
    // element.remove();
    // element1.remove();
    // btn.remove();
    // btn1.remove();
    // btn2.remove();
  };

  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}
// Add Text Feild
function myFunction1() {
  // const e2 = document.getElementById("s2");
  const e1 = document.createElement("div");
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  if (element == null) {
    return null;
  }
  lbl.id = "f1a";
  const lbl1 = document.createElement("input");
  lbl1.id = "f1b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f1c";
  const lbl3 = document.createElement("br");
  lbl3.id = "f1d";
  e1.append(lbl);
  e1.append(lbl3);
  e1.append(lbl1);
  e1.append(lbl2);
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:70% ;width:2% ;margin-left:10px";
  btn.innerText = "x";
  btn.id = "b";
  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";
  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";
  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl2);
  document.body.append(e1);
  // e2.append(e1);
  btn.onclick = function () {
    e1.remove();
  };

  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}

//Add Text Area
function myFunction2() {
  // const e2 = document.getElementById("s3");
  const e1 = document.createElement("div");
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  if (element == null) {
    return null;
  }
  lbl.id = "f2a";
  const lbl1 = document.createElement("textarea");
  lbl1.id = "f2b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f2c";
  const lbl3 = document.createElement("br");
  lbl3.id = "f2d";
  e1.append(lbl);
  e1.append(lbl2);
  e1.append(lbl1);

  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:60% ;width:2% ; margin-left:10px";
  btn.innerText = "x";

  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";

  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";

  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl3);
  document.body.append(e1);
  // e2.append(e1);
  btn.onclick = function () {
    e1.remove();
  };
  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}

//Add Radio
function myFunction3() {
  // const e2 = document.getElementById("s4");
  const e1 = document.createElement("div");
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  if (element == null) {
    return null;
  }
  lbl.id = "f3a";
  const lbl2 = document.createElement("br");
  lbl2.id = "f3b";
  const option1 = document.createElement("label");
  const op1 = prompt("Write first option:");
  option1.innerText = op1;
  if (op1 == null) {
    return null;
  }
  option1.id = "f3c";
  var lbl1 = document.createElement("input");
  lbl1.type = "radio";
  lbl1.name = "name";
  lbl1.id = "f3d";
  const option2 = document.createElement("label");
  const op2 = prompt("Write second Option:");
  option2.innerText = op2;
  if (op2 == null) {
    return null;
  }
  option2.id = "f3e";
  var lbl4 = document.createElement("input");
  lbl4.type = "radio";
  lbl4.name = "name";
  lbl4.id = "f3f";
  const lbl3 = document.createElement("br");
  const lbl5 = document.createElement("br");
  e1.append(lbl);
  e1.append(lbl2);
  e1.append(lbl1);
  e1.append(option1);
  e1.append(lbl3);
  e1.append(lbl4);
  e1.append(option2);
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:60% ;width:2% ; margin-left:10px";
  btn.innerText = "x";

  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";

  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";

  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl5);
  document.body.append(e1);
  // e2.append(e1);
  btn.onclick = function () {
    e1.remove();
  };

  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}
//Add Checkbox
function myFunction4() {
  const e1 = document.createElement("div");
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  if (element == null) {
    return null;
  }
  lbl.id = "f4a";
  var lbl1 = document.createElement("input");
  lbl1.type = "checkbox";
  lbl1.id = "f4b";
  const lbl2 = document.createElement("br");
  lbl2.id = "f4c";
  e1.append(lbl);
  e1.append(lbl1);
  e1.append(lbl2);
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:60% ;width:2% ; margin-left:10px";
  btn.innerText = "x";

  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";

  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";

  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl2);
  document.body.append(e1);
  btn.onclick = function () {
    e1.remove();
  };

  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}

function myFunction5() {
  const e1 = document.createElement("div");
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  if (element == null) {
    return null;
  }
  lbl.id = "f5a";
  var lbl1 = document.createElement("select");
  lbl1.id = "f5b";
  var op1 = document.createElement("option");
  const option1 = prompt("First Option");
  op1.innerText = option1;
  if (option1 == null) {
    return null;
  }
  lbl1.append(op1);
  var op2 = document.createElement("option");
  const option2 = prompt("second Option");
  op2.innerText = option2;
  if (option2 == null) {
    return null;
  }
  lbl1.append(op2);
  var op3 = document.createElement("option");
  const option3 = prompt("Third Option");
  op3.innerText = option3;
  if (option3 == null) {
    return null;
  }
  lbl1.append(op3);
  e1.append(lbl);
  e1.append(lbl1);
  const lbl2 = document.createElement("br");
  lbl2.id = "f5c";
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:60% ;width:2% ; margin-left:10px";
  btn.innerText = "x";

  const btn1 = document.createElement("button");
  btn1.style =
    "color:white; background-color:green ; border-radius:70% ;width:2% ;margin-left:10px";
  btn1.innerText = "D";

  const btn2 = document.createElement("button");
  btn2.style =
    "color:red; background-color:darkblue ; border-radius:70% ;width:2% ;margin-left:20px";
  btn2.innerText = "U";

  e1.append(btn2);
  e1.append(btn);
  e1.append(btn1);
  e1.append(lbl2);
  document.body.append(e1);
  btn.onclick = function () {
    e1.remove();
  };
  btn2.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.previousElementSibling)
      wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
  };

  btn1.onclick = function () {
    var wrapper = this.parentElement;
    if (wrapper.nextElementSibling)
      wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  };
}

function myFunction6() {
  const e1 = document.createElement("div");
  const lbl = document.createElement("input");
  lbl.id = "f6a";
  const lbl2 = document.createElement("br");
  lbl2.id = "f6b";
  lbl.type = "submit";
  lbl.value = "Submit";
  e1.append(lbl);
  const btn = document.createElement("button");
  btn.style =
    "color:white; background-color:red ; border-radius:60% ;width:2% ; margin-left:25px";
  btn.innerText = "x";
  btn.id = "b1";
  e1.append(btn);
  e1.append(lbl2);
  document.body.append(e1);
  btn.onclick = function () {
    e1.remove();
  };
}
