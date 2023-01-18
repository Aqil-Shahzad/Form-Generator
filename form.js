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
      const op1 = prompt("Write first option:");
      option1.innerText = op1;
      var lbl1 = document.createElement('input');
      lbl1.type = "radio";
      lbl1.name = "name";

      const option2 = document.createElement("label");
      const op2 = prompt("Write second Option:");
      option2.innerText = op2;
      var lbl4 = document.createElement('input');
      lbl4.type = "radio";
      lbl4.name = "name";
      const lbl3 = document.createElement("br");
      const lbl5 = document.createElement("br");
      document.body.appendChild(lbl);
      document.body.appendChild(lbl2);
      document.body.appendChild(lbl1);
      document.body.appendChild(option1);
      document.body.appendChild(lbl3);
      document.body.appendChild(lbl4);
      document.body.appendChild(option2);
      document.body.appendChild(lbl5);
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

function myFunction5() {

  // var e1=document.getElementById("s1");
  // var lbl2 = document.createElement('option');
  // const element = prompt("Write Lable:");
  // lbl2.text = element;
  // e1.add(Option);



  const lbl = document.createElement("label");
  const element = prompt("Write Lable:");
  lbl.innerText = element;
  var lbl1 = document.createElement('select');
   var lbl2 = document.createElement('option');
   const element1=prompt("First Option")
   lbl2.innerText=element1;

  document.body.appendChild(lbl);
  document.body.appendChild(lbl1);
  // document.body.appendChild(lbl2);
  
}

function myFunction6() {
  const lbl = document.createElement("input");
  const lbl2 = document.createElement("br");
  // const element = prompt("Write a Title:");
  lbl.type="submit";
  lbl.value="Submit";
  // lbl.innerText = element;
  document.body.appendChild(lbl2);
  document.body.appendChild(lbl);
}



