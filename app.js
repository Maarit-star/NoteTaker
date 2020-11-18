// SELECTORS
const input = document.getElementById("inputField");
const myList = document.getElementById("myList");
const addNoteBtn = document.getElementById("addNote");
count = 1;


// EVENT LISTENERS
addNoteBtn.addEventListener('click', addNote);
 

// FUNCTIONS
function addNote(){
    //list item
    const divItem = document.createElement("div");
    const title = document.createTextNode("Note " + count + ". Click here to see more");
    // let's make a div for title so that we can add style for the textnode
    const divForTitle = document.createElement("div");
    divForTitle.classList="title";
    divForTitle.appendChild(title);
    const linebreak = document.createElement('br');
    const newContent = document.createTextNode(input.value);
    const divForInput = document.createElement("div");
    divForInput.classList="overflowHidden";
    divForInput.appendChild(newContent);

    divItem.appendChild(divForTitle);
    divItem.appendChild(linebreak);
    divItem.appendChild(divForInput);
    divItem.classList.add("divItem");
    
    // list items parent ul
    let parent = document.getElementById("myList");
    parent.appendChild(divItem);

    // popup
    let container = document.createElement("div");
    container.className ="modal-container";
    container.id="modal-containing";

    let modal = document.createElement("div");
    modal.className="modal";
    
    const title2 = document.createTextNode("Note " + count);
    const divForTitle2 = document.createElement("div");
    divForTitle2.classList="title";
    divForTitle2.appendChild(title2);
    
    // some linebreaks, not the smartest way to do this I'm sure..
    const linebreak2 = document.createElement('br');
    const linebreak3 = document.createElement('br');
    const linebreak4 = document.createElement('br');
    let newContent2=document.createTextNode(input.value);
    
    let closeButton = document.createElement("button");
    closeButton.innerHTML="Close";
    closeButton.id="close";
    closeButton.classList="addNote";
    
    modal.appendChild(divForTitle2);
    modal.appendChild(linebreak2);
    modal.appendChild(newContent2);
    modal.appendChild(linebreak3);
    modal.appendChild(linebreak4);
    modal.appendChild(closeButton);
    container.appendChild(modal);

    // popups parent div
    let parentForPopup = document.getElementById("placeForPopUp");
    parentForPopup.appendChild(container);
    
    // add eventlisteners to noteDiv and closeButton
    divItem.addEventListener('click', function (e){
        const target = e.target;
        if(target.matches("div")){
            container.classList.add('show');
        }
    } );

    closeButton.addEventListener('click', ()=>{
        container.classList.remove('show');
    });
    count++;
    
}





