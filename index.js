class LinkedList {
    constructor(head=null){
        this.head = head
    }

    size() {
        let count = 0
        let node = this.head
        while (node){
            count ++
            node = node.next
        }
        return count
    }

    clear (){
        this.head = null
    }

    tail(){
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next){
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    pop(){
        if (!this.head){
            return null
        }

        let secondLast = this.head
        while (secondLast.next.next) {
            secondLast = secondLast.next
        }

        secondLast.next = null

        return this.head 

    }

    insertAt(value,index){
        if (index < 0 || index > this.size()){
            return 
        }

        if (index === 0){
            this.prepend(value)
        } else {
            const node = new ListNode(value,"This was inserted")
            let prev = this.head
            for (let i = 0; i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
    
        }        

    }

    removeAt(index){

        if (index < 0 || index >= this.size()){
            return null
        }

        let removedNode

        if (index === 0){
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
            return removedNode.data
        }
        return removedNode.data
    }

    prepend(value){
        const node = new ListNode(value,"This was prepended")
        if (this.size() === 0){
            this.head = node
        } else {
        node.next = this.head
        this.head = node
        }
    }

    append(value){
        const node = new ListNode(value,"This was appended")

        if(!this.head){
            this.head = node
            return
        }

        let current = this.head;
        while (current.next){
            current = current.next;
        }

        current.next = node
    }

    head() {
        return this.head
    }

    at(index){
        if (index === 0){
            return this.head
        }

        let count = 0
        let node = this.head

        while (node !== null  && count < index){
            node = node.next
            count ++
        }
        return node
    }

    contains(value){
        let node = this.head
        while (node !== null) {
            if (node.data === value){
                    console.log("true")
                    return true
                }
        node = node.next
        }
        console.log("false")

        return false
    }

    find(value){
        let count = 0
        let node = this.head
        while (node !== null) {
            if (node.data === value){
                console.log(count)
                    return count
        }
        node = node.next;
        count++;
    }
        return null
    }

    toString(){
        let node  = this.head
        let str = ""
        while (node) {
            
            str += " ( "+node.data+" )" + " ->";
            node = node.next 
        }
        if (node === null){
            str += "  null "
        }
        return str
    }

}

class ListNode {
    constructor(data, description){
        this.data = data
        this.description = description
        this.next = null
    }
}


const list = new LinkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("pterodactyl")

console.log(list.toString())

list.removeAt(2)



console.log(list.toString())

