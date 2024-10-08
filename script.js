const addButton = document.getElementById("add");
let todoItems = document.querySelector("#todo-items");
let emptyImg = document.getElementById("empty");
let searchInput = document.querySelector("#search-input");
let task = document.querySelectorAll(".item");
let listItemDiv = document.getElementById("list-item");

let counter = 1;

// task list stored on local storage
function showTask() {
  todoItems.innerHTML = localStorage.getItem("task");
}
showTask();

// update local storage
function updateStore() {
  localStorage.setItem("task", todoItems.innerHTML);
}

// list item li is '0' then show empty div 
if (todoItems.children.length === 0) {
  emptyImg.style.display = "block";
}

// function for add Scroll
function addScroll() {
  if (todoItems.children.length >= "7") {
    listItemDiv.style = `overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: linear-gradient(to right, #ffe0b2, #ffccbc, #f8bbd0, #f48fb1) #f0f0f0;
    scrollbar-width: thin;`;
  } else {
    listItemDiv.style = `overflow: unset;
  overflow-y: unset;
  scrollbar-color: linear-gradient(to right, #ffe0b2, #ffccbc, #f8bbd0, #f48fb1) #f0f0f0;
  scrollbar-width: thin;`;
  }
}

addScroll();

// add button trigger
addButton.addEventListener("click", (e) => {
  let userInput = searchInput.value;

  // if input field is blank
  if (userInput === "") {
    alert("Please enter a task before press add button.");
  } else {
    searchInput.value = "";

    // when task is added then hide empty div 
    emptyImg.style.display = "none";

    // add list HTML 
    todoItems.innerHTML += `<li class='item make-flex space-between top-bottom-space'>
          <div class='todo-title'>${userInput}</div>
         <div class='delete'><button id='delete-${counter++}' class='delete-mark' type='button'><i class='fa-solid fa-xmark'></i></button></div>
       </li>`;

    updateStore();
    addScroll();

    // delete task code 
    let button = document.querySelectorAll(".delete-mark");
    
    // for getting every delete button 
    button.forEach((names) => {

      // event listener on every delete button
      names.addEventListener("click", (e) => {
        let parentNode = e.target.closest("li");

        // remove parent li tag of triggered delete button  
        parentNode.remove();
        updateStore();
        addScroll();

        // list item li is '0' then show empty div 
        if (todoItems.children.length === 0) {
          emptyImg.style.display = "block";
        }
      });
    });

    // append new list
    todoItems.append(todoItems);
  }
});

// using local storage when task is available run this code 
let button = document.querySelectorAll(".delete-mark");

 // for getting every delete button 
button.forEach((names) => {

  // event listener on every delete button
  names.addEventListener("click", (e) => {
    let parentNode = e.target.closest("li");
    console.log(parentNode);

    // remove parent li tag of triggered delete button 
    parentNode.remove();
    updateStore();
    addScroll();

    // list item li is '0' then show empty div 
    if (todoItems.children.length === 0) {
      emptyImg.style.display = "block";
    }
  });
});
