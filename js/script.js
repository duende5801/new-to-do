//---------------global variables-------------//
let toDoElements = [];
let lNum = 0;

//---------------grab all elements------------//

//addToList, deleteItem, inputText

let inputText = document.getElementById('inputText');
let deleteItemBtn = document.getElementById('deleteItem');

//html append id
let addToList = document.getElementById('addToList');

//-------------add event listeners----------//

inputText.addEventListener('keypress', function (e) {
    console.log(e.code);
    if (e.code === 'Enter' && inputText.value !== '') {
        populateList(inputText.value);
        //going to save value into array
        toDoElements.push(inputText.value);
        //save item to local storage
        localStorage.setItem('todo', JSON.stringify(toDoElements));
        inputText.value = "";
    }
});

function populateList(content) {
    //console.log(event.toElement.id);
    //put data into p tag
    let pElement = document.createElement('p');
    pElement.innerText = content;
    pElement.setAttribute('class', 'list-group-item');
    pElement.setAttribute('id', lNum);
    pElement.addEventListener('click', function (e) {
        //console.log(event.target);
        //this will delete the item from the to-do list
        event.target.remove();
    });

    // Assigning the attributes 
    // to created checkbox 
    //let checkbox = document.createElement('input');
    //checkbox.setAttribute('type', 'checkbox');
    //checkbox.setAttribute('class', 'd-flex align-items')

    //pElement.appendChild(checkbox);
    addToList.append(pElement);
    lNum++;

}

if (localStorage.getItem('todo') !== '') {
    console.log(JSON.parse(localStorage.getItem('todo')));
    let todoLocal = JSON.parse(localStorage.getItem('todo'));
    //populate array itemes into p tags
    for (let i = 0; i < todoLocal.length; i++) {
        populateList(todoLocal[i]);
    }
    toDoElements = todoLocal;
}
