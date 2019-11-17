//---------------grab all elements------------//

//addToList, addElement, addList, deleteItem, editItem, inputText

let inputText = document.getElementById('inputText');
let addElement = document.getElementById('addElement');
let addToList = document.getElementById('addToList');
let addList = document.getElementById('addList');
let deleteItem = document.getElementById('deleteItem');
let editItem = document.getElementById('editItem');


//-------------add event listeners----------//
addList.addEventListener('click', function(e){
    let ulElement = document.createElement('ul');
    addElement.append(ulElement);
})
addToList.addEventListener('click', function(e){
    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'list-group-item')
    liElement.innerText = inputText.value;
    addElement.append(liElement)
})
deleteItem.addEventListener('click', function(e){

})
editItem.addEventListener('click', function(e){

})