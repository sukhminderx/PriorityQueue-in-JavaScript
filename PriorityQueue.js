//define the pattern of the elements to be in the Priority Queue
function QueueElement(elementName, elementPriority) {
	this.elementName = elementName;
	this.elementPriority = elementPriority;
}

//define the Queue class
function PriorityQueue() {
	this.priorityQueueData = [];
	this.displayPriorityQueue = displayPriorityQueue;
	this.lengthOfPriorityQueue = lengthOfPriorityQueue;
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.clearPriorityQueue = clearPriorityQueue;
}

function displayPriorityQueue() {
	return this.priorityQueueData;
}

function lengthOfPriorityQueue(){
	return this.priorityQueueData.length;
}

function enqueue(elem) {
	this.priorityQueueData.push(elem);
}

function dequeue() {
	var priority = this.priorityQueueData[0].elementPriority, priorityIndex = 0, priorityElement = this.priorityQueueData[0];
	for (var i = 1; i < this.priorityQueueData.length; i++) {
		if (this.priorityQueueData[i].elementPriority < priority) {
			priority = this.priorityQueueData[i].elementPriority;
			priorityIndex = i;
			priorityElement = this.priorityQueueData[i];
		}
	}
	this.priorityQueueData.splice(priorityIndex,1);
	return priorityElement;
}
function clearPriorityQueue() {
	this.priorityQueueData = [];
}