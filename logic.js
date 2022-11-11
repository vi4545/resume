 function addExperience(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder",'Enter here');
    

    let weobj=document.getElementById("we");
    let weAddButtonobj=document.getElementById("weAddButton");

    weobj.insertBefore(newNode,weAddButtonobj);

 }

  function addAcademic(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder",'Enter here');
    

    let aqobj= document.getElementById("aq");
    let aqAddButtonobj=document.getElementById("aqAddButton");

    aqobj.insertBefore(newNode,aqAddButtonobj);


 }

 //cv generate

 function generatecv(){
  //console.log("jkjo");
  //gettext 
  

  //assign text dynamically
  let nameT1ob=document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value;
  let nameT2ob=document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
  
  let addressob=document.querySelector(".ad").innerHTML=document.getElementById('addressField').value;
  let contactob=document.getElementById("contactT").innerHTML="+91"+document.getElementById('contactField').value;

  let fbob=document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
  let instaob=document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
  let linkedob=document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;



let objective=document.getElementById('Objective').innerHTML=document.getElementById('objectiveField').value;

let weob=document.getElementsByClassName('weField');
let str='';
for(let e of weob){
  str+=`<li> ${e.value}</li>`;

}
document.getElementById('weT').innerHTML=str;

let aqob=document.getElementsByClassName('aqField');

let str1='';
for(let e of aqob){
  str1+=`<li> ${e.value}</li>`;
}
document.getElementById('aqT').innerHTML=str1;






  let cvob=document.getElementById('cv-form').style.display="none";
  let cvprintob=document.getElementById('cv-template').style.display='block';


 
  
   
 }

 function printcv(){
   window.print();
 }