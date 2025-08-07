/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
    ****** Sum **********
    *       [][][][][]
    N       [][][][][]
    *       [][][][][]

    N = no of items
    Sum = current sum with such items
 */
var isPartitionPossibleWithSum = function(arr, n, sum, dp){

    // Initialization
    dp[0].fill(false);
    dp[0][0] = true;
    dp.forEach(row => row[0] = true);

    for(let i = 1;i<=n;i++){
        for(let j = 1; j<=sum; j++){

            let item = arr[i - 1];
            if(item <= sum){ // item is less than our sum, we can take it in our bag
                dp[i][j] = dp[i-1][j - item] || dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][sum];
}
var canPartition = function(nums) {
    let sum = nums.reduce((a,b)=> a + b, 0);
    if(sum%2 !== 0){
        return false;
    }

    let sumForSingleSubset = sum/2;
    let n = nums.length;
    // Array.from has 2nd parameter as mapping function
    let dp = Array.from( {length: n +1 }, ()=> new Array(sum + 1).fill(false));
    
    return isPartitionPossibleWithSum(nums, n, sumForSingleSubset, dp);

};