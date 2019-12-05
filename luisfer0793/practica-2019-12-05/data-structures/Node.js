class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }

    get getItem() {
        return this.item;
    }
}

export default Node;