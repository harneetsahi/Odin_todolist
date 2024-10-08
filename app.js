const main = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const addNew = document.querySelector(".add");

const openModalBtn = document.querySelector(".open-modal");
const overlayBtn = document.querySelector(".overlay");

const taskName = document.querySelector(".task-name");
const addTaskBtn = document.querySelector(".add-task-btn");

// close modal function
function closeModal() {
  openModalBtn.style.display = "none";
  overlayBtn.style.display = "none";
}

// open modal function
function openModal() {
  openModalBtn.style.display = "block";
  overlayBtn.style.display = "block";
}

/* event listener for opening modal */
addNew.addEventListener("click", () => {
  openModal();
});

/* event listener for closing modal */
window.addEventListener("click", (e) => {
  const target = e.target;

  // if clicked inside open modal div, do nothing
  if (target.closest(".open-modal")) {
    return;
  }

  // if clicked on anything other than 'add task' div, close modal
  if (target.id != "add-task") {
    closeModal();
  }
});

/* function for creating list */
function createListItem() {
  const taskInput = taskName.value;

  // through contructor
  const toDoItem = new ToDoListItems(taskInput, "Today, 4 PM");
  
  const taskListContent = document.createElement("div");
  taskListContent.classList.add("task-list-content-js");

  const listItemContainer = document.createElement("div");
  listItemContainer.classList.add("list-item-container");

  const inputListName = document.createElement("input");
  inputListName.type = "radio";

  const labelListName = document.createElement("label");
  labelListName.classList.add("list-item");
  labelListName.textContent = taskInput;
  labelListName.textContent = toDoItem.listName;


  const dueTimeSpan = document.createElement("span");
  dueTimeSpan.classList.add("due-time");
  dueTimeSpan.textContent = toDoItem.dueTime; // have to get this through some function


  taskListSection.appendChild(taskListContent);
  taskListContent.appendChild(listItemContainer);
  taskListContent.appendChild(dueTimeSpan);
  listItemContainer.appendChild(inputListName);
  listItemContainer.appendChild(labelListName);
}

/* event listener for creating a list item */
addTaskBtn.addEventListener("click", () => {
  createListItem();
  closeModal();
  taskName.value = "";
});

// constructor function for todo list objects

class ToDoListItems {
  constructor(listName, dueTime) {
    this.listName = listName;
    this.dueTime = dueTime;
  }

  // how to dynamically get dueTime
}
