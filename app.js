const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please add a task!");
  } else {
    /**create new li inside ul by js: 
    step 1: createElement li ,\
    step 2: insert text from inputbox into li
    stet 3: now append all of this new li to ul by listContainer id */
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);
    // Adding a cross icon
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7"; //for cross icon code: \u00d7
    list.appendChild(cross);
  }
  inputBox.value = ""; //to empty the input box after adding task
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    /** To cut and mark as checked the selected line:
     * step 1: in the css text-decoration: line-through to cut the line horizental line;
     * step 2: use upper case for tag name
     * step 3: use this function with if else, toggle(), remove()*/
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("data");

  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

showTask();

/**
 * searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
 */

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask(inputBox.value);
  }
});
