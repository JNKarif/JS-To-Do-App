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
    let cross = document.createElement("cross");
    cross.innerHTML = "\u00d7"; //for cross icon code: \u00d7
    list.appendChild(cross);
  }
  inputBox.value = ""; //to empty the input box after adding task
}
