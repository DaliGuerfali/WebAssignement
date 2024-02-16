// GETTING THE REQUIRED VARS

const todoForm = document.querySelector(".todo-form");

const todoList = document.querySelector(".todo-list");

const nameInput = document.querySelector("#nameInput");
const contentInput = document.querySelector("#contentInput");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(nameInput.value === "" || contentInput.value === "") return;


    const note = document.createElement("li");

    const noteText = document.createElement("p");
    noteText.textContent = `${nameInput.value}: ${contentInput.value}`;

    /* Creating the delete button along with its event listener */
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => todoList.removeChild(e.target.parentNode));

    /* Appending elements */
    note.appendChild(noteText);
    note.appendChild(delBtn);

    todoList.appendChild(note);

    document.querySelector("#nameInput").value = "";
    document.querySelector("#contentInput").value = "";
});

