const cl=function(...text){
    console.log(...text)
}
class Stack{
  #data
  constructor(){
    this.top=null
    this.length=0
    this.#data=[]
  }
  push(value){
    this.#data.push(value)
    this.top=this.#data[this.#data.length-1]
    this.length++
    return this
  }
  pop(){
    const temp=this.#data.pop()
    this.top=this.#data[this.#data.length-1]
    this.length--
    return temp
  }
  peek(){
    return this.top
  }
  lookup(){
    cl(`|   |  <---- top`)
    for(let i = this.#data.length-1;i>=0;i--){
      cl(`|   |
|${this.#data[i]}|
|___|`)
    }
    
  }
}
const s1=new Stack()
cl(s1)
s1.push(123)
s1.push(456)
s1.push(789)
s1.push(789)
cl(s1.pop())
cl(s1)
s1.lookup()
cl(s1.peek())
