//find the pattern in the sequence and alter the condition accordingly 

const arr= [1,3,5,6,8,10]

function missing(arr){
    let result = [];
   for (let i=0; i< arr.length-1; i++){
    if (!(arr[i+1] - arr[i] === 1)){
      result.push((arr[i+1] + arr[i])/2)
    //   continue
    }
} 
return result;
}
console.log(missing(arr))

