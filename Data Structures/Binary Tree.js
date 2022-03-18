const cl = function (...text) {
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
      let parent = null
      while (curr) {
        if (value > curr.value) {
          parent = curr
          curr = curr.right
        } else if (value < curr.value) {
          parent = curr
          curr = curr.left
        }
      }
      if (value > parent.value) {
        parent.right = newNode
      } else {
        parent.left = newNode
      }
    }
    return this
  }
  lookup(value) {
    if (!this.root) {
      return false
    } else {
      let curr = this.root
      while (curr) {
        if (value > curr.value) {
          curr = curr.right
        } else if (value < curr.value) {
          curr = curr.left
        } else if (value == curr.value) {
          return curr
        }
      }
    }
    return false
  }
  remove(value = this.root ?. value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value === currentNode.value) {
        // If child node has no right node
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.left
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.left
            }

          }

        }
        // If child has right child  with no left node
        else if (currentNode.right.left === null) {
          if (parentNode === null) this.root = currentNode.right
          else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = currentNode.right
              currentNode.right.left = currentNode.left
              currentNode.left = null
              currentNode.right = null
            } else if (parentNode.value < currentNode.value) {
              parentNode.right = currentNode.right
              currentNode.right.left = currentNode.left
              currentNode.left = null
              currentNode.right = null

            }

          }
        } else {
          // If the child node has right node with left node
          // then find the left most node in the below tree
          let leftMost = currentNode.right.left
          let tempParent = null
          while (leftMost.left) {
            tempParent = leftMost
            leftMost = leftMost.left
          }
          if (parentNode === null) this.root = leftMost
          else {
            if (parentNode.value > currentNode.value) {
              parentNode.left = leftMost
              leftMost.left = currentNode.left
              leftMost.right = currentNode.right
              currentNode.left = null
              currentNode.right = null

            } else if (parentNode.value < currentNode.value) {
              parentNode.right = leftMost
              leftMost.left = currentNode.left
              leftMost.right = currentNode.right

              currentNode.left = null
              currentNode.right = null
            }
          }
        }
        return true
      }
    }
  }
  print(start = this.root) {
    let currentNode = start

    if (start === null) {
      // cl(`null`)
      return null
    } else {
      cl(`            ${currentNode.value}
          /   \\
         /     \\
         ${currentNode.left?.value||null}     ${currentNode.right?.value||null}`)
    }
    cl(`
    `)
    this.print(currentNode ?.left)
    this.print(currentNode ?.right)

  }
  bfs() {
    let currentNode 
    let list = []
    let queue = [this.root]
    while (queue.length) {
      currentNode=queue.shift()
      list.push(currentNode.value)
      if (currentNode.left) {
        // list.push(currentNode.left.value)
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        // list.push(currentNode.right.value)
        queue.push(currentNode.right)
      }
      // cl(queue)
    }
    return  list
  }
  dfsInorder(node=this.root,list=[]){
    
    if(node.left){
      this.dfsInorder(node.left,list)
    }
    list.push(node.value)
    if(node.right){
      this.dfsInorder(node.right,list)
    }
    return list
  }
  dfsPreorder(node=this.root,list=[]){
    list.push(node.value)
    if(node.left){
      this.dfsPreorder(node.left,list)
    }
    if(node.right){
      this.dfsPreorder(node.right,list)
    }
    return list
  }
  dfsPostorder(node=this.root,list=[]){
    if(node.left){
      this.dfsPostorder(node.left,list)
    }
    if(node.right){
      this.dfsPostorder(node.right,list)
    }
    list.push(node.value)

    return list
  }


}

const tree = new binaryTree()
// cl(tree)

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.remove(20)
// cl(tree.lookup(4))
// cl(tree)
// tree.print()
cl(tree.dfsInorder())
cl(tree.dfsPreorder())
cl(tree.dfsPostorder())