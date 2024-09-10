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
