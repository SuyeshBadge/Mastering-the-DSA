class Node{
    constructor(value){
      this.value=value
      this.neighbours=[]
    }
  }
  class Graph{
    constructor(){
      this.nodes=0
      this.vertices={}
      this.connections={}
    }
    addVertex(value){
      const newNode=new Node(value)
      this.nodes++
      this.vertices[value]=newNode
      this.connections[newNode.value]=[]
      return this
    }
  
    addEdge(n1,n2){
      const node1 = this.vertices[n1]
      const node2 = this.vertices[n2]
      if(! node1&&node2)return null
      node1.neighbours.push(node2)
      node2.neighbours.push(node1)
      
      // console.log(node1.value,node2.value);
      
      if(!this.connections[node1.value]){
        this.connections[node1.value].push(node1.value)
      }
      else{
        this.connections[node1.value].push(node2.value)
      }
      
    }
    showConnections(){
      for(let i=1;i<=this.nodes;i++){
        const node= this.vertices[i]
        console.log(`${i} --> ${(node.neighbours.map((n)=>{return n.value})).join(' ')}`)
      }
      
    }
  }
  
  const g= new Graph()
  g.addVertex(1)
  g.addVertex(2)
  g.addVertex(3)
  g.addVertex(4)
  g.addVertex(5)
  g.addVertex(6)
  g.addEdge(1,2)
  g.addEdge(1,4)
  g.addEdge(2,3)
  g.addEdge(3,4)
  g.addEdge(4,5)
  g.addEdge(5,6)
  g.addEdge(6,1)
  
  g.showConnections()