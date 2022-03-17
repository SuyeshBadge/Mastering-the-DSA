const cl=console.log

const Selectionsort=function(array){
  let n=array.length;
  for(let i=0;i<n;i++){
    minIdx=i
    for(let j =i;j<n;j++){
      if(array[j]<array[minIdx]){
        minIdx=j;
        //? cl(array[minIdx])
      }
    }
      let temp=array[i]
        array[i]=array[minIdx]
        array[minIdx]=temp
  }
  return array
}
cl(Selectionsort([4,7,3,1,9,34,2,66]))