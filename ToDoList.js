let button = document.getElementById("add");
let content = document.getElementById("content");
let input = document.getElementById("input_parent");
let date=document.getElementById("date");

//array of objects
let todos=JSON.parse(localStorage.getItem("todos"));
if(!todos){
    todos=[];
}
showTodo();
//local storage of todo data
function storeTodo(tod){
let str=JSON.stringify(tod);
localStorage.setItem("todos",str);
console.log(str);
console.log(localStorage.getItem("todos"));
}

//This function runs when a Todo is added
function addtodo(e) {
    e.preventDefault()

    let d=new Date()
    if(input.value!=="")
    todos.push({
            todo:input.value,
            giventime:d.toDateString(),
            deadline:date.value
    })
    input.value="";
    showTodo()
}

// function for single click
function func(event) {
    let elem=event.target;
    console.log(elem);
    if(!elem.classList.contains('para-style')){
        elem=elem.parentElement;
    }
    if(elem.classList.contains('cut'))
        elem.classList.remove('cut');
    else
        elem.classList.add('cut');   
}

// function for double click
function dblfunc(index) {
todos.splice(index,1);
    showTodo()
}

function showTodo(a,b) {
    
    content.innerHTML="";
    todos.map((val,index)=>{
        content.innerHTML+=`<p class="para-style" onclick="func(event)" ondblclick="dblfunc(${index})"> ${val.todo}
                                <div class="spans">
                                    <span class="date">${val.giventime}</span> 
                                    <span class="deadline">${val.deadline}</span> 
                                </div>
                            </p>`;
    })

    let newtodo= todos.filter((val,index)=>{
        
        return (val.deadline <7);
    })
    storeTodo(todos)
    console.log(newtodo);
};