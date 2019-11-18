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
let addListDiv = document.getElementById('addListDiv')

//-------------add event listeners----------//
addListBtn.addEventListener('click', function (e) {
    let aElement = document.createElement('a');
    let tabElement = document.createElement('div');
    aElement.innerText = inputText.value;
    aElement.setAttribute('class', 'list-group-item list-group-item-action');
    aElement.setAttribute('id', inputText.value + '-list');
    aElement.setAttribute('data-toggle', 'list');
    aElement.setAttribute('href', '#' + inputText.value);
    aElement.setAttribute('role', 'tab');
    addNewList.append(aElement);
    tabElement.setAttribute('id', inputText.value);
    tabElement.setAttribute('class', 'tab-pane');
    tabElement.setAttribute('role', 'tabpanel');
    tabElement.innerText = "this is working";
    addListDiv.append(tabElement);
});
addToListBtn.addEventListener('click', function (e) {
    let liElement = document.createElement('li');
    liElement.innerText = inputText.value;
    //liElement.setAttribute('class', 'tab-pane');
    //liElement.setAttribute('id', 'asd');
    //liElement.setAttribute('role', 'tabpanel');
    liElement.addEventListener('click', function (e) {
        this.display.style = "none";
    });
    addListItem.appendChild(liElement);

});
deleteItemBtn.addEventListener('click', function (e) {

});
editItemBtn.addEventListener('click', function (e) {

});