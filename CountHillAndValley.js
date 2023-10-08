var countHillValley = function(nums) {
    let count = 0;
    let i = 1;
    const n = nums.length;

    while (i < n - 1) {
        let left = i - 1;
        let right = i + 1;

        while (left >= 0 && nums[left] === nums[i]) {
            left--;
        }

        while (right < n && nums[right] === nums[i]) {
            right++;
        }

        if (left >= 0 && right < n && nums[left] < nums[i] && nums[right] < nums[i]) {
            count++;
            i = right;
        } else if (left >= 0 && right < n && nums[left] > nums[i] && nums[right] > nums[i]) {
            count++;
            i = right;
        } else {
            i++;
        }
    }

    return count;
};

// Another Method
var countHillValley = function(nums) {
       let res = 0;
    for (let i = 1, j = 0; i < nums.length - 1; ++i) {
        if ((nums[j] < nums[i] && nums[i] > nums[i + 1]) || 
            (nums[j] > nums[i] && nums[i] < nums[i + 1])) {
            ++res;
            j = i;
        }
    }
    return res;
};