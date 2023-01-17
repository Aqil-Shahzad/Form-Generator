
function myFunction(){
      const element=prompt("Write for, title.");
      document.getElementById("demo").innerHTML=element;
}



function myFunction1() {
const lbl=document.createElement("label");
const element=prompt("Write Lable:");
lbl.innerText=element;
const lbl1=document.createElement("input");
const lbl2=document.createElement("br");
// document.getElementById("s2").innerHTML=lbl;
// document.getElementById("s2").innerHTML=lbl1;
document.body.appendChild(lbl);
document.body.appendChild(lbl1);
document.body.appendChild(lbl2);
}
// function myFunction1()
// {
//     var tag = document.createElement(p);
//       var text = document.createTextNode("Tutorix is the best e-learning platform");
//       tag.appendChild(text);
//       var element = document.getElementById("firstF");
//       element.appendChild(tag);
// }
// function changeText3(){
//  var oldHTML = document.getElementById('para').innerHTML;
//  var newHTML = "<span style='color:#ffffff'>" + oldHTML + "</span>";
//  document.getElementById('para').innerHTML = newHTML;
// }
/* <script>
      var tag = document.createElement("input");
      var text = document.createTextNode("Tutorix is the best e-learning platform");
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);
   </script> */


   