function cl(data){
  console.log(data)
}
function sort(array) {
  for (let i = 0; i < array.length; i++) {
    min_idx=i
      for (let j = i; j < array.length; j++) {
        if(array[min_idx]>array[j]){
          temp=array[min_idx]
          array[min_idx]=array[j]
          array[j]=temp
        }
        
      }
  }
  return array
}

ar1=[1,2,3,4]
ar2=[3,5,2,6]

function solve(arr1,arr2) {
  let final=[...arr1,...arr2]
  return sort(final)
  
}
cl(solve(ar1,ar2))