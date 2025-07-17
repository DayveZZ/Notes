const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", function () {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "assets/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((e) => {
      e.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
