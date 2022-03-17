const cl =console.log

function linearSearch(array,value){
  for (let i = 0; i < array.length; i++) {
    if(value=== array[i])
    return i
  }
}
cl(linearSearch([1,2,3,4,5,6],4))