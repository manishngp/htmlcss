document.querySelector("form").addEventListener("submit", table);



var todoArr= JSON.parse(localStorage.getItem("todoArr"))  ||  [];
display(todoArr);
function table(){
    event.preventDefault();
   
   

    var task = document.getElementById("task").value;
    var prio = document.getElementById("priority").value;
      var todo = {task , prio}
      todoArr.push(todo);
      localStorage.setItem("todoArr", JSON.stringify(todoArr));

      console.log(todoArr);

    display(todoArr);
   


}


function display(arr){
    
    document.querySelector("tbody").innerText="";


    arr.forEach((elem) => {
        
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText=elem.task;
        
    
        var td2 = document.createElement("td");
        td2.innerText=elem.prio;
        if(td2.innerText=="High"){
            td2.style.color= "red";
        }
        if(td2.innerText=="low"){
            td2.style.color= "green";
        }
        if(td2.innerText=="medium"){
            td2.style.color= "orange";
        }
    
        var td3 = document.createElement("td");
        td3.innerText="deleted"
    
        td3.addEventListener("click", deleteit);
    
        tr.append(td1, td2, td3);
        document.querySelector("tbody").appendChild(tr);
    });
}

function deleteit(){
    event.target.parentNode.remove();
}