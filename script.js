const itemsContainer = document.querySelector(".todo-list__container");
const inputValue = document.querySelector(".input-field");
const todoListForm = document.querySelector(".todo-list__form");
const itemsCounter = document.querySelector(".items-counter");
const toggleTheme = document.querySelector(".toggletheme-button");


const itemsList = ["Discover lost city of gold", "Watch new Netflix series", "Tryout for the Olympics", "Get laughed at at Olympic tryouts", "Practice coding", "Clear my wardrobe"];


function createItem(item) {
  const listItemTemplate = document.querySelector("#list-item-template").content;
  const listItemElement = listItemTemplate.querySelector(".todo-list__item").cloneNode(true);
  const listItemTitle = listItemElement.querySelector(".todo-list__text");

  listItemTitle.textContent = item;
  deleteItem(listItemElement);

  return listItemElement;
}

function submitItem(evt) {
  evt.preventDefault();

  // Create new items, get values from input field and prepend it to the container 
  const todoItem = createItem(inputValue.value);
  itemsContainer.prepend(todoItem);
  itemsList.push(todoItem);

  // Clear input value after submitting 
  inputValue.value = "";
}

function deleteItem(todoListElement) {
  const deleteButton = todoListElement.querySelector(".delete-button");

  deleteButton.addEventListener("click", function (evt) {
    evt.target.closest(".todo-list__item").remove();
  });
}

// Load inital items by looping through array 
itemsList.forEach(function (item) {
  const title = item;

  // Create new item, get values from array and append it to the container 
  const todoItem = createItem(title);
  itemsContainer.append(todoItem);

});

// Toggle button image on click
toggleTheme.addEventListener("click", function () {
  toggleTheme.classList.toggle("toggletheme-button_dark");
});

// Submit todo list item
todoListForm.addEventListener("submit", submitItem);

// Save user's chosen theme
if (localStorage.getItem('theme') === "dark-theme") {
  document.body.classList.toggle(localStorage.getItem('theme'));
}

// Listen for a click on the button
toggleTheme.addEventListener('click', function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList);
})