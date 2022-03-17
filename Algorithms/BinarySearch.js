const cl =console.log

function binarySearch(array,value){
  let mid=Math.trunc(array.length/2)
  if (value>array[array.length-1]||value<array[0]) {
    return false
  }
  if(value===array[mid]){
    return true
  }
 else if(value>array[mid]){
    return binarySearch(array.slice(mid),value)
  }
  else if(value<array[mid]){
    return binarySearch(array.slice(0,mid),value)
  }
}

cl(binarySearch([1,2,3,5,6],10))