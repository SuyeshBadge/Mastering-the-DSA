const cl=console.log

const Bubblesort=function(array){
  let n=array.length;
  for(let i=0;i<n;i++){
    for(let j =0;j<n-i;j++){
      if(array[j]>array[j+1]){
        let temp=array[j]
        array[j]=array[j+1]
        array[j+1]=temp
      }
    }
  }
  return array
}
cl(Bubblesort([4,7,3,1,9,34,2,66]))