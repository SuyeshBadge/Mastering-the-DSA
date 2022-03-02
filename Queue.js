const cl=function(...text){
    console.log(...text)
}
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Queue{
  
  constructor(){
    this.length=0
    this.first=null;
    this.last=null
  }
  enqueue(value){
    const newNode=new Node(value)
    if(this.first==null){
      this.first=newNode;
      this.last=newNode;
    }
    else{
      this.last.next=newNode
      this.last=newNode;
    }
    this.length++;
    
  }
  dequeue(){
    const holdingNode=this.first
    this.first=this.first.next
    this.length--
    return holdingNode
    
  }
  peek(){
    return this.first
  }
}

const myQ=new Queue()
myQ.enqueue(19)
myQ.enqueue(1)
myQ.dequeue()
myQ.enqueue(9)
myQ.enqueue(99)
cl(myQ.peek())
cl(myQ)
