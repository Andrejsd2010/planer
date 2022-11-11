inputEl=document.getElementById("input")
todosUL = document.getElementById("todos")

loadTodos()

function LoadTodos(){
    todos=JSON.parse(localStorage.getitem('todos'))
    if(todos !=undefined){
        todos.forEach(todo => addTodo(todo.txt,todo.isCompleted));
            
       
    }
}
inputEL.addEventListener("Keyup",function (event){
   if(event.code == 'Enter'){
    addTodo(inputEl.value,false)
   }
})
function addTodo(todoText,isCompleted){
    todoEl=document.createElement('li')
    todoEl.innerText=todoText
    if(isCompleted){
        todoEl.classList.add('completed')
    }
    todoEl.addEventListener('click', (e)=>{
        clickedElement = e.target;
        clickedElement.classList.toggle('completed')
       // updateLocalStorage()
    })

    todoEl.addEventListener('contexmenu', (e)=>{
        e.preventDefault()
        clickedElement = e.target;
        clickedElement.classList.remove()
        //updateLocalStorage()
    })

    todosUl.appendChild(todoEl)
    inputEl.value=''
    //updateLocalStorage()



}