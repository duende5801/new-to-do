//---------------global variables-------------//
let toDoElements = [];
let lNum = 0;
let count = 1;

//---------------grab all elements------------//

//addToList, deleteItem, inputText

let inputText = document.getElementById('inputText');
let deleteItemBtn = document.getElementById('deleteItem');
let addItemBtn = document.getElementById('addItem');
let addNewListBtn = document.getElementById('addNewList');

//html append id
let addToList = document.getElementById('addToList');
let dropLink = document.getElementById('hrefAdd');

//-------------add event listeners----------//

/* addNewListBtn.addEventListener('click', function(e){
    let aElement = document.createElement('a');
    aElement.setAttribute('href', '#'+count);
    aElement.innerText = 'List ' + count;
    count++
    dropLink.append(aElement);
});
 */

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

addItemBtn.addEventListener('click', function (e) {
    console.log(e.code);
    if (inputText.value !== '') {
        populateList(inputText.value);
        //going to save value into array
        toDoElements.push(inputText.value);
        //save item to local storage
        localStorage.setItem('todo', JSON.stringify(toDoElements));
        inputText.value = "";
    }
});


deleteItemBtn.addEventListener('click', function (e) {
    //deletes all local storage
    //'todo' is the key (which is how you use removeItem())
    //the values are the individual todo items inside the local storage
    localStorage.removeItem('todo')
    location.reload();
});

function populateList(content) {
    //console.log(event.toElement.id);
    //put data into p tag
    let pElement = document.createElement('p');
    pElement.innerText = content;
    pElement.setAttribute('class', 'list-group-item');
    pElement.setAttribute('id', lNum);
//----------------------------Edit Function-----------------//
    pElement.addEventListener('click', function (e) {
        //pElement.contentEditable = true;
        deleteFromLocal(e.toElement.innerText);
        inputText.value = pElement.innerText;
        inputText.focus();
        pElement.innerText = '';
        event.target.remove();
/*         pElement.addEventListener('keypress', function (e) {
            if (e.code === 'Enter' && pElement.innerText !== '') {
                //going to save value into array
                toDoElements.push(pElement.innerText);
                //save item to local storage
                localStorage.setItem('todo', JSON.stringify(toDoElements));
                location.reload();
            }
        });
 */    });
/*     pElement.addEventListener('dblclick', function (e) {
        //this will delete the item from the to-do list
        //console.log(e);
        deleteFromLocal(e.toElement.innerText);
        event.target.remove();
    });
 */    addToList.prepend(pElement);
    lNum++;

}


//showing todElements has data in it even when its refreshed. todoElements != 'todo' (local storage)
console.log("When Refreshed " + toDoElements);

if (localStorage.getItem('todo') !== '') {
    console.log(JSON.parse(localStorage.getItem('todo')));
    let todoLocal = JSON.parse(localStorage.getItem('todo'));
    //populate array items into p tags
    for (let i = 0; i < todoLocal.length; i++) {
        populateList(todoLocal[i]);
    }
    toDoElements = todoLocal;
}

//show an empty state screen
if (toDoElements === null) {
    let imgElement = createElement('img');
    imgElement.setAttribute('src', '../images/empty-screen-state.jpg');
    imgElement.className = '';
    addToList.append(imgElement);
}

function deleteFromLocal(x) {
    //   toDoElements = JSON.parse(localStorage.getItem('todo'));
    console.log(toDoElements);
    for (let i = 0; i < toDoElements.length; i++) {
        console.log(toDoElements[i] + ": " + x);
        if (toDoElements[i] === x) {
            toDoElements.splice(i, 1);
            console.log("-----------------Spliced");
            localStorage.setItem('todo', JSON.stringify(toDoElements));
        }
    }
    console.log("after Splice" + toDoElements);
}
