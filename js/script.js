// ----- Text input, add button and shape chooser -----

// Create elements
let createInputElement = document.createElement("input") // Uses values
let createButtonElement = document.createElement("button")
let createSelectMenu = document.createElement("select")
let createOptions = document.createElement("option")

// Put classes and ids to elements
createInputElement.id = "inputBox"
createButtonElement.id = "addButton"
createSelectMenu.id = "selectMenu"
createOptions.classList = "Options"

// Get Element ids
let getMainContainerId = document.getElementById("mainContainer")
let getInputId = document.getElementById("inputBox")
let getButtonId = document.getElementById("addButton")
let getMindMapContainerId = document.getElementById("bubbleContainer")
let getSelectMenuId = document.getElementById("selectMenu")
let getOptionsClass = document.getElementsByClassName("Options")


let textNodeForButton = document.createTextNode("Add mindmap")

let textNodeForOptions = document.createTextNode("Square")

// Append some
createButtonElement.appendChild(textNodeForButton)
createOptions.appendChild(textNodeForOptions)
getMainContainerId.appendChild(createInputElement)
getMainContainerId.appendChild(createButtonElement)
getMainContainerId.appendChild(createSelectMenu)
document.getElementById("selectMenu").appendChild(createOptions)

// ------ Choose shape and event clicker ------



// Spit on that thang
document.getElementById("addButton").addEventListener("click", () => {
	console.log("Works")
	let createMindMapDiv = document.createElement("div")

	let inputValue = document.getElementById("inputBox").value
	let textNodeValue = document.createTextNode(inputValue)

	document.getElementById("bubbleContainer").appendChild(createMindMapDiv)

	createMindMapDiv.classList = "mindMapDiv"

	createMindMapDiv.appendChild(textNodeValue)

	document.getElementById("inputBox").value = ""

})
