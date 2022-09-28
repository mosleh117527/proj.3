

let input=document.getElementById('input')
let btn =document.getElementById('btn')
let notasks = document.getElementById('noTasks')
let allTasks = document.getElementById('allTasks')
 
 function addNewTask(){
let data = input.value;
if(data.trim()=="" || data.length <3 || data.length>20){

window.alert("please enter valid data")

}
else{
//allTasks.innerHTML = data;
//let newdiv=  document.createElement('div');
//newdiv.classList.add('alert');
//newdiv.classList.add('alert-info');
//newdiv.append(data);
//allTasks.append(newdiv);
allTasks.innerHTML +=`<div  " class="alert alert-info check "> ${data} 
<button class="delete btn btn-danger" style="float: right; margin:-7px ">Delete</button>
</div> `
 notasks.style.display="none"
 

input.value="";
}
}
 btn.addEventListener('click' ,addNewTask)


function checkdiv(){
    if(allTasks.childElementCount == 0)
    {
        notasks.style.display="block"
    }
}
document.addEventListener('click' ,function(e){
 
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    checkdiv();
}



 });

   document.addEventListener('click' , (e)=>  {

    if(e.target.classList.contains("check")){
        e.target.classList.toggle("checked");


    }
   
})