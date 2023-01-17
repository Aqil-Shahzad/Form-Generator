function myFunction() {
  const lbl = document.createElement("h2");
  const element = prompt("Write a Title:");
  lbl.innerText = element;
  document.body.appendChild(lbl);
}

function myFunction1() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  const lbl1 = document.createElement("input");
  const lbl2 = document.createElement("br");
  const lbl3 = document.createElement("br");
  document.body.appendChild(lbl);
  document.body.appendChild(lbl3);
  document.body.appendChild(lbl1);
  document.body.appendChild(lbl2);
}
function myFunction2() {
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  const lbl1 = document.createElement("textarea");
  const lbl2 = document.createElement("br");
  const lbl3 = document.createElement("br");
  document.body.appendChild(lbl);
  document.body.appendChild(lbl2);
  document.body.appendChild(lbl1);
  document.body.appendChild(lbl3);
}

function myFunction3() {
      
      const lbl = document.createElement("label");
      const element = prompt("Write Lable:");
      lbl.innerText = element;
      const lbl2 = document.createElement("br");
      
      const option1 = document.createElement("label");
      const op1 = prompt("Write Lable:");
      option1.innerText = op1;

      var lbl1 = document.createElement('input');
      lbl1.type = "radio";
      const lbl3 = document.createElement("br");
      document.body.appendChild(lbl);
      document.body.appendChild(lbl2);
      document.body.appendChild(lbl1);
      document.body.appendChild(option1);
      document.body.appendChild(lbl3);
    }

function myFunction4() {
      
  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  
  var lbl1 = document.createElement('input');
  lbl1.type = "checkbox";
  const lbl2 = document.createElement("br");
  document.body.appendChild(lbl);
  document.body.appendChild(lbl1);
  document.body.appendChild(lbl2);
}




checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";
            