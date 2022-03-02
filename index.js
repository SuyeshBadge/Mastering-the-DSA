const cl = function(...text) {
  console.log(...text)
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class binaryTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      let curr = this.root
      let parent=null
      while (curr) {
        if (value > curr.value) {
          parent=curr
          curr = curr.right
        } else if (value < curr.value) {
          parent=curr
          curr = curr.left
        }
      }
      if(value>parent.value){
        parent.right=newNode
      }else{
        parent.left=newNode
      }
    }
    return this
  }
  lookup(value){
    if(!this.root){
      return false
    }
    else{
      let curr=this.root
      while(curr){
        if(value>curr.value){
          curr=curr.right
        }
        else if(value<curr.value){
          curr=curr.left
        }else if(value==curr.value){
          return curr
        }
      }
    }return false
  }
  remove(value) {
    if(!this.root){
      return false
    }
    else{
      let curr= this.root;
      let main=null
      let temp=null
      let p1=null
      while(curr){
        if(value>curr.value){
          p1=curr
          curr=curr.right
        }else if(value<curr.value) {
          p1=curr
          curr=curr.left
        }
        else if(curr.value===value){
          main= curr
          break;
        }else{
          return null
        }
        temp=main.right
        let parent=null
        while(temp?.left){
          parent=temp
          temp=temp.left
        }
        temp.left=main.left
        main.left=null
        temp.right=main.right
        main.right=null
        if(p1.left.value===value){
          p1.left=temp
        }
        else{
          p2.right=temp
        }
        parent.left=null
        
      }
      
      
    }
  }


}

const tree=new binaryTree()
cl(tree)
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.remove(4)
cl(tree.lookup(9))
cl(tree)