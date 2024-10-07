const addButton = document.getElementById("add");
let todoItems = document.querySelector("#todo-items");
let emptyImg = document.getElementById("empty");

let counter = 1;

addButton.addEventListener("click", (e) => {
  let searchInput = document.querySelector("#search-input").value;

  if (searchInput === "") {
    alert("Please enter a task before press add button.");
  } else {
    emptyImg.remove();
    todoItems.innerHTML += `<li class='item make-flex space-between top-bottom-space'>
          <div class='todo-title'>${searchInput}</div>
         <div class='delete'><button id='delete-${counter++}' class='delete-mark' type='button'><i class='fa-solid fa-xmark'></i></button></div>
       </li>`;

    let button = document.querySelectorAll(".delete-mark");

    button.forEach((names) => {

      names.addEventListener("click", (e) => {
        let parentNode = e.target.closest("li");
        parentNode.remove();

        if(todoItems.children.length === 0){
            todoItems.append(emptyImg);
        }
      });
    });
    todoItems.append(todoItems);
  }
});
