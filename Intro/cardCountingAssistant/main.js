let count = 0;
//inArray method check if represented object within the array provided  
function inArray(arr, obj)
{
    let result = false;
    for(let i=0; i< arr.length; i++){
        if(arr[i] == obj){
            result = true;
            return result;
        }
    }
    return result;
}
function cardCounter(card)
{
  if(inArray([2, 3, 4, 5, 6],card)){
    count +=1;
  }else if(inArray([10, "J", "Q", "K", "A"], card))
  {
    count-=1;
  }
  return `${count} ${count > 0 ? "Bet": "Hold"}`;
}

console.log(cardCounter(5));
