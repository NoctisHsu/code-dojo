/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var find132pattern = function(nums) {
    let result = false;
    nums.forEach((i, index) => {
        var current = i;
        var verifyNext = null;
        var verifyNextNext = null;     
        var list = [].push(current);
        console.log(list)   
        for(var x = index + 1; x <= nums.length - index; x++) {
            var next = nums[x];
            // var nextnext = nums[index+2];
            if(!verifyNext && current < next) {
                verifyNext = next;
            }  
            if(!verifyNextNext && current > next){
                verifyNextNext = next;
            }
            if(current < verifyNext && verifyNext > verifyNextNext && current < verifyNextNext) {
                result = true;
            }
            console.log(current,verifyNext,verifyNextNext)
        }
    });
    return result;
};

//find132pattern([-1,3,2,0]);
//find132pattern([3,1,4,2]);
//find132pattern([1,0,1,-4,-3]);
console.log(find132pattern([3,5,0,3,4]));