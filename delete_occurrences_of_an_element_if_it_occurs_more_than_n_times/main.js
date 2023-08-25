function deleteNth(arr,n){
  /// ES6, using value of the array as a key and count as a value.. wow!
  const cache = {};
  return arr.filter(v => {
    cache[v] = cache[v] + 1 || 1;
    return cache[v] <= n;
  });

  /// reduced loop count version
  // for(let i = 0; i < arr.length; i++) {
  //   const lastIndex = arr.lastIndexOf(arr[i]);
  //   if(lastIndex !== i && (lastIndex - i) >= n) {
  //     let count = 0;
  //     for(let j = i; j <= lastIndex; j++) {
  //       if(arr[i] === arr[j]) count++;
  //       if(count > n) {
  //         arr.splice(j, 1);
  //         count--;
  //         j--;
  //       }
  //     }
  //   }
  // }

  // return arr;

  /// for loop
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j = i; j < arr.length; j++) {
      if(arr[i] === arr[j]) count++;
      if(count > n) {
        arr.splice(j, 1);
        count--;
        j--;
      }
    }
  }
  return arr;
}

module.exports = deleteNth;