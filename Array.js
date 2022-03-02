const cl=function(...text){
    console.log(...text)
}

class myArray {
  #data
  constructor(size=0){
    this.length=size
     this.#data={}
    
  }
  append(value){
    this.#data[this.length]=value
    this.length++
  }
  pop(index=this.length-1){
    delete this.#data[index]
    this.length--
  }
  fill(value){
    for (let i = 0; i < this.length; i++) {
      this.#data[i]=value
    }
  }
  get(index){
    return this.#data[index]
  }
  print(){
    for (let i = 0; i < this.length; i++) {
      cl(this.#data[i])
    }
  }
}


const arr=new myArray(100)
arr.fill(0)
const arr1=new myArray()
arr1.append(1)
arr1.append(2)
arr1.append(3)
arr1.print()
// cl(arr1.get(2))
