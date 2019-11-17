//---------------grab all elements------------//

//addToList, addListItem, addNewList, addList, deleteItem, editItem, inputText

let inputText = document.getElementById('inputText');
let addToListBtn = document.getElementById('addToList');
let addListBtn = document.getElementById('addList');
let deleteItemBtn = document.getElementById('deleteItem');
let editItemBtn = document.getElementById('editItem');
//html append id
let addNewList = document.getElementById('addNewList');
let addListItem = document.getElementById('addListItem')


//-------------add event listeners----------//
addListBtn.addEventListener('click', function(e){
    let aElement = document.createElement('a');
    aElement.setAttribute('class', 'list-group-item list-group-item-action');
    aElement.setAttribute('id', inputText.value + '-list');
    aElement.setAttribute('data-toggle', 'list');
    aElement.setAttribute('href', '#');
    aElement.setAttribute('role', 'tab');
    addNewList.append(aElement);
})
addToListBtn.addEventListener('click', function(e){

})
deleteItemBtn.addEventListener('click', function(e){

})
editItemBtn.addEventListener('click', function(e){

})