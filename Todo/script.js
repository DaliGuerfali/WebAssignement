const todoList = document.querySelector(".todo-list");


const nameInput = document.querySelector("#nameInput");
const contentInput = document.querySelector("#contentInput");
const addBtn = document.querySelector(".btn");


addBtn.addEventListener("click", (e) => {
    if(nameInput.value === "" || contentInput.value === "") return;

    const note = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.textContent = `${nameInput.value}: ${contentInput.value}`;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => todoList.removeChild(e.target.parentNode));
    
    note.appendChild(noteText);
    note.appendChild(delBtn);
    
    todoList.appendChild(note);
});


