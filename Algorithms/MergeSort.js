const cl = console.log

const Mergesort = function (array) {
  if (array.length === 1) {
    return array
  }
  mid = Math.trunc(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)
  // cl(left, right)
  return merge(
    Mergesort(left),
    Mergesort(right)
    )
}

function merge(left, right) {
  n = left.length
  m = right.length
  // cl(n,m)
  let mergeArr = []
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    
    if (left[i] < right[j]) {
      mergeArr.push(left[i])
      i++;
    } else if (left[i] > right[j]) {
      mergeArr.push(right[j])
      j++;
    } else {
      mergeArr.push(left[i], right[j])
      i++
      j++
    }
    if (i >= n || j >= m) {
      mergeArr.push(...left.slice(i,n),...right.slice(j,m))
    }
    // cl('Merge array '+mergeArr)

    // cl(i, j)
  }
  return mergeArr
}
let t1=Date.now()
cl(Mergesort(Array.from({length: 40}, () => Math.floor(Math.random() * 10**6))))
// cl(merge([1, 2, 5,7,12,14], [2, 3, 4, 6,11]))
let t2=Date.now()
cl(t2-t1)