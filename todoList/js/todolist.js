var todoList=[];
function sample(){
    var a=document.getElementById("todolist").value;
    if (a !=""){
     todoList.push(a);
     let ulList=document.getElementById("result");
     ulList.innerHTML='';
     for (var i=0; i<todoList.length; i++){
        let listItem=document.createElement('li');
        listItem.innerText=todoList[i];
        ulList.appendChild(listItem);
     }
    }else{
        alert("enter valid data!");
    }
}