const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please add a task!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);
  }
}
