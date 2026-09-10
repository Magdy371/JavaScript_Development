function confirmEnding(str1, str2){
    let str1Length = str1.length;
    let str2Length =  str2.length;
    let subSlice = str1Length - str2Length;
    const slicedStr = str1.slice(subSlice);
    if(slicedStr === str2){
      return true;
    }
    return false;
  }
console.log(confirmEnding("Bastian", "n"))
