var tasksList = document.getElementById("tasksList");
var addButton = document.getElementById("addButton");
var resetButton = document.getElementById("resetButton");
var inputBox = document.getElementById("taskText");

var listElement;
var checkBox;
var label;
var textnode;
var removeButton;
var removeElement;

addButton.addEventListener("click", addElementToList);
resetButton.addEventListener("click", resetList);

function addElementToList() {
    if (inputBox.value == "") { return; }

    listElement = document.createElement("li");

    textnode = document.createTextNode(inputBox.value);

    createLabel();
    createCheckBox();
    createRemoveButton();
    appendElements();

    inputBox.value = "";
}

function createLabel() {
    label = document.createElement("label");
    label.className = "form-check-label";
    label.htmlFor = "flexCheckChecked";
}

function createCheckBox() {
    checkBox = document.createElement("input");
    checkBox.className = "form-check-input";
    checkBox.type = "checkbox";
    checkBox.value = " ";
    checkBox.id = "flexCheckDefault";
}

function createRemoveButton() {
    removeButton = document.createElement("input");
    removeButton.className = "btn btn-secondary btn-sm remove-button";
    removeButton.type = "button";
    removeButton.value = "X";    
    removeButton.name = "remove-button";
}

function appendElements() {
    listElement.appendChild(checkBox);
    label.appendChild(textnode);
    listElement.appendChild(label);
    //listElement.appendChild(removeButton);
    listElement.setAttribute("name", "listElement");
    tasksList.appendChild(listElement);
}

function resetList() {
    var list = document.getElementsByName("listElement");
    for (var i = list.length - 1; i >= 0; i--) {
        list[i].remove();
    }
}

function removeElement(){

}