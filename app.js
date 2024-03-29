'use strict';

const ul = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];

// Add book
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputValue = addForm.querySelector('input[type=text]').value;

  // If input empty, leave
  if (!inputValue) return;

  const li = document.createElement('li');
  const nameSpan = document.createElement('span');
  const deleteSpan = document.createElement('i');
  
  // Add value
  nameSpan.textContent = inputValue;

  // Add class
  nameSpan.classList.add('name')
  deleteSpan.classList.add('fa-solid', 'fa-delete-left', 'delete');

  // Append to DOM
  li.append(nameSpan, deleteSpan);
  ul.appendChild(li);

  // Reset value after submit
  addForm.querySelector('input[type=text]').value = '';
  
});

// Delete book
ul.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.remove();
    }
});

// Hide all books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', (e) => {
    hideBox.checked ? ul.style.display = " none" : ul.style.display = "initial";
});

// Search book
const searchBar = document.forms['search-books'].querySelector('input');

document.forms['search-books'].addEventListener('submit', (e) => {
    e.preventDefault();
})

searchBar.addEventListener('keyup', (e) => {
  const searchKey = e.target.value.toLowerCase();
  const books = ul.querySelectorAll('li');

  books.forEach(book =>  {
    if (!book.querySelector('span.name').textContent.toLowerCase().includes(searchKey)) {
      book.style.display = "none";
    } else {
      book.style.display = "block";
    }
  });
});

// Tabbed content
const tabs = document.querySelector('.tabs');
const panel = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);

    panel.forEach(panel => {
      panel == targetPanel ? panel.classList.add('active') : panel.classList.remove('active');
    });
  }
});