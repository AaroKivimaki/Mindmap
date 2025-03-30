// ----- Text input and add button -----

// Get Element ids
const getMainContainerId = document.getElementById("mainContainer")
const getInputId = document.getElementById("inputBox")
const getButtonId = document.getElementById("addButton")
const getMindMapContainerId = document.getElementById("bubbleContainer")

// Create elements
const createMindMapElement = document.createElement("div")
const createInputElement = document.createElement("input") // Uses values
const createButtonElement = document.createElement("button")

// Put classes and ids to elements
createMindMapElement.classList = "mindMapDiv"
createInputElement.id = "inputBox"
createButtonElement.id = "addButton"

const textNodeForButton = document.createTextNode("Add mindmap")

// Append some
createButtonElement.appendChild(textNodeForButton)
getMainContainerId.appendChild(createInputElement)
getMainContainerId.appendChild(createButtonElement)
getMainContainerId.appendChild(createMindMapElement)

// Spit on that thang
document.getElementById("addButton").addEventListener("click", () => {
	console.log("Works")
	const inputValue = document.getElementById("inputBox").value
	const textNodeValue = document.createTextNode(inputValue)

	document.getElementById("bubbleContainer").appendChild(createMindMapElement)

	createMindMapElement.appendChild(textNodeValue)

	document.getElementById("inputBox").value = ""

})
