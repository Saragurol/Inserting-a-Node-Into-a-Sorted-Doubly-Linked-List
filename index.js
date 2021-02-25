function sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data);
    let currentNode = head;
    // Empty list
    if (head === null) {
        head = newNode;
    }
    // newNode belongs At the beginning of the list
    else if (currentNode.data >= data) {
        newNode.next = currentNode;
        currentNode.prev = newNode;
        head = newNode;
    }
    // newNode belongs At the middle or end of the list
    else {
        // iterate through list to find where newNode belongs
        while (currentNode.next !== null && currentNode.data < data) {
            currentNode = currentNode.next;
        }
        //  newNode belongs before currentNode
        if (currentNode.data >= data) {
            // create links to and from node before insertion point
            currentNode.prev.next = newNode;
            newNode.prev = currentNode.prev;
            // create links to and from node after insertion point
            newNode.next = currentNode;
            currentNode.prev = newNode;
        }
        // newNode belongs after currentNode
        else {
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
    }
    return head;
}