const cl=function(text){
    console.log(text)
}

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
    this.prev=null;
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head=new Node(value)
    this.tail=this.head
    this.length=1
    
  }
  append(value){
    const newNode=new Node(value)
    newNode.prev=this.tail;
    this.tail.next=newNode
    this.length++;
    this.tail=newNode;
  }
  prepend(value){
    
    const newNode=new Node(value);
    this.head.prev=newNode
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
  }
  insert(index,value){
    const newNode=new Node(value)
    let counter=0
    let current=this.head
    let prev=null
    if(index===0){
      this.prepend(value)
      return this
    }
    while(current.next && counter<index && counter<this.length){
      prev=current
      current=current.next
      counter++;
    }
  
    prev.next=newNode
    newNode.prev=prev
    current.prev=newNode
    newNode.next=current
    this.length++
    
    
  }
  remove(index){
    let current=this.head
    let counter=0
    let prev=null
    if(index===0){
      this.popHead()
      return this
    }
    while(current.next && counter<index){
      prev=current
      current=current.next;
      counter++;
    }
    
    prev.next=current.next
    current.next.prev=prev
    current.next=null
    this.length--
    return this
  }
  popHead(){
    let temp=this.head.next
    this.head.next=null
    temp.prev=null
    this.head=temp
    this.length--
    return this
  }
  pop(){
    const unWantedNode=this.tail
    unWantedNode.prev.next=null
    this.tail=unWantedNode.prev
    unWantedNode.prev=null
    this.length--
  }
  printList(){
    let cur=this.head;
    const arr=["null"]
    while(cur){
      // cl(cur.value+' -> ');
      arr.push(cur.value)
      cur=cur.next;
    }
    arr.push("null")
    cl(arr.join(" <==> "))
  }
  printReverse(){
    let current=this.tail
    const arr=["null"]
    while(current){
      arr.push(current.value)
      // cl(current)
      current=current.prev
    }
    arr.push('null')
    cl(arr.join(' <==> '))
  }
  findNode(value){
    let current=this.head
    while(current){
      if(current.value==value){
        return current
      }
      current=current.next
    }
    return undefined
  }
  
}

const myLL=new DoublyLinkedList(10)
myLL.append(5)
myLL.append(16)
myLL.prepend(1)
myLL.prepend(12)
myLL.append(126)
myLL.insert(2,22)
myLL.printList()
myLL.remove(0)
myLL.remove(1)
myLL.popHead()
myLL.pop()
myLL.pop()
myLL.printList()
cl(myLL.findNode(10))
myLL.printReverse()
cl(myLL)
