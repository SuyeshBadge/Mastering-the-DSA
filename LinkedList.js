const cl=function(text){
    console.log(text)
}

class Node{
  constructor(value){
    this.value=value;
      this.next=null;
  }
}

class LinkedList{
  constructor(value){
    this.head=new Node(value)
    this.tail=this.head
    this.length=1
    
  }
  append(value){
    const newNode=new Node(value)
    this.tail.next=newNode
    this.length++;
    this.tail=newNode;
  }
  prepend(value){
    const newNode=new Node(value);
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
  }
  insert(index,value){
    const newNode=new Node(value)
    let counter=0
    let current=this.head
    if(index===0){
      this.prepend(value)
      return this
    }
    while(current.next && counter<index-1 && counter<this.length){
      current=current.next
      counter++;
    }
    newNode.next=current.next;
    current.next=newNode;
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
    current.next=null
    this.length--
    return this
  }
  popHead(){
    let temp=this.head.next
    this.head.next=null
    this.head=temp
    this.length--
    return this
  }
  pop(){
    let current=this.head
    let counter=0
    let prev=null
    while(current.next){
      prev=current
      current=current.next
      counter++
    }
    prev.next=null
    this.tail=prev
    this.length--
  }
  reverse(){
    if(!this.head.next){
      return this
    }
   let  first=this.head
    this.tail=this.head
   let  second=first.next
    while(second){
      const temp=second.next
      second.next=first
      first=second
      second=temp
    }
    this.head.next=null
    this.head=first
  }
  printList(){
    let cur=this.head;
    const arr=[]
    while(cur){
      // cl(cur.value+' -> ');
      arr.push(cur.value)
      cur=cur.next;
    }
    arr.push("null")
    cl(arr.join(" --> "))
  }
}

const myLL=new LinkedList(10)
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
myLL.reverse()
myLL.printList()
myLL.reverse()
myLL.printList()
// cl(myLL)

module.export=LinkedList