const btn = document.getElementById("addBtn");

const inputValue = document.getElementById("inputFiled");
const deleteAll = document.getElementById("removeAllBtn");

btn.addEventListener("click", () => {
  let getName = inputValue.value;

  if (getName === "") {
    alert("Invalid Name ");
  } else {
    createLi(getName);
  }

  inputValue.value = "";
});

// create list
const ul = document.getElementById("rootUl");

const createLi = (getName) => {
  let listItem = document.createElement("li");
  listItem.innerText = getName;
  listItem.classList = "list-group-item";
  ul.appendChild(listItem);

  // create span in li
  let deleteBtn = document.createElement("span");
  deleteBtn.classList = "btn btn-danger";
  deleteBtn.innerText = "delete";

  // Remove listItem

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(listItem);
  });

  listItem.appendChild(deleteBtn);

  return listItem;
};

const cardBody = document.getElementById("cardBody");

// remove all

deleteAll.addEventListener("click", () => {
  cardBody.removeChild(ul);

  refreshPage()
});


function refreshPage(){
    window.location.reload();
}