/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let uniqueCount = 0
    // const uniqueElements = [];
    // for (const num of arr) {
    //     if (!uniqueElements.includes(num)) {
    //         uniqueElements.push(num);
    //     } 
    // }
    // // for (i of arr){
    // //      if(!(uniqueElements.length === arr.length)){
    // //     uniqueElements.push(" ")
    // //  }
    // // }
    // for ( i = 1 ; i<= uniqueElements.length ; i++){
    //     if(uniqueElements[i] !== "_"){
    //         ++ uniqueCount;
    //     }
    // }
    // // console.log(uniqueCount ,",", uniqueElements)
    // console.log(uniqueElements)
      if(nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j ++){
        if(nums[j] !== nums[i]){
           i++;
           nums[i] = nums[j];
        }
    }

    return i + 1
};